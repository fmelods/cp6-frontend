import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Avaliacao {
  id: number;
  titulo: string;
  descricao: string;
  nota: number;
}

const AvaliacaoDetalhe = () => {
  const router = useRouter();
  const { id } = router.query;
  const [avaliacao, setAvaliacao] = useState<Avaliacao | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/avaliacoes/${id}`)
        .then((res) => res.json())
        .then((data) => setAvaliacao(data));
    }
  }, [id]);

  if (!avaliacao) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{avaliacao.titulo}</h2>
      <p>{avaliacao.descricao}</p>
      <p>Nota: {avaliacao.nota}</p>
    </div>
  );
};

export default AvaliacaoDetalhe;
