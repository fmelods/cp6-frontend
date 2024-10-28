import Link from 'next/link';

const Menu = () => (
  <nav className="flex space-x-4 bg-gray-200 p-4">
    <Link href="/avaliacoes/checkpoints">CheckPoints</Link>
    <Link href="/avaliacoes/globalsolution">GlobalSolution</Link>
    <Link href="/avaliacoes/challengesprint">Challenger Sprints</Link>
  </nav>
);

export default Menu;
