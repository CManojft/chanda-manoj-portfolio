import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chanda Manoj | Agentic AI Developer & Data Analyst",
  description:
    "Portfolio of Chanda Manoj — M.Sc. Statistics and Computing graduate focused on Agentic AI, Python, Azure, machine learning and data analytics.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Chanda Manoj | Agentic AI Developer & Data Analyst",
    description: "Building intelligent AI workflows and turning data into useful insights.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
