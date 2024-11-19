import NavBar from "@/components/nav/nav";
import { DockInUse } from "@/components/magicui/dock-in-use";
import FooterContent from "@/components/FooterContent";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex w-screen justify-center">
        <div className="w-full max-w-[1800px]">
          <NavBar />
        </div>
      </header>
      <main className="mt-[80px] flex min-h-[calc(100vh-176px)] justify-center md:mt-[100px] md:min-h-[calc(100vh-196px)]">
        <div className="w-full max-w-[1000px] px-8 md:px-10">{children}</div>
        <span className="fixed bottom-8 left-auto right-auto m-0 h-fit w-fit p-0 max-xl:hidden">
          <DockInUse />
        </span>
      </main>
      <footer>
        <FooterContent />
      </footer>
    </>
  );
}
