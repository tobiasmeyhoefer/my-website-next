import { Posts } from "@/components/blog/posts";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

const BlogPage = async () => {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <div>
      <h1 className="mt-10 md:mb-12 mb-6 md:text-5xl text-center text-3xl font-bold">Blog</h1>
      <Posts posts={posts} />
    </div>
  );
};

export default BlogPage;
