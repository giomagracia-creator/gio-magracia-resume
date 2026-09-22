import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gio Franz Magracia | Project Manager · EIT · PMP Eligible",
  description:
    "Project Manager and Engineer-in-Training (APEGA) based in Edmonton, AB. Capital & maintenance project delivery, controls, and stakeholder leadership. Open to remote / hybrid PM roles.",
  openGraph: {
    title: "Gio Franz Magracia | Project Manager · EIT · PMP Eligible",
    description:
      "Capital & maintenance project delivery across industrial and civil construction. Edmonton, AB — open to remote / WFH.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
