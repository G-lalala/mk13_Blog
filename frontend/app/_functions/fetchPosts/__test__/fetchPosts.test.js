import { fetchPosts } from '../fetchPosts'
import fs from 'fs'

// fsモジュールをモック
jest.mock('fs')

describe('fetchPosts', () => {
  it('should return the list of posts from the directory', async () => {
    // モックの動作を定義する
    const mockPosts = ['post1.txt', 'post2.txt']
    fs.readdirSync.mockReturnValue(mockPosts)

    // fetchPostsを実行して結果を検証する
    const posts = await fetchPosts()
    expect(posts).toEqual(mockPosts)

    // readdirSyncが正しいパスで呼び出されたことを確認する
    expect(fs.readdirSync).toHaveBeenCalledWith('/app/app/_post')
  })
})
