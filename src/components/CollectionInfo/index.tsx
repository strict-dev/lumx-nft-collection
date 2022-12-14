import UserPhoto from '@public/assets/bored-img.svg'
import CopyIcon from '@public/assets/icn-copy.svg'
import MonitorIcon from '@public/assets/icn-monitor-list.svg'
import OpenSeaIcon from '@public/assets/icn-opensea-list.svg'
import EtherScanIcon from '@public/assets/icon-etherscan-list.svg'
import TrendingUpIcon from '@public/assets/trending-up.svg'
import CollectionInfoGridItem from 'components/CollectionInfoGridItem'
import Container from 'components/Container'
import { useData } from 'hooks/useData'
import Image from 'next/image'

import { Loader } from './Loader'

const CollectionInfo = () => {
  const { data, isLoading } = useData()

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container className="mt-20">
      <div className="relative flex items-center justify-between gap-2 pb-4">
        <div className="flex items-center justify-between gap-2">
          <Image src={UserPhoto} alt="User" width={32} height={32} />
          <div className="flex flex-col justify-between">
            <h1 className="text-base font-bold">{data?.collectionName}</h1>

            <div className="flex">
              <p className="text-sm font-normal truncate max-w-[140px] text-neutral-600">
                {data?.token}
              </p>
              <button>
                <Image src={CopyIcon} alt="User" width={16} height={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 ">
          <Image src={MonitorIcon} alt="Monitor Icon" width={32} height={32} />
          <Image src={OpenSeaIcon} alt="OpenSea Icon" width={32} height={32} />
          <Image
            src={EtherScanIcon}
            alt="EtherScan Icon"
            width={32}
            height={32}
          />
        </div>
      </div>

      <hr className="border-neutral-700" />

      <div className="grid items-baseline grid-flow-row grid-cols-3 grid-rows-2 gap-2 pt-4">
        <CollectionInfoGridItem title={'lifetime'} data={data?.lifetime} />

        <CollectionInfoGridItem title={'items'} data={data?.items} />

        <CollectionInfoGridItem title={'floor'} data={data?.floor} />

        <CollectionInfoGridItem title={'royalties'} data={data?.royalties} />

        <CollectionInfoGridItem title={'vol24h'} data={data?.floor} type="vol">
          <div className="flex items-center justify-center gap-1">
            <Image src={TrendingUpIcon} alt="Icon" width={16} height={16} />
            <span className="font-bold text-support-success">
              {data?.vol24h.performance}
            </span>
          </div>
        </CollectionInfoGridItem>

        <CollectionInfoGridItem title={'vol7d'} data={data?.floor} type="vol">
          <div className="flex items-center justify-center gap-1">
            <Image src={TrendingUpIcon} alt="Icon" width={16} height={16} />
            <span className="font-bold text-support-error">
              {data?.vol7d.performance}
            </span>
          </div>
        </CollectionInfoGridItem>
      </div>
    </Container>
  )
}

export default CollectionInfo
