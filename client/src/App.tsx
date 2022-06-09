import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostContainer from './components/PostContainer'
import usePosts, { Post } from './hooks/usePosts'

const PER_PAGE = 10

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState<number>(1)
  const postData: Post[] = usePosts({ page, perPage: PER_PAGE })

  useEffect(() => {
    setPosts((prev) => prev.concat(postData))
  }, [JSON.stringify(postData)])

  useEffect(() => {
    const handleOnScroll = (event: Event) => {
      if (document.documentElement.scrollHeight <= window.pageYOffset + window.innerHeight) {
        setPage((prev) => prev + 1)
      }
    }

    window.addEventListener('scroll', handleOnScroll)

    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [])

  return (
    <Wrapper>
      {posts.map((post, index) => (
        <PostContainer key={post.id} post={post} />
      ))}
    </Wrapper>
  )
}

export default App
