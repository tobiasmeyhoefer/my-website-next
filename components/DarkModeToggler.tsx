"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function DarkModeToggler() {
  const { setTheme, theme } = useTheme();

  return (
    <Button onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}  size="icon">
      <SunIcon
        className="h-[1.2rem] w-[1.2rem] dark:rotate-0 dark:scale-100 transition-all -rotate-90 scale-0"
      />
      <MoonIcon
        className="absolute h-[1.2rem] w-[1.2rem] dark:rotate-90 dark:scale-0 transition-all rotate-0 scale-100"
      />
    </Button>
  );
}
