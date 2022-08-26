import { fetchedData } from 'atoms/fetchedData'
import CollectionInfo from 'components/CollectionInfo'
import Header from 'components/Header'
import SalesCard from 'components/SalesCard'
import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { data } from 'utils/mock'

const Home: NextPage = () => {
  const [, setData] = useRecoilState(fetchedData)
  setData(data)

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <CollectionInfo />
      <SalesCard />
    </div>
  )
}

export default Home
