import { useEffect, useState } from 'react'

export default function useScrollPosition() {
  const [atBottom, setAtBottom] = useState<boolean>(false)

  useEffect(() => {
    const handleOnScroll = () => {
      setAtBottom(false)

      document.documentElement.scrollHeight <= window.pageYOffset + window.innerHeight &&
        setAtBottom(true)
    }

    window.addEventListener('scroll', handleOnScroll)

    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [])

  return { atBottom }
}
