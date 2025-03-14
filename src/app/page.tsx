import me from "@/assets/me.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Baraka Timothy - My Portfolio",
};

export default function Home() {
  return (
    <main className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <header className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, I&apos;m Baraka👋</H1>
          <p className="text-center sm:text-start">
            I&apos;m a developer from Nairobi passionate about building innovative projects.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="A photo of me"
            height={250}
            width={250}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground hover:scale-105 transition-transform"
          />
        </div>
      </header>

      <section className="space-y-3 text-center">
        <H2>More About Me</H2>
        <p>
          I specialize in <strong>building scalable web applications</strong> with a focus on 
          <strong> clean code, intuitive design, and high performance</strong>. I enjoy working with 
          React, Next.js, Tailwind CSS, and backend technologies to create 
          seamless user experiences.
        </p>
        <p>
          Whether it&apos;s <strong>developing full-stack applications, designing interactive dashboards, 
          or optimizing web performance</strong>, I love solving complex problems with elegant solutions.
        </p>
      </section>
    </main>
  );
}
