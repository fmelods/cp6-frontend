import { NextApiRequest, NextApiResponse } from 'next';
import avaliacoes from '../../../data/avaliacoes.json';

interface Avaliacao {
  id: number;
  titulo: string;
  data: string;
  nota: number;
  descricao: string;
}

const avaliacoesTyped: Avaliacao[] = avaliacoes;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const avaliacao = avaliacoesTyped.find((item: Avaliacao) => item.id === parseInt(id as string));

  if (!avaliacao) {
    return res.status(404).json({ message: 'Avaliação não encontrada' });
  }

  if (req.method === 'GET') {
    res.status(200).json(avaliacao);
  } else if (req.method === 'PUT') {
    // Implementar a lógica para editar a avaliação
  } else if (req.method === 'DELETE') {
    // Implementar a lógica para deletar a avaliação
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
 