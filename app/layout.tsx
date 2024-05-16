import type { Metadata, Viewport } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation/Navigation";
import { cn } from "@/lib/utils";

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
    <html lang="en" className="h-full">
      <body
        className={
          "h-full min-h-screen overflow-x-hidden font-space_grotesk antialiased"
        }
      >
        <div className="fixed bottom-0 bg-neutral-900 w-full text-center py-2 text-neutral-400">This page is currently under construction</div>
        <header className="flex justify-center">
          <div className="w-full max-w-[1200px]">
            <Navigation></Navigation>
          </div>
        </header>
        <main className="flex h-full justify-center">
          <div className="w-full max-w-[1200px] px-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
