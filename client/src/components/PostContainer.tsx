import styled from 'styled-components'
import { Post } from '../hooks/usePosts'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-bottom: 1rem;
  padding: 2rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`

const Image = styled.img`
  margin: 1rem 0;
`

const Title = styled.span``

const Id = styled.span``

export default function PostContainer({ post }: { post: Post }) {
  const { id, albumId, title, url, thumbnailUrl } = post

  return (
    <Wrapper>
      <Id>{id}</Id>
      <Title>{title}</Title>
      <Image src={thumbnailUrl} alt={title} />
    </Wrapper>
  )
}
