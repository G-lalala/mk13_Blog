import fs from 'fs'

async function getProps() {
  const posts = fs.readdirSync('/app/app/_post')
  console.log('files:', posts)
  return posts
}

export default async function () {
  const data: string[] = await getProps()
  return <div className="my-8">コンテンツ</div>
}
