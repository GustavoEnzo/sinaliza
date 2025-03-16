'use client';
import Link from 'next/link';

const modules = [
  { id: 1, title: 'Módulo 1 - Saudações', description: 'Sinais básicos de saudação' },
  { id: 2, title: 'Módulo 2 - Alimentos', description: 'Sinais relacionados a alimentos' },
];

export default function ModulesPage() {
  return (
    <div className="w-full min-h-screen bg-primary py-12 flex flex-col items-center">
      {/* Título da página */}
      <h1 className="text-4xl font-bold text-secondary mb-8">Módulos</h1>

      {/* Grid para os cards */}
      <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 gap-6 px-6 sm:px-12 lg:px-20 w-full place-items-center">
        {modules.map((module) => (
          <Link href={`/modules/${module.id}`} key={module.id} className="w-72 sm:w-80 md:w-96 lg:w-[400px]">
            <div className="group relative bg-secondary text-primary p-6 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              {/* Fundo animado */}
              <div className="absolute inset-0 bg-secondary opacity-100 group-hover:opacity-80 transition-opacity duration-300 rounded-lg"></div>

              {/* Conteúdo do card */}
              <div className="relative z-10 text-center">
                <h2 className="text-2xl mb-2 font-semibold transition-transform duration-300 group-hover:scale-110">
                  {module.title}
                </h2>
                <p className="transition-opacity duration-300 group-hover:opacity-80">
                  {module.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
