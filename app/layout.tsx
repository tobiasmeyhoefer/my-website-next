import type { Metadata, Viewport } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { BlurIn } from "@/components/animations/blur-in";
import NavBar from "@/components/nav/nav";
import { DockInUse } from "@/components/magicui/dock-in-use";
import NumberTicker from "@/components/magicui/number-ticker";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space_grotesk",
});

export const metadata: Metadata = {
  title: "Tobias Meyhoefer",
  description:
    "A portfolio of the web, mobile and software developer Tobias Meyhoefer",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "h-0 min-h-screen overflow-x-hidden font-space_grotesk text-neutral-800 antialiased",
          montserrat.variable,
          space_grotesk.variable,
        )}
      >
        <header className="flex justify-center">
          <div className="w-full max-w-[1800px]">
            <NavBar />
          </div>
        </header>
        <main className="flex min-h-[calc(100vh-180px)] justify-center">
          <div className="w-full max-w-[1800px] px-6 md:px-8">{children}</div>
          <span className="fixed bottom-10 left-1/2 max-xl:hidden -translate-x-1/2 w-fit p-0 m-0 h-fit">
            <DockInUse />
          </span>
        </main>
        <footer className="flex h-20 w-full items-center justify-center text-neutral-400">
          <BlurIn />
        </footer>

        <div className="counterWrapper absolute inset-0 flex justify-center items-center">
          <NumberTicker value={100} className="text-6xl font-bold"/>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
