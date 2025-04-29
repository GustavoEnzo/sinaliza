import Image from 'next/image';
import Logo from '@/assets/logosnome.svg';
import Link from 'next/link';
export function Footer() {
  return (
    <footer id='contato' className=" w-full  mx-auto text-white bg-primary flex justify-center" >
    <div className="md:w-3/4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between p-12 items-center">
    <div className="flex flex-col gap-5 items-start mb-4 md:mb-0">
      
      <Image
        src={Logo}
        alt="Logo"
        width={100}
      />
      
    
    <ul className="flex flex-col justify-center gap-6 mb-4 md:mb-0">
      <li><Link href="/" className="hover:text-gray-300">Início</Link></li>
      <li><Link href="/modules" className="hover:text-gray-300">Módulos</Link></li>
      <li><Link href="/#sobre" className="hover:text-gray-300">Sobre</Link></li>
    </ul>
    </div>
    <div className="text-center md:text-right">
      <p>&copy; 2024 Sinaliza-IFMA</p>
      <p>g.enzo@acad.ifma.edu.br</p>
      
    </div>
  </div>
    </div>
</footer>
  );
}