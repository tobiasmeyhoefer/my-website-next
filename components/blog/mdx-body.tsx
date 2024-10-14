import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";

const H1 = (props: ComponentProps<"h1">) => (
  <h1
    className="mb-6 mt-10 text-3xl font-bold md:mb-12 md:text-5xl"
    {...props}
  />
);

const H2 = (props: ComponentProps<"h2">) => (
  <h2 className="mb-4 mt-8 text-3xl font-semibold" {...props} />
);

const P = (props: ComponentProps<"p">) => <p className="mb-4" {...props} />;

const A = (props: ComponentProps<"a">) => (
  <a className="text-blue-600 hover:underline" {...props} />
);

function CodeBlock({ children }: ComponentProps<"pre">) {
  return (
    <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <pre className="overflow-x-auto p-4">
        <code className="text-sm text-gray-800 dark:text-gray-200">
          {children}
        </code>
      </pre>
    </div>
  );
}

const components = {
  h1: H1,
  h2: H2,
  p: P,
  a: A,
  pre: CodeBlock,
};

const MdxBody = async ({ body }: { body: string }) => {
  return <MDXRemote source={body} components={components} />;
};

export default MdxBody;
