import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

// Page-specific metadata for better SEO
export const metadata = {
  title: "Sreyansu Sekhar Mohanty | Full Stack Developer | React & Next.js Expert",
  description:
    "Welcome to my portfolio! I'm Sreyansu Sekhar Mohanty, a Full Stack Developer from Odisha, India. I build production-ready web applications using React.js, Next.js, Node.js, MongoDB, and integrate AI. Explore my projects and experience.",
  alternates: {
    canonical: "https://sreyansu.in",
  },
};

export default function Home() {
  return (
    <>
      {/* Hidden SEO content for screen readers and crawlers */}
      <h1 className="sr-only">
        Sreyansu Sekhar Mohanty - Full Stack Developer Portfolio | React.js, Next.js, Node.js Expert from India
      </h1>

      <main className="min-h-screen" role="main" aria-label="Portfolio of Sreyansu Sekhar Mohanty">
        <Navbar />

        {/* Main Sections with semantic HTML for SEO */}
        <article>
          <Hero />
        </article>

        <article id="about-section" aria-labelledby="about-heading">
          <About />
        </article>

        <article id="projects-section" aria-labelledby="projects-heading">
          <FeaturedProjects />
        </article>

        <article id="experience-section" aria-labelledby="experience-heading">
          <Experience />
        </article>

        <article id="contact-section" aria-labelledby="contact-heading">
          <Contact />
        </article>

        <Footer />
      </main>

      {/* Additional SEO text - visible only to search engines */}
      <div className="sr-only" aria-hidden="true">
        <p>
          Sreyansu Sekhar Mohanty is a Full Stack Developer based in Sambalpur, Odisha, India.
          Currently pursuing B.Tech in Computer Science and Engineering at VSSUT (Veer Surendra Sai University of Technology).
          Specialized in React.js, Next.js, Node.js, MongoDB, Firebase, and AI integration.
          Previously interned at Elevate Labs (Bengaluru) and Skill Dunia (Hyderabad).
          Available for freelance projects, internships, and full-time opportunities.
          Contact for web development, full stack projects, and software development.
        </p>
        <p>
          Skills: JavaScript, TypeScript, Python, C++, React, Next.js, Node.js, Express.js,
          MongoDB, Firebase, Supabase, REST APIs, GraphQL, Tailwind CSS, Three.js,
          Framer Motion, Git, GitHub, Docker, Google Cloud Platform, OpenAI API.
        </p>
        <p>
          Education: B.Tech CSE at VSSUT Burla (CGPA: 8.58), Class XII from SBD International School Bhadrak (93%),
          Class X from SBD International School Bhadrak (94.2%).
        </p>
      </div>
    </>
  );
}
