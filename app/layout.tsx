import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { SiteLayout } from "@/components/site-layout";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SuccessScript — Software Development",
    template: "%s — SuccessScript",
  },
  description:
    "SuccessScript builds web and mobile software applications for businesses and individuals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={syne.variable}>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
