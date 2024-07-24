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
    <Link href={href} className="" target="_blank">
      <Card className="flex h-[320px] w-[240px] flex-col justify-between hover:bg-zinc-100">
        <CardHeader className="p-3">
          <ImageComponent className="h-[160px] w-full p-6" />
          <CardTitle className="">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap gap-2 p-3">
          {category.map((category) => (
            <div
              key={category}
              className="text-nowrap rounded-md bg-zinc-200 p-1 text-xs"
            >
              {category.toString()}
            </div>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
