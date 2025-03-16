'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logosnome.svg';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header className="w-full flex h-20 items-center bg-primary px-6 md:px-12 relative z-50">
      <div className="w-full md:w-4/5 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" width={100} />
        </Link>

        {/* Botão do menu para mobile */}
        <button 
          className="md:hidden text-white focus:outline-none cursor-pointer"
          onClick={toggleMenu}
        >
          <Menu size={30} />
        </button>

        {/* Menu de navegação (desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex flex-row gap-5">
            <li><Link href="/" className="text-white block py-2 px-4 md:px-0">Início</Link></li>
            <li><Link href="/modules" className="text-white block py-2 px-4 md:px-0">Módulos</Link></li>
            <li><Link href="/#sobre" className="text-white block py-2 px-4 md:px-0">Sobre</Link></li>
          </ul>
        </nav>

        {/* Menu mobile */}
        <div 
          className={`fixed top-0 left-0 w-full h-screen bg-primary md:hidden transition-transform duration-300 z-50 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ zIndex: 1000 }} // Garante que fique acima dos vídeos
        >
          {/* Botão X para fechar o menu */}
          <button 
            className="absolute top-5 right-6 text-white z-50"
            onClick={toggleMenu}
          >
            <X size={35} />
          </button>

          {/* Fundo semi-transparente para evitar sobreposição de vídeos */}
          <div className="absolute top-0 left-0 w-full h-full bg-primary/90 backdrop-blur-md z-40"></div>

          {/* Conteúdo do menu */}
          <div className="relative z-50 w-2/3 h-full flex flex-col items-center justify-center">
            <nav>
              <ul className="space-y-6 text-center text-white text-xl">
                <li><Link href="/" onClick={toggleMenu}>Início</Link></li>
                <li><Link href="/modules" onClick={toggleMenu}>Módulos</Link></li>
                <li><Link href="/#sobre" onClick={toggleMenu}>Sobre</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
