import fs from 'fs'

export async function fetchPosts() {
  const posts = fs.readdirSync('/app/app/_post')
  return posts
}
