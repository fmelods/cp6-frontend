import Image from 'next/image';
import React from 'react';

interface CartaoAvaliacaoProps {
  titulo: string;
  data: string;
  nota: number;
  descricao: string;
  imagem?: string;
}

const CartaoAvaliacao: React.FC<CartaoAvaliacaoProps> = ({ titulo, data, nota, descricao, imagem }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg flex items-center space-x-6 hover:shadow-2xl transition-shadow duration-300">
      {imagem && (
        <Image src={imagem} alt={titulo} width={80} height={80} className="rounded-lg object-cover" />
      )}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">{titulo}</h3>
        <p className="text-gray-500">{data}</p>
        <p className="mt-2 text-lg text-indigo-600 font-bold">Nota: {nota}</p>
        <p className="mt-2 text-gray-700">{descricao}</p>
      </div>
    </div>
  );
};

export default CartaoAvaliacao;
