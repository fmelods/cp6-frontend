import React, { useEffect, useState } from 'react';
import CartaoAvaliacao from '../components/CartaoAvaliacao/CartaoAvaliacao';

interface Avaliacao {
  id: number;
  titulo: string;
  data: string;
  nota: number;
  descricao: string;
  tipo: string;
}

export default function CheckPointsPage() {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);

  useEffect(() => {
    fetch('/data/avaliacoes.json')
      .then((res) => res.json())
      .then((data) => {
        const checkpoints = data.filter((avaliacao: Avaliacao) => avaliacao.tipo === 'Checkpoint');
        setAvaliacoes(checkpoints);
      });
  }, []);

  return (
    <div>
      <h2>CheckPoints</h2>
      {avaliacoes.length > 0 ? (
        avaliacoes.map((avaliacao) => (
          <CartaoAvaliacao key={avaliacao.id} {...avaliacao} />
        ))
      ) : (
        <p>Nenhum checkpoint encontrado.</p>
      )}
    </div>
  );
}
