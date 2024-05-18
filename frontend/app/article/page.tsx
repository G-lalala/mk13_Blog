import matter from 'gray-matter'
import { fetchPosts } from '../_functions/fetchPosts'

export default async function () {
  const post_files: string[] = await fetchPosts()
  const paths = post_files.map((post_file) => ({
    params: {
      slug: post_file.replace(/\.md$/, ''),
    },
  }))
  console.log(post_files)

  return <div className="my-8">コンテンツ</div>
}
