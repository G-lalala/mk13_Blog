import matter from 'gray-matter'
import fs from 'fs'
import { Post } from '@/types/Post'

export async function fetchPost(fileName: string): Promise<Post> {
  const fileContent = fs.readFileSync(`/app/app/_post/${fileName}.md`, 'utf-8')
  const { data, content } = matter(fileContent)
  console.log(data.date)

  const meta_data = {
    title: data.title ?? '',
    date: data.date ?? '',
    description: data.description ?? '',
    image: data.image ?? '',
  }

  return { meta_data, content }
}
