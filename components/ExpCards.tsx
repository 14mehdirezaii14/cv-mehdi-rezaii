"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "May 2023 — Apr 2025 (2 yrs)",
    currentPosition: "Front End Developer",
    place: "Upera",
    previousPositions: [""],
    description: `Developed multi-platform web apps using Next.js, Zustand, and Tailwind CSS. 
      Reduced page load time by 20% and increased user engagement by 30%.
      Built high-performance advertising SDK with pure JS and CSS.
      Implemented tracking with IntersectionObserver & MutationObserver.
      Implemented tracking with IntersectionObserver & MutationObserver.
      `,
    skills: ["chart.ts", "ReactJs", "NextJs", "TailwindCss", "Turborepo"],
  },
  {
    timeline: "Aug 2022 — May 2023 (10 mos)",
    currentPosition: "Full Stack",
    place: "Ozone",
    previousPositions: [""],
    description: `Developed and maintained full-stack applications using Django for the backend and React for the front end, enhancing the
functionality and performance of web applications.
Designed and implemented RESTful APIs in Django to facilitate seamless data exchange between client and server, improving
the application’s scalability and performance
`,
    skills: ["Docker", "ReactJs", "Python", "Django", "NextJs"],
  },
  {
    timeline: "May 2022 - Aug 2022 (4 mos)",
    currentPosition: "Front End Developer",
    place: "Hupad Store",
    previousPositions: [""],
    description: `Developed Multi-Panel User Interfaces: Designed and implemented sophisticated multi-panel user interfaces for a complex
dashboard application, enhancing user productivity and interaction.
Utilized React and Redux to manage state across multiple panels, ensuring seamless user experience and data consistency.
Conducted performance profiling and applied code-splitting techniques to enhance application speed.

`,

    skills: [
      "Typescript",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
      "MUI",
      "HTML",
      "Figma",
      "NextJs",
      "ReactJs",
    ],
  },
  {
    timeline: "2019 - 2020",
    currentPosition: "Front End Developer",
    place: "Saghar",
    previousPositions: [""],
    description: `Spearheaded the development of a betting game platform, utilizing ReactJS for building dynamic and responsive user interfaces.
    Integrated PusherJS to develop a real-time chat feature, enabling instant messaging and improving the overall user experience
for live betting interactions.
Implemented state management with Redux, ensuring seamless data flow across components and efficient handling of complex
user interactions
    `,
    skills: ["PusherJs", "NextJs", "ReactJs", "BootStrap"],
  },
  {
    timeline: "2018 - 2019",
    currentPosition: "PWA Developer",
    place: "Siman Mahan",
    previousPositions: [""],
    description: `Developed Progressive Web Application: Led the development of Progressive Web Apps, enhancing user engagement and
providing a seamless offline experience`,
    skills: ["PWA", "ServceWorker", "JavaScript"],
  },
];

export default function ExpCard() {
  return (
    <section id="experiences" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-xs text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="mailto:99mehdirezaii99@gmail.com"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary">
            Reach out for Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2" />
        </a>
      </div>
    </section>
  );
}
