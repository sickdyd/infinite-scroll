import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Message from './components/Message'
import PostContainer from './components/PostContainer'
import usePosts, { Post } from './hooks/usePosts'
import useScrollPosition from './hooks/useScrollPosition'

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
  const { loading, error, posts: postData, refetch } = usePosts({ page, perPage: PER_PAGE })
  const { atBottom } = useScrollPosition()

  useEffect(() => {
    setPosts((prev) => prev.concat(postData))

    // eslint-disable-next-line
  }, [JSON.stringify(postData)])

  useEffect(() => {
    if (atBottom) {
      !loading && !error && setPage((prev) => prev + 1)
      !loading && error && refetch()
    }

    // eslint-disable-next-line
  }, [atBottom])

  return (
    <Wrapper>
      {posts.map((post) => (
        <PostContainer key={post.id} post={post} />
      ))}
      {loading && <Message type="info">Loading...</Message>}
      {error && <Message type="error">{error?.message || error}</Message>}
    </Wrapper>
  )
}

export default App
