import { useState, useEffect } from 'react';
import CartaoAvaliacao from '../components/CartaoAvaliacao/CartaoAvaliacao';

interface Avaliacao {
  id: number;
  tipo: string;
  titulo: string;
  data: string;
  nota: number;
  descricao: string;
}

export default function ChallengeSprintPage() {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);

  useEffect(() => {
    fetch('/data/avaliacoes.json')
      .then((res) => res.json())
      .then((data) => setAvaliacoes(data.filter((item: Avaliacao) => item.tipo === 'Challenge Sprint')));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Challenge Sprints</h2>
      <div className="space-y-4 mt-4">
        {avaliacoes.map((avaliacao) => (
          <CartaoAvaliacao
            key={avaliacao.id}
            titulo={avaliacao.titulo}
            data={avaliacao.data}
            nota={avaliacao.nota}
            descricao={avaliacao.descricao}
          />
        ))}
      </div>
    </div>
  )
}
