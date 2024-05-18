import { fetchPost } from '../fetchPost'
import fs from 'fs'
import matter from 'gray-matter'

// fsモジュールをモック
jest.mock('fs')

describe('fetchPost', () => {
  const markdownContent =
    '---\n' +
    'title: "Next.jsでmarkdownブログを構築"\n' +
    'date: "2022-07-13"\n' +
    'description: "Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。"\n' +
    'image: "nextjs.png"\n' +
    '---\n' +
    'ああああああああ'
  beforeAll(() => {
    fs.readFileSync.mockReturnValue(markdownContent)
  })

  it('gray-matterが動いているかテスト', () => {
    console.log(matter('---\ntitle: Front Matter\n---\nThis is content.'))

    const { data, content } = matter(markdownContent)
    console.log(content)
    expect(data.title).toBe('Next.jsでmarkdownブログを構築')
    expect(data.date).toBe('2022-07-13')
    expect(data.description).toBe(
      'Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。',
    )
    expect(data.image).toBe('nextjs.png')
  })

  it('ファイルを取得して整形した結果が取得できているか', async () => {
    const expectedData = {
      meta_data: {
        title: 'Next.jsでmarkdownブログを構築',
        date: '2022-07-13',
        description:
          'Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。',
        image: 'nextjs.png',
      },
      content: 'ああああああああ',
    }

    const result = await fetchPost('some-file')
    expect(result).toEqual(expectedData)
  })
})
