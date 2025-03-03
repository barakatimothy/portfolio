import bjj from "@/assets/bjj.jpg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Florian Walther and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Baraka Timothy and I am a professional software developer
          from Nairobi.
        </p>
        <p>
          I&apos;m passionate about building cool apps and websites and I love
          sharing the things I learn with others online.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Django</strong>.
        </p>
        <p>
          I also have experience with Mobile development. I prefer web
          development because you can use a modern website on almost every
          device and reach the whole world with it.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://pipsyhussle.com"
              className="text-primary hover:underline"
            >
             Pipsy hussle
            </a>{" "}
            - An online Learning Management System
          </li>
          <li>
            <Link
              href="https://afyaonthego."
              className="text-primary hover:underline"
            >
              Afya on the go
            </Link>{" "}
            - A digital health care platform 
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love boat riding and adventure.I also follow geopolitical issues.
        </p>
        <p>
          I&apos;m also very much into self-improvement, nutrition, and positive
          psychology.
        </p>
        <Image
          src={bjj}
          alt="Brazilian Jiu-Jitsu group photo"
          className="rounded-md"
        />
      </section>
    </section>
  );
}
