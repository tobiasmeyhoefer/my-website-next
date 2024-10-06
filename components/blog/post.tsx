import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { urlFor } from "@/sanity/lib/image";
import { POST_QUERYResult } from "../../sanity.types";
import Link from "next/link";

export function Post({ post }: { post: POST_QUERYResult }) {
  const { title, mainImage, body } = post || {};

  return (
    <div className="prose prose-lg p-4">
      {title ? <h1 className="mt-10 md:mb-12 mb-6 md:text-5xl text-3xl font-bold">{title}</h1> : null}
      {mainImage?.asset?._ref ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={urlFor(mainImage?.asset?._ref).width(300).height(300).url()}
          width={300}
          height={300}
          alt={title || ""}
        />
      ) : null}
      {body ? <PortableText value={body} /> : null}
      <hr />
      <Link href="/">&larr; Return home</Link>
    </div>
  );
}