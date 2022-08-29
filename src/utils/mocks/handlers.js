import { rest } from 'msw'

export const handlers = [
  rest.get('/api/collections', (req, res, ctx) => {
    return res(ctx.json({ messege: 'Hello World' }))
  })
]
