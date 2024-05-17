import type { Metadata, Viewport } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation/Navigation";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space_grotesk",
});

export const metadata: Metadata = {
  title: "Tobias Meyhöfer",
  description:
    "A portfolio of the web, mobile and software developer Tobias Meyhöfer",
};

// export const viewport: Viewport = {
//   themeColor: "#5C67C6",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={cn(
          "h-[calc(100vh-140px)] overflow-x-hidden font-space_grotesk antialiased",
          montserrat.variable,
          space_grotesk.variable,
        )}
      >
        <div className="fixed bottom-0 w-full bg-neutral-900 py-2 text-center text-neutral-400">
          This page is currently under construction
        </div>
        <header className="flex justify-center">
          <div className="w-full max-w-[1400px]">
            <Navigation></Navigation>
          </div>
        </header>
        <main className="flex h-full justify-center">
          <div className="w-full max-w-[1400px] px-8">{children}</div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
