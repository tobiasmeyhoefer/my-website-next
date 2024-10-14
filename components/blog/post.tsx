import { POST_QUERYResult } from "../../sanity.types";
import Link from "next/link";
import MdxBody from "./mdx-body";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useEffect } from "react";

function portableTextToPlain(blocks: any[] = []): string {
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child: any) => child.text).join("");
    })
    .join("\n\n");
}
export function Post({ post }: { post: POST_QUERYResult }) {
  const { title, mainImage, body } = post || {};
  const plainBody = body ? portableTextToPlain(body) : "";

  return (
    <div className="md:p-4">
      {title ? (
        <h1 className="mb-6 mt-10 text-3xl font-bold md:mb-12 md:text-5xl">
          {title}
        </h1>
      ) : null}
      <MdxBody body={plainBody}/>
      {/* <MDXRemote
        source={`# Hello World

      This is from Server Components!
      `}
      /> */}
      <hr />
      <Link href="/">&larr; Return home</Link>
    </div>
  );
}
