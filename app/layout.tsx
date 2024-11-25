import type { Metadata, Viewport } from "next";
import { Montserrat, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/nav/nav";
import { DockInUse } from "@/components/magicui/dock-in-use";
import FooterContent from "@/components/FooterContent";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space_grotesk",
});

export const metadata: Metadata = {
  title: "Tobias Meyhöfer - Webdeveloper Portfolio",
  description:
    "Portfolio of Tobias Meyhöfer, a webdeveloper from Germany, content creator, student and track&field athlete",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={cn(
          "h-0 min-h-screen overflow-x-hidden bg-background font-space_grotesk text-foreground antialiased",
          montserrat.variable,
          space_grotesk.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main>
            <header className="flex w-screen justify-center">
              <div className="w-full max-w-[1800px]">
                <NavBar />
              </div>
            </header>
            <main className="mt-[80px] flex min-h-[calc(100vh-176px)] justify-center md:mt-[100px] md:min-h-[calc(100vh-196px)]">
              <div className="w-full max-w-[1000px] px-8 md:px-10">
                {children}
              </div>
              <span className="fixed bottom-8 left-auto right-auto m-0 h-fit w-fit p-0 max-xl:hidden">
                <DockInUse />
              </span>
            </main>
            <footer>
              <FooterContent />
            </footer>
          </main>
        </ThemeProvider>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
