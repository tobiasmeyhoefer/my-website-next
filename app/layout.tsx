import type { Metadata, Viewport } from "next";
import { Montserrat, Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/nav/nav";
import { DockInUse } from "@/components/magicui/dock-in-use";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import FooterContent from "@/components/FooterContent";
import { isMobileDevice } from "@/lib/mobileDetection";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space_grotesk",
});
const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--vt323",
});

export const metadata: Metadata = {
  title: {
    default: "Tobias Meyhöfer",
    template: "%s | Tobias Meyhöfer",
  },
  description: "Hey my name is Tobi, I'm a webdeveloper from Germany",
  twitter: {
    card: "summary_large_image"
  }
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = isMobileDevice();
  return (
    <html lang="en" className="">
      <body
        className={cn(
          "h-0 min-h-screen overflow-x-hidden bg-background font-space_grotesk text-foreground antialiased",
          montserrat.variable,
          space_grotesk.variable,
          vt323.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex w-screen justify-center">
            <div className="w-full max-w-[1800px]">
              <NavBar />
            </div>
          </header>
          <main className="flex min-h-[calc(100vh-220px)] justify-center">
            <div className="w-full max-w-[1800px] px-6 md:px-8">{children}</div>
            <span className="fixed bottom-10 left-auto right-auto m-0 h-fit w-fit p-0 max-xl:hidden">
              <DockInUse />
            </span>
          </main>
          <footer>
            <FooterContent />
          </footer>

          {/* <div className="counterWrapper absolute inset-0 flex items-center justify-center">
            <NumberTicker
              value={100}
              className="font-vt323 text-2xl md:text-4xl"
            />
          </div> */}
          <Toaster />
          {isMobile ? (
            <svg className="trail pointer-events-none" viewBox="0 0 1 1">
              <path d="" />
            </svg>
          ) : null}
        </ThemeProvider>
      </body>
      <Script src="scripts/trail.js"></Script>
    </html>
  );
}
