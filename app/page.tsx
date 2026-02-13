import HeroSection from "./components/homepage/hero-section";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import GithubSection from "./components/homepage/github";
import Education from "./components/homepage/education";
import AboutSection from "./components/homepage/about";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";


export default async function Home() {
    return (
        <div suppressHydrationWarning >
            <HeroSection />
            <AboutSection />
            <Experience />
            <Skills />
            <Projects />
            <GithubSection />
            <Education />
            <ContactSection />
        </div>
    );
}