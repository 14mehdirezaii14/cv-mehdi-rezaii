"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          My journey into development started with a passion for turning design
          into clean, functional code. Over the past 5 years, I've worked on
          real-time applications, advertising SDKs, dashboards, and PWAs —
          helping users experience fast, reliable, and meaningful digital
          products.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          I've recently contributed to frontend and full-stack projects like
          Upera and Ozone, building scalable UI architectures, Django APIs, and
          optimized PostgreSQL backends. I’ve developed custom SDKs, implemented
          tracking systems, and collaborated closely with product and design
          teams to ship production-ready solutions.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Beyond coding, I enjoy designing interfaces that balance clarity,
          simplicity, and usability. I believe that great code is invisible to
          users — but its impact is felt in every click, scroll, and
          interaction.
        </p>
      </div>
    </section>
  );
}
