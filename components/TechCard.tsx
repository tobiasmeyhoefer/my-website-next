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
    <Link href={href} className="h-[320px] min-w-[220px] flex-1" target="_blank">
      <Card className="flex flex-col h-full rounded-lg justify-between hover:bg-card-hover dark:border-neutral-700 bg-card text-card-foreground">
        <CardHeader className="p-0 rounded-lg">
          <div className="flex">
          <ImageComponent className="dark:bg-white/10 h-[160px] w-[160px] flex justify-end p-6" />
          </div>
          <CardTitle className="px-4 pt-4">{name}</CardTitle>
          <CardDescription className="px-4">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap dark:text-white gap-2 p-3">
          {category.map((category) => (
            <div
              key={category}
              className="text-nowrap rounded-md bg-zinc-200 dark:bg-zinc-800 px-2 py-1 text-xs"
            >
              {category.toString()}
            </div>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
