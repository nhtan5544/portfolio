const siteUrl = "https://portfolio-nhtan5544.vercel.app";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}#person`,
    // The page is `lang="vi"`, so the Vietnamese spelling is the primary name and the
    // ASCII form is an alternate.
    name: "Nguyễn Hữu Tấn",
    alternateName: ["Nguyen Huu Tan", "Tronie Nguyen", "nhtan5544"],
    jobTitle: "Frontend Developer",
    knowsLanguage: ["vi", "en"],
    url: siteUrl,
    image: `${siteUrl}/image.png`,
    email: "nhtan5544@gmail.com",
    telephone: "+84393930709",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "Vietnam",
    },
    sameAs: ["https://github.com/nhtan5544", "https://www.linkedin.com/in/tan-nguyen-huu-0ab0721b1/"],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      ".NET / ASP.NET Core",
      "MySQL",
      "MongoDB",
      "AWS",
      "Frontend Development",
      "UI/UX Design",
    ],
  };

  // `@id` cross-references let search engines resolve the site and the person as one
  // entity instead of two unrelated nodes.
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: "Nguyen Huu Tan Portfolio",
    url: siteUrl,
    inLanguage: "vi-VN",
    author: { "@id": `${siteUrl}#person` },
    publisher: { "@id": `${siteUrl}#person` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
