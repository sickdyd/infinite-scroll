import { ReactNode } from 'react'
import styled from 'styled-components'

type MessageType = 'error' | 'info'

const Wrapper = styled.div<{ type: MessageType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
  height: 2rem;
  width: 100%;
  background-color: white;
  color: ${({ type }) => (type === 'error' ? 'red' : 'inherit')};
`

export default function Message({ children, type }: { children: ReactNode; type: MessageType }) {
  return <Wrapper type={type}>{children}</Wrapper>
}
