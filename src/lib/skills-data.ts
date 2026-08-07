import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiReduxsaga,
  SiNodedotjs,
  SiDjango,
  SiDotnet,
  SiLaravel,
  SiAntdesign,
  SiMysql,
  SiMongodb,
  SiTerraform,
  SiWebpack,
  SiJest,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

// Sourced from CV "TECHNICAL SKILLS" line plus tech-stacks listed under each
// project in the CV. Mobile-only tech (Flutter) is kept as a per-project tag
// in Projects.tsx rather than a general skill — CV positions the role as
// Frontend Developer, not Frontend & Mobile.
export const skillsData = {
  core: [
    { name: "HTML5", color: "#E34F26", icon: SiHtml5 },
    { name: "CSS3", color: "#1572B6", icon: SiCss },
    { name: "Sass", color: "#CC6699", icon: SiSass },
    { name: "JavaScript", color: "#F0B429", icon: SiJavascript },
    { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
  ],
  frameworks: [
    { name: "React", color: "#61DAFB", icon: SiReact },
    { name: "Next.js", color: "#818CF8", icon: SiNextdotjs },
    { name: "jQuery", color: "#0769AD", icon: SiJquery },
    { name: "Bootstrap", color: "#7952B3", icon: SiBootstrap },
    { name: "Tailwind CSS", color: "#38BDF8", icon: SiTailwindcss },
    { name: "Redux Saga", color: "#764ABC", icon: SiReduxsaga },
    { name: "Node.js", color: "#339933", icon: SiNodedotjs },
    { name: "Django REST Framework", color: "#092E20", icon: SiDjango },
    { name: ".NET / ASP.NET Core", color: "#512BD4", icon: SiDotnet },
    { name: "Laravel", color: "#FF2D20", icon: SiLaravel },
    { name: "Ant Design", color: "#1890FF", icon: SiAntdesign },
  ],
  tools: [
    { name: "MySQL", color: "#4479A1", icon: SiMysql },
    { name: "MongoDB", color: "#47A248", icon: SiMongodb },
    { name: "SQL Server", color: "#CC2927", icon: DiMsqlServer },
    { name: "AWS", color: "#FF9900", icon: FaAws },
    { name: "Terraform", color: "#7B42BC", icon: SiTerraform },
    { name: "Webpack", color: "#8DD6F9", icon: SiWebpack },
    { name: "Jest", color: "#C21325", icon: SiJest },
  ],
} as const;

export type SkillCategory = keyof typeof skillsData;

export const allSkills = [
  ...skillsData.core,
  ...skillsData.frameworks,
  ...skillsData.tools,
];
