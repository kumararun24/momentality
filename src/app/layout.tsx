import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Momentality",
  description:
    "A thoughtful family assistant that helps you stay organized and connected.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try { if (localStorage.getItem("momentality-theme") === "dark") document.documentElement.classList.add("dark"); } catch {}',
          }}
        />
      </head>
      <body className={cn(inter.className, "antialiased")}>{children}</body>
    </html>
  );
}