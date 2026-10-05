import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Texcortech Systems | Immersive Digital Engineering", description: "Software, cloud, AI and cybersecurity engineered as connected digital systems." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
