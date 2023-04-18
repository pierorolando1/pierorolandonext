// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { api } from '@/features/messages/atoms'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const resGpt = await api.sendMessage("hola como tas")
  res.status(200).json({ name: resGpt.text })
}
