interface Avaliacao {
    id: number;
    titulo: string;
    data: string;
    nota: number;
    descricao: string;
    tipo: string;
  }
  
  export async function fetchAvaliacoes(tipo?: string): Promise<Avaliacao[]> {
    try {
      const response = await fetch(`/api/avaliacoes`);
      if (!response.ok) throw new Error('Erro ao buscar avaliações');
  
      const avaliacoes: Avaliacao[] = await response.json();
      return tipo ? avaliacoes.filter((item: Avaliacao) => item.tipo === tipo) : avaliacoes;
    } catch (error) {
      console.error('Erro ao buscar avaliações:', error);
      throw error;
    }
  }
  
  export async function fetchAvaliacaoById(id: number): Promise<Avaliacao> {
    try {
      const response = await fetch(`/api/avaliacoes/${id}`);
      if (!response.ok) throw new Error('Avaliação não encontrada');
  
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar avaliação:', error);
      throw error;
    }
  }
  