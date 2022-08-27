import { faker } from '@faker-js/faker'

export const scatterDataset1 = () => {
  const dataset = {
    datasets: [
      {
        label: '',
        data: Array.from({ length: 20 }, () => ({
          x: faker.datatype.number({ min: 0, max: 100 }),
          y: faker.datatype.number({ min: 0, max: 100 })
        })),
        backgroundColor: '#8775D0'
      },
      {
        label: '',
        data: Array.from({ length: 20 }, () => ({
          x: faker.datatype.number({ min: 0, max: 100 }),
          y: faker.datatype.number({ min: 0, max: 100 })
        })),
        backgroundColor: '#98BBAF'
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

const scatterDataset2 = () => {
  const dataset = {
    datasets: [
      {
        label: '',
        data: Array.from({ length: 20 }, () => ({
          x: faker.datatype.number({ min: 0, max: 100 }),
          y: faker.datatype.number({ min: 0, max: 100 })
        })),
        backgroundColor: '#8775D0'
      },
      {
        label: '',
        data: Array.from({ length: 20 }, () => ({
          x: faker.datatype.number({ min: 0, max: 100 }),
          y: faker.datatype.number({ min: 0, max: 100 })
        })),
        backgroundColor: '#98BBAF'
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
    labels: Array.from({ length: 30 }, () =>
      faker.datatype.number({ min: 0, max: 10 })
    ),
    datasets: [
      {
        data: Array.from({ length: 30 }, () =>
          faker.datatype.number({ min: 0, max: 10 })
        ),
        backgroundColor: '#D9DBE9'
      }
    ]
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
  scatterDataset1: scatterDataset1(),
  scatterDataset2: scatterDataset2(),
  barsDataset: barsDataset()
}
