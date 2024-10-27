import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';

export default function AvaliacoesPage() {
  return (
    <>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Portfólio Acadêmico</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Link href="/avaliacoes/checkpoints" className="group block p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <Image src="/images/checkpoint-icon.png" alt="CheckPoints" width={100} height={100} />
            <h3 className="text-2xl font-semibold text-center text-gray-800 mt-6 group-hover:text-indigo-500">CheckPoints</h3>
          </Link>
          <Link href="/avaliacoes/globalsolution" className="group block p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <Image src="/images/global-icon.png" alt="Global Solution" width={100} height={100} />
            <h3 className="text-2xl font-semibold text-center text-gray-800 mt-6 group-hover:text-indigo-500">Global Solution</h3>
          </Link>
          <Link href="/avaliacoes/challengesprint" className="group block p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <Image src="/images/challenge-icon.png" alt="Challenge Sprint" width={100} height={100} />
            <h3 className="text-2xl font-semibold text-center text-gray-800 mt-6 group-hover:text-indigo-500">Challenge Sprints</h3>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
