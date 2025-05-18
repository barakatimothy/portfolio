// // @app/socia/page.tsx
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My channels</H2>
        <p>
          I go all in on my work, leveraging the latest technology to ensure my
          clients are always satisfied.
        </p>
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.youtube.com/@barakatimothy9798"
              className="text-primary hover:underline"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/barakatimothy25"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://x.com/barakatimo78187"
              className="text-primary hover:underline"
            >
              x
            </a>
          </li>
          <li>
            <a
              href="https://github.com/barakatimothy"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/baraka-timothy-b8ba55355/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>
          If you want to work with me on a project, please contact me via email
          at{" "}
          <a
            href="mailto:barakatimothy@pipsyhussle.com"
            className="text-primary hover:underline"
          >
            timothybaraka39@gmail.com
          </a>
        </p>
      </section>
    </section>
  );
}
