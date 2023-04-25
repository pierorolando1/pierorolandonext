import React from "react"
import { Post, allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from "next/link"

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

const PostCard = (post: Post) => {

  return (
    <div className="py-5">
      
      <h2 className="text-lg">
        <Link legacyBehavior href={post.url}>
          <a className="text-cyan-600 hover:underline hover:text-cyan-700">{post.title}</a>
        </Link>
      </h2>

      <time dateTime={post.date} className="block text-sm text-slate-600">
      {format(parseISO(post.date), 'MMM d')}
      </time>
    
    </div>
  )

}

export default function Blog({ posts }: {posts: Post[]}) {

  return (
    <div>
    {
      posts.map((post,i) => (
        <PostCard key={i} {...post} />
      ))
    }
    </div>
  )
}

