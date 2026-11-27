// Loader for the vendored Swarm Rebuild engine (public/swarm/swarm.js): a swarm of multiplayer
// cursors that blanks the page and rebuilds it live. The script is ~150 KB, so it is fetched only
// when the swarm first starts. Running it starts the swarm and exposes window.__swarmRebuild.

declare global {
  interface Window {
    __swarmRebuild?: {
      start: () => void;
      stop: (reveal: boolean) => void;
      toggle: () => void;
      readonly app: unknown;
    };
  }
}

const SRC = "/swarm/swarm.js";
const SEEN_KEY = "swarm-rebuild:intro-seen";
// Wait past the hero's entrance animations so the swarm snapshots the settled page.
const SETTLE_MS = 1500;
// Desktop only: the engine is built for a mouse, and it is heavy for a phone's first visit.
const AUTOPLAY_MEDIA = "(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

// The swarm can't redraw masked / offset-path / negative-z decor (BorderBeam, Meteors, the shimmer
// layers of ShimmerButton), and it drops text caught mid-animation (WordRotate). Those elements carry
// data-swarm-skip / data-swarm-settle, and globals.css hides or settles them while <html> has this
// attribute: from before the snapshot until the swarm's overlay is gone.
const ACTIVE_ATTR = "data-swarm";

let loading: Promise<void> | null = null;

function markActiveUntilSwarmEnds() {
  const html = document.documentElement;
  html.setAttribute(ACTIVE_ATTR, "");
  let seen = false;
  const observer = new MutationObserver(() => {
    // Replay swaps the overlay in one task, so it is never seen missing here.
    if (document.querySelector("[data-swarm-rebuild]")) seen = true;
    else if (seen) {
      html.removeAttribute(ACTIVE_ATTR);
      observer.disconnect();
    }
  });
  observer.observe(html, { childList: true }); // the overlay is a direct child of <html>
}

export function startSwarm(): Promise<void> {
  if (window.__swarmRebuild?.app) return Promise.resolve(); // already on screen
  markActiveUntilSwarmEnds();
  if (window.__swarmRebuild) {
    window.__swarmRebuild.start();
    return Promise.resolve();
  }
  loading ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loading = null;
      script.remove();
      document.documentElement.removeAttribute(ACTIVE_ATTR);
      reject(new Error(`Failed to load ${SRC}`));
    };
    document.body.appendChild(script);
  });
  return loading;
}

/** Plays the swarm once, on the visitor's first visit. Returns a cleanup for the pending start. */
export function autoplaySwarmOnce(): () => void {
  try {
    if (localStorage.getItem(SEEN_KEY)) return () => {};
  } catch {
    return () => {}; // storage blocked: we couldn't remember it played, so don't replay it every visit
  }
  if (!window.matchMedia(AUTOPLAY_MEDIA).matches) return () => {};

  let timer: number | undefined;
  const schedule = () => {
    timer = window.setTimeout(() => {
      try {
        localStorage.setItem(SEEN_KEY, "1");
      } catch {}
      startSwarm().catch((err) => console.error("[swarm-rebuild]", err));
    }, SETTLE_MS);
  };
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });

  return () => {
    window.removeEventListener("load", schedule);
    window.clearTimeout(timer);
  };
}
