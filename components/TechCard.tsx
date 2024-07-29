import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/ui/card";
import Link from "next/link";
import { Category } from "./SortedTechPage";

export function TechCard({
  name,
  description,
  href,
  ImageComponent,
  category,
}: {
  name: string;
  description: string;
  href: string;
  ImageComponent: React.ComponentType<{ className?: string }>;
  category: Category[];
}) {
  return (
    <Link
      href={href}
      className="h-[320px] min-w-[220px] flex-1"
      target="_blank"
    >
      <Card className="flex h-full flex-col justify-between rounded-lg bg-card text-card-foreground hover:bg-card-hover dark:border-neutral-700">
        <CardHeader className="rounded-lg p-0">
          <div className="flex justify-center dark:bg-white/30">
            <ImageComponent className="flex h-[160px] w-[160px] justify-end p-6" />
          </div>
          <CardTitle className="px-4 pt-4 text-center">{name}</CardTitle>
          <CardDescription className="px-4 text-center">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center flex-wrap gap-2 p-3 dark:text-white">
          {category.map((category) => (
            <div
              key={category}
              className="text-nowrap rounded-md bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800"
            >
              {category.toString()}
            </div>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
