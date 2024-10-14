import { MDXRemote } from 'next-mdx-remote/rsc'

// app/page.js
export default function Home() {
  return (
    <MDXRemote
      source={`# Hello World

      This is from Server Components!
      `}
    />
  )
}