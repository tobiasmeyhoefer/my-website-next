import Link from "next/link";
import { POSTS_QUERYResult } from "../../sanity.types";

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <ul className="flex flex-col">
      {posts.map((post) => (
        <li key={post._id}>
          <Link
            className="block p-6 transition-all hover:bg-zinc-100 rounded-lg"
            href={`/blog/${post?.slug?.current}`}
          >
            <div>
              <p>{post?.title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
