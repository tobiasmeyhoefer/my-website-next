import { POST_QUERYResult } from "../../sanity.types";
import Link from "next/link";
import MdxBody from "./mdx-body";

function portableTextToPlain(blocks: any[] = []): string {
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map((child: any) => child.text).join('')
    })
    .join('\n\n')
}
export function Post({ post }: { post: POST_QUERYResult }) {
  const { title, mainImage, body } = post || {};
  const plainBody = body ? portableTextToPlain(body) : ''

  return (
    <div className="p-4">
      {title ? <h1 className="mt-10 md:mb-12 mb-6 md:text-5xl text-3xl font-bold">{title}</h1> : null}
      <MdxBody body={plainBody}/>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </div>
  );
}