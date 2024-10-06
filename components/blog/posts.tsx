import Link from "next/link";
import { POSTS_QUERYResult } from "../../sanity.types";

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <ul className="flex flex-col">
      {posts.map((post) => (
        <li key={post._id}>
          <Link
            className="block p-4 hover:bg-zinc-100"
            href={`/blog/${post?.slug?.current}`}
          >
            {post?.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}