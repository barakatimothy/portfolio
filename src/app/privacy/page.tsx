import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <H1>Privacy Policy</H1>
        <p>Last Updated: March 2025</p>
      </div>
      <div className="space-y-3">
        <H2>Introduction</H2>
        <p>
          Welcome to my website. This Privacy Policy explains our practices
          regarding the collection, use, and disclosure of information that we
          receive through our website.My primary goal is to showcase my work
          and skills while respecting your privacy.
        </p>
        <H2>Information We Collect</H2>
        <p>
          As this website is a static portfolio, I do not actively collect
          personal data from visitors. No account creation is required, and we
          do not use cookies for tracking or personal data collection.
        </p>
        <H3>1. Contact Information</H3>
        <p>
          If I provide an option for you to contact me via email or a contact
          form, any information you provide is voluntary and used solely to
          respond to your inquiries.
        </p>
        <H2>Use of Information</H2>
        <p>The information I collect is used in the following ways:</p>
        <ul className="list-inside list-disc">
          <li>To ensure the proper functioning of my website </li>
          <li>
            To improve my website based on the information and feedback we
            receive from you{" "}
          </li>
          <li>
            To respond to your customer service requests and support needs
          </li>
        </ul>
        <H2>Information Sharing and Disclosure</H2>
        <p>
          I do not sell, trade, or rent users&apos; personal identification
          information to others. We may share generic aggregated demographic
          information not linked to any personal identification information
          regarding visitors and users with our business partners, trusted
          affiliates, and advertisers for the purposes outlined above.
        </p>
        <H2>Security</H2>
        <p>
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage, is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, I
          cannot guarantee its absolute security.
        </p>
        <H2>Changes to This Privacy Policy</H2>
        <p>
          This Privacy Policy is effective as of March 2025 and will remain in
          effect except with respect to any changes in its provisions in the
          future, which will be in effect immediately after being posted on this
          page. I reserve the right to update or change our Privacy Policy at
          any time, and you should check this Privacy Policy periodically.
        </p>
        <H2>Contact Us</H2>
        <p>
          If you have any questions about this Privacy Policy, please contact me
          at timothybaraka39@gmail.com.
        </p>
      </div>
    </section>
  );
}
