import { useEffect, useState } from 'react'

export interface Post {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export default function usePosts({ page, perPage }: { page: number; perPage: number }) {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:3001/posts?page=${page}&perPage=${perPage}`).then(
        (response) => response.json()
      )

      setPosts(data)
    }

    fetchData()
  }, [page, perPage])

  return posts
}
