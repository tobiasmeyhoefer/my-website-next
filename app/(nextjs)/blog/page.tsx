import { Posts } from "@/components/blog/posts";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

const BlogPage = async () => {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <div className="mt-40">
      <h1 >Blog</h1>
      <Posts posts={posts} />
    </div>
  );
};

export default BlogPage;
