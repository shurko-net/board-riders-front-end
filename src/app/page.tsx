'use client'
import { useGetUser } from '@/api/queries/useGetUser'
import Footer from '@/components/footer/Footer'
import Header from '../components/header/Header'
import Loader from '../components/loader/Loader'

export default function Home() {
  const { data: currentUser, isLoading } = useGetUser()

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='wrapper'>
      <Header user={currentUser?.data} />
      <main className='flex-auto'>main</main>
      <Footer />
    </div>
  )
}
