"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/upera.png",
    title: "Upera — VOD Streaming Platform UI",
    description:
      "Developed a high-performance and responsive video-on-demand platform using Next.js, Zustand, and React Query.",
    skills: ["NextJs", "React", "PWA", "Figma", "Zustand"],
    link: "https://upera.tv",
  },
  {
    imagePath: "/uperaTv.png",
    title: "Upera TV — Smart TV UI Platform",
    description:
      "Designed and developed a custom video streaming UI tailored for smart TVs, focusing on performance, accessibility, and smooth navigation using remote controls.",
    skills: ["JavaScript (Vanilla)", "CSS (no framework)", "Custom UX Design"],
    link: "https://upera.tv/tv",
  },
  {
    imagePath: "/sdk.png",
    title: "Jaar — AdTech SDK & Multi-Panel Dashboard",
    description: `Developed a lightweight JavaScript SDK for tracking ad views and clicks across publisher sites, integrated with real-time charts and analytics for advertisers and admins.
Built using Turborepo to manage publisher, advertiser, and admin panels in a scalable monorepo — tackling cross-domain tracking, data sync, and UI performance challenges.`,
    skills: [
      "Next.js",
      "ChartJs",
      "Typescript",
      "JavaScript",
      "SDK",

    ],
    link: "https://advpanel.seeko.app/",
  },

];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
