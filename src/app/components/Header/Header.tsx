import Image from 'next/image';

const Header = () => (
  <header className="bg-blue-500 p-4 text-white flex items-center justify-center space-x-3">
    <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
    <h1 className="text-2xl font-bold">Portfólio Acadêmico</h1>
  </header>
);

export default Header;
