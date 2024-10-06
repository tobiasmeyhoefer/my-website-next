import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";

import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";

import { client, sanityFetch } from "@/sanity/lib/client";
import { Post } from "@/components/blog/post";

export async function generateStaticParams() {
  const posts = await client.fetch(
    POSTS_QUERY,
    {},
    { perspective: "published" },
  );

  return posts.map((post) => ({
    slug: post?.slug?.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const post = await sanityFetch({
    query: POST_QUERY,
    params,
  });
  if (!post) {
    return notFound();
  }
  return <Post post={post} />;
}
