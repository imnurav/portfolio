import HeroSection from "./components/homepage/hero-section";
import ContactSection from "./components/homepage/contact";
import { personalData } from "@/utils/data/personal-data";
import Experience from "./components/homepage/experience";
import GithubSection from "./components/homepage/github";
import Education from "./components/homepage/education";
import AboutSection from "./components/homepage/about";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Blog from "./components/homepage/blog";

interface BlogPost {
    cover_image?: string;
    published_at: string;
    public_reactions_count: number;
    comments_count: number;
    url: string;
    title: string;
    reading_time_minutes: number;
    description: string;
    [key: string]: any;
}

// async function getData(): Promise<BlogPost[]> {
//     const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }

//     let data: BlogPost[] = await res.json();

//     const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

//     return filtered;
// }

export default async function Home() {
    // const blogs = await getData();

    return (
        <div suppressHydrationWarning >
            <HeroSection />
            <AboutSection />
            <Experience />
            <Skills />
            <Projects />
            <GithubSection />
            <Education />
            {/* <Blog blogs={blogs} /> */}
            <ContactSection />
        </div>
    );
}