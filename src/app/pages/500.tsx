"use client";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">500</h1>
      <h2 className="text-3xl font-semibold mb-2">Erro Interno no Servidor</h2>
      <p className="text-lg mb-6 max-w-md">
        Oops! Parece que algo deu errado no nosso lado. Estamos trabalhando para
        corrigir isso o mais rápido possível.
      </p>
      <a
        href="/"
        className="mt-4 px-6 py-3 bg-blue-600 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Voltar para a Página Inicial
      </a>
    </div>
  );
};

export default ErrorPage;
