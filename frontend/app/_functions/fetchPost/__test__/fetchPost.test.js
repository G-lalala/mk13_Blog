import { fetchPost } from '../fetchPost'
import fs from 'fs'

// fsモジュールをモック
jest.mock('fs')

describe('fetchPost', () => {
  const markdownContent = `
  ---
  title: 'Next.jsでmarkdownブログを構築'
  date: '2022-07-13'
  description: 'Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。'
  image: nextjs.png
  ---
  ああああああああ
  `

  fs.readFileSync.mockReturnValue(markdownContent)

  it('ファイルを取得して整形した結果が取得できているか', async () => {
    const expectedData = {
      data: {
        title: 'Next.jsでmarkdownブログを構築',
        date: '2022-07-13',
        description:
          'Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。',
        image: 'nextjs.png',
      },
      content: 'ああああああああ',
    }

    const result = await fetchPost('some-url')
    expect(result).toEqual(expectedData)

    // Cleanup mock
    global.fetch.mockClear()
  })
})
