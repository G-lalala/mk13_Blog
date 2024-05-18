import { fetchPost } from '@/app/_functions/fetchPost'
import { Post } from '@/types/Post'

export default async function ({ params }: { params: { slug: string } }) {
  const post_files: Post = await fetchPost(params.slug)

  return <h1>Article Detail Page</h1>
}
