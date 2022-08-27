import { faker } from '@faker-js/faker'

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
  hypeTrend: 'Very Hyped'
}

export const scatterDataset = () => {
  const dataset = {
    datasets: [
      {
        label: '',
        data: Array.from({ length: 20 }, () => ({
          x: faker.datatype.number({ min: 0, max: 100 }),
          y: faker.datatype.number({ min: 0, max: 100 })
        })),
        backgroundColor: 'rgba(255, 99, 132, 1)'
      },
      {
        label: '',
        data: Array.from({ length: 20 }, () => ({
          x: faker.datatype.number({ min: 0, max: 100 }),
          y: faker.datatype.number({ min: 0, max: 100 })
        })),
        backgroundColor: '#26a7ac'
      },
      {
        label: '',
        data: Array.from({ length: 20 }, () => ({
          x: faker.datatype.number({ min: 0, max: 100 }),
          y: faker.datatype.number({ min: 0, max: 100 })
        })),
        backgroundColor: '#638dff'
      }
    ]
  }

  return dataset
}

export const barsDataset = () => {
  const dataset = {
    labels: Array.from({ length: 20 }, () =>
      faker.datatype.number({ min: 0, max: 10 })
    ),
    datasets: [
      {
        data: Array.from({ length: 20 }, () =>
          faker.datatype.number({ min: 0, max: 10 })
        )
      }
    ]
  }

  return dataset
}
