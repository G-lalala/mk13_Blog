import fs from 'fs'

export async function fetchPosts(): Promise<string[]> {
  const posts = fs.readdirSync('/app/app/_post')
  return posts
}
