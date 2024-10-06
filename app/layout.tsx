import type { Metadata, Viewport } from "next";
import { Montserrat, Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

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
          vt323.variable,
        )}
      >
        {draftMode().isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        <main>{children}</main>
        {draftMode().isEnabled && <VisualEditing />}
        <Toaster />
      </body>
    </html>
  );
}
