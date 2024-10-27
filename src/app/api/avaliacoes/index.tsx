import { NextApiRequest, NextApiResponse } from 'next';
import avaliacoes from '../../data/avaliacoes.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(avaliacoes);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
