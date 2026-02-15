import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Engineering Tutoring - Learn from Industry Expert",
  description: "Get personalized data engineering tutoring from an experienced industry practitioner. Master modern data stacks, pipelines, and real-world production patterns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
