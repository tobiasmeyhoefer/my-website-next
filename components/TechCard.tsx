import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/ui/card"
import Link from "next/link"

export function TechCard({
  name,
  description,
  href,
  imageUrl,
}: {
  name: string
  description: string
  href: string
  imageUrl: string
}) {
  return (
    <Link href={href} className="w-[200px] h-[300px]" target="_blank">
      <Card className="w-full h-full hover:bg-zinc-100">
        <CardImage src={imageUrl} className=""></CardImage>
        <CardHeader className="p-4">
          <CardTitle className="">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
