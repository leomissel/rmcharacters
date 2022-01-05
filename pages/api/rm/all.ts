// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import rmApi from '../../../configs/axios/rm'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any> // TODO: Type it
) {

  if (req.method === 'GET') {
    
    await rmApi.get('/character')
    .then(chars => {
      res.status(200).json(chars.data)
    })
    .catch(error => {
      console.error(`An error has occured on try to get all characters from RM API. Details: ${error}`)
      res.status(500).json({ error: 'Eu não discuto problemas, eu coloco fogo neles. Rick!'})
    })

  }
 
}
