import { useEffect, useState } from 'react'

export interface Post {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export default function usePosts({ page, perPage }: { page: number; perPage: number }) {
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [posts, setPosts] = useState<Post[]>([])
  const [toggleRefetch, setToggleRefetch] = useState<boolean>(false)

  const refetch = () => setToggleRefetch((prev) => !prev)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      const data = await fetch(`http://localhost:3001/posts?page=${page}&perPage=${perPage}`)
        .then((response) => response.json())
        .catch((error) => setError(error))
        .finally(() => setLoading(false))

      setPosts(data || [])
    }

    fetchData()
  }, [page, perPage, toggleRefetch])

  return { loading, error, posts, refetch }
}
