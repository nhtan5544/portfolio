export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nguyen Huu Tan",
    alternateName: ["Tronie Nguyen", "nhtan5544"],
    jobTitle: "Frontend & Mobile Developer",
    url: "https://portfolio-nhtan5544.vercel.app",
    image: "https://portfolio-nhtan5544.vercel.app/IMG_7719.jpg",
    email: "nhtan5544@gmail.com",
    telephone: "+84393930709",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "Vietnam",
    },
    sameAs: [
      "https://github.com/nhtan5544",
      "https://www.linkedin.com/in/tan-nguyen-huu-0ab0721b1/",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Node.js",
      "Frontend Development",
      "Mobile App Development",
      "UI/UX Design",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nguyen Huu Tan Portfolio",
    url: "https://portfolio-nhtan5544.vercel.app",
    author: {
      "@type": "Person",
      name: "Nguyen Huu Tan",
    },
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
