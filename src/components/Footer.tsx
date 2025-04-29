import Image from 'next/image';
import Logo from '@/assets/logosnome.svg';
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
      <li><a href="/" className="hover:text-gray-300">Início</a></li>
      <li><a href="/modules" className="hover:text-gray-300">Módulos</a></li>
      <li><a href="/#sobre" className="hover:text-gray-300">Sobre</a></li>
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