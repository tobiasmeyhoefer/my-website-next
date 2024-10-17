import type { Metadata, Viewport } from "next";
import { Montserrat, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";

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
        {draftMode().isEnabled && (
          <a
            className="fixed bottom-0 right-0 m-4 bg-blue-500 p-4 text-white"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>

        {draftMode().isEnabled && <VisualEditing />}
        <Toaster />
      </body>
    </html>
  );
}
