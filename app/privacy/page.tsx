import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import SiteFooter from "@/components/layout/SiteFooter";

const SECTIONS = [
  {
    title: "1. Introduction",
    body: `AB KAY Productions ("we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or interact with our services  including AB KAY Music Production, AB KAY Fast Food, and AB KAY Complex.

By using our website, you agree to the practices described in this policy.`,
  },
  {
    title: "2. Information We Collect",
    body: `We may collect the following types of information:

 **Contact data**  Your name, phone number, and message when you reach out to us via our contact form or WhatsApp.
 **Usage data**  Anonymous analytics about how visitors navigate and interact with our site (pages viewed, session duration, device type).
 **Cookies**  Small data files stored on your device to improve your browsing experience (see Section 4).

We do not collect sensitive personal data such as financial information or identity documents.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information we collect to:

 Respond to your inquiries and booking requests.
 Improve our website content and user experience.
 Send relevant updates about our services (only if you have opted in).
 Comply with legal obligations when required.

We will never sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: "4. Cookies",
    body: `Our website uses the following cookies:

 **Essential cookies**  Required for core functionality (e.g., language preferences via Google Translate).
 **Analytics cookies**  Help us understand how visitors use our site. These are anonymous and do not identify individuals.

You can control cookies through your browser settings. Disabling cookies may affect some features of the site.`,
  },
  {
    title: "5. Google Translate",
    body: `We use the Google Translate widget to offer content in English and French. When you use this feature, your request is processed by Google's servers. Google's own Privacy Policy applies to this processing. You can review it at https://policies.google.com/privacy.`,
  },
  {
    title: "6. Third-Party Links",
    body: `Our website may contain links to third-party platforms (WhatsApp, Facebook, TikTok, YouTube). We are not responsible for the privacy practices of these platforms. We encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: "7. Data Retention",
    body: `We retain contact messages and inquiry data for a maximum of 12 months, after which they are securely deleted. Anonymous analytics data may be retained longer for trend analysis.`,
  },
  {
    title: "8. Your Rights",
    body: `Depending on your location, you may have the right to:

 Access the personal data we hold about you.
 Request correction of inaccurate data.
 Request deletion of your data.
 Object to or restrict certain uses of your data.

To exercise any of these rights, contact us via WhatsApp or our contact form.`,
  },
  {
    title: "9. Children's Privacy",
    body: `Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such data, please contact us immediately so we can delete it.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of the page. We encourage you to review this page periodically to stay informed about how we protect your information.`,
  },
  {
    title: "11. Contact",
    body: `If you have questions or concerns about this Privacy Policy or how we handle your data, please reach out to us:

 WhatsApp: +237 000 000 000
 Location: Carrefour Matango, Japoma, Douala, Cameroon`,
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How AB KAY Productions collects, uses and protects your information across our website and services.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/*  Hero  */}
      <section className="relative pt-28 pb-16 px-6 md:px-[8%] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
        <div className="relative max-w-3xl">
          <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase mb-4">
            Legal
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Privacy Policy
          </h1>
          <div className="h-0.5 w-16 bg-primary mb-5" />
          <p className="text-white/50 text-sm">
            Last updated: <span className="text-white/70">July 2026</span>
          </p>
        </div>
      </section>

      {/*  Policy content  */}
      <section className="py-16 px-6 md:px-[8%]">
        <div className="max-w-3xl space-y-12">
          {SECTIONS.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-lg font-bold text-white/90 border-l-2 border-primary pl-4">
                {section.title}
              </h2>
              <div className="text-white/50 text-sm leading-8 pl-6 whitespace-pre-line">
                {section.body.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={i} className="text-white/80 font-semibold">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  Back link + footer  */}
      <section className="py-10 px-6 md:px-[8%] border-t border-white/5">
        <div className="max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            Questions? Contact us
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
