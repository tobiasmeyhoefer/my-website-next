import type { Metadata, Viewport } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation/Navigation";
import { cn } from "@/lib/utils";
import Head from "next/head";
import FlyingInformations from "./_components/UI/FlyingInformations";
import StartUpAnimation from "./_components/UI/StartUpAnimation";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "Tobias Meyhöfer",
  description:
    "A portfolio of the web, mobile and software developer Tobias Meyhöfer",
};

export const viewport: Viewport = {
  themeColor: "#5C67C6",
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
          "h-full min-h-screen overflow-x-hidden bg-primary500 font-sans text-white antialiased",
          montserrat.variable,
          roboto.variable,
        )}
      >
        <header className="absolute left-0 right-0 top-0">
          <Navigation></Navigation>
        </header>
        <main className="flex h-full justify-center">
          <StartUpAnimation/>
          <FlyingInformations />
          <div className="w-full max-w-[1920px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
