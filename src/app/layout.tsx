import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "KareHero for Transport for London | Care Support for Your Workforce",
  description:
    "1 in 5 TfL employees are carers. KareHero provides dedicated Care Advisors to help your workforce navigate care responsibilities.",
  openGraph: {
    type: "website",
    url: "https://tfl.karehero.com/",
    title: "KareHero for Transport for London",
    description:
      "1 in 5 TfL employees are carers. KareHero provides dedicated Care Advisors to help your workforce navigate care responsibilities.",
    siteName: "KareHero",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${workSans.variable} font-work-sans antialiased bg-floral-white text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
