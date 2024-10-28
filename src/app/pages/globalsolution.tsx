import { useEffect, useState } from 'react';
import CartaoAvaliacao from '../components/CartaoAvaliacao/CartaoAvaliacao';
import Spinner from '../components/Spinner/Spinner';
import { fetchAvaliacoes } from '../utils/apiUtils';

interface Avaliacao {
  id: number;
  titulo: string;
  data: string;
  nota: number;
  descricao: string;
}

export default function GlobalSolutionPage() {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchAvaliacoes('Global Solution');
        setAvaliacoes(data);
      } catch {
        setError('Erro ao carregar avaliações.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Global Solutions</h2>
      <div className="space-y-4">
        {avaliacoes.map((avaliacao) => (
          <CartaoAvaliacao
            key={avaliacao.id}
            titulo={avaliacao.titulo}
            data={avaliacao.data}
            nota={avaliacao.nota}
            descricao={avaliacao.descricao}
            imagem="/images/global-icon.png"
          />
        ))}
      </div>
    </div>
  )
}
