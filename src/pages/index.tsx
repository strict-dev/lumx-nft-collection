import CollectionInfo from 'components/CollectionInfo'
import Header from 'components/Header'
import HypeTrend from 'components/HypeTrend'
import SalesCard from 'components/SalesCard'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <CollectionInfo />
      <SalesCard />
      <HypeTrend />
    </div>
  )
}

export default Home
