import { Header } from '@/components/Header/Header'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Home() {
  return (
    <>
      <Header />
      
    </>
  )
}
