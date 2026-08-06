import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Timeline";
import { Achievements } from "@/components/Achievements";

import { ResumeSection } from "@/components/ResumeSection";
import { AskMeAnything } from "@/components/AskMeAnything";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Shiva Maurya | Software Developer Portfolio";
const description =
  "Portfolio of Shiva Maurya, a Computer Science student and aspiring Software Developer specializing in Java, JavaScript, React.js, Node.js, Express.js, MongoDB, and Data Structures & Algorithms.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Shiva Maurya",
          jobTitle: "Software Developer",
          alumniOf: "Raj Kumar Goel Institute of Technology",
          address: { "@type": "PostalAddress", addressLocality: "Ghaziabad", addressCountry: "IN" },
          sameAs: [
            "https://github.com/shivamaurya01",
            "https://leetcode.com/u/shivva_maurya01/",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        <Education />
        <Achievements />
       
        <ResumeSection />
        <AskMeAnything />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
