import { faker } from '@faker-js/faker'

const scatterDataset = () => {
  const dataset = Array.from({ length: 20 }, () => ({
    x: faker.datatype.number({ min: 0, max: 100 }),
    y: faker.datatype.number({ min: 0, max: 100 })
  }))

  return dataset
}

export const barsDataset = (size: number) => {
  const dataset = {
    x: Array.from({ length: size }, () =>
      faker.datatype.number({ min: 0, max: 10 })
    ),
    y: Array.from({ length: size }, () =>
      faker.datatype.number({ min: 0, max: 10 })
    )
  }

  return dataset
}

export const data = {
  collectionName: 'Bored Ape Yacht Club',
  token: '0x7b123f53421b1bF8533339BFBdc7C98aA94163db',
  lifetime: '100d',
  items: '10k',
  royalties: '7.5%',
  floor: '145',
  vol24h: {
    total: '1.2M',
    performance: '12.02%'
  },
  vol7d: {
    total: '12.9K',
    performance: '1.29%'
  },
  sales: 2300,
  hypeTrend: 'Very Hyped',
  scatterDataset1: scatterDataset(),
  scatterDataset2: scatterDataset(),
  scatterDataset3: scatterDataset(),
  barsDataset: barsDataset(30),
  lineDataset: barsDataset(10),
  trendingTraits: {
    fur: {
      name: 'cross',
      performance: '12.02%',
      avgSales: '1.2M'
    },
    eyes: {
      name: 'BORED DAO',
      performance: '12.02%',
      avgSales: '1.2M'
    },
    mouth: {
      name: 'cyborg',
      performance: '12.02%',
      avgSales: '1.2M'
    },
    earing: {
      name: 'dmt',
      performance: '12.02%',
      avgSales: '1.2M'
    },
    hat: {
      name: 'bored unstoppable',
      performance: '12.02%',
      avgSales: '1.2M'
    }
  }
}
