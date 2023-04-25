import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'
import { GetStaticPropsContext } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params?.slug)
  return {
    props: {
      post,
    },
  }
}

const PostLayout = ({ post }: {post: Post}) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="modal-scroll max-h-screen overflow-scroll mx-auto max-w-4xl sm:pl-1.5 pl-5 pr-5 py-40 prose prose-invert">
        <div className="mb-6">
          <h1 className="text-gray-400 mb-1 text-6xl font-semibold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'MMM d, yyyy')}
          </time>

          <img src={post.image} className='w-full' />

        </div>

        <MDXContent />

      </article>
    </>
  )
}

export default PostLayout
