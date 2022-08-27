import type { NextApiRequest, NextApiResponse } from 'next'
import { DataResponse } from 'services/fetchData'
import { data } from 'utils/mock'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  const response = await new Promise<DataResponse>((resolve) => {
    setTimeout(() => resolve(data), 2000)
  })

  if (!response) {
    return res.status(400)
  }

  return res.status(200).json(response)
}
