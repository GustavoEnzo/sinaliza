'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Video {
  id: number;
  title: string;
  youtubeLink: string;
}

const videos: { [key: number]: Video[] } = {
  1: [
    { id: 1, title: 'Sinal de Olá', youtubeLink: 'https://www.youtube.com/watch?v=3iUZju5h5gw&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=2' },
    { id: 2, title: 'Sinal de Adeus', youtubeLink: 'https://www.youtube.com/watch?v=lo4DBUaNPME&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=9' },
  ],
  2: [
    { id: 1, title: 'Sinal de Maçã', youtubeLink: 'https://www.youtube.com/watch?v=RE8WHYfS3oA&list=PL3NiGvCg31F_pEw1KzN-y1kPMXvworJdE&index=21' },
    { id: 2, title: 'Sinal de Pão', youtubeLink: 'https://www.youtube.com/watch?v=CkFxFgaPGZQ&list=PL3NiGvCg31F_pEw1KzN-y1kPMXvworJdE&index=38' },
  ],
};

export default function ModulePage() {
  const pathname = usePathname();
  const [moduleId, setModuleId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(''); // Mova esse Hook para cima, antes do retorno condicional.

  useEffect(() => {
    const id = pathname?.split('/').pop();
    if (id) {
      setModuleId(Number(id));
    }
  }, [pathname]);

  const moduleVideos = videos[moduleId || 0] || []; // Define um valor padrão para evitar `undefined`.
  const filteredVideos = moduleVideos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return moduleId === null ? (
    <div>Carregando...</div>
  ) : (
    <div className="w-full min-h-screen bg-primary py-12 px-6 sm:px-12 lg:px-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-secondary mb-8">Vídeos do Módulo {moduleId}</h1>

      <div className="w-full max-w-lg mb-8">
        <input
          type="text"
          placeholder="Pesquisar vídeos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border-2 border-primary rounded-lg"
        />
      </div>

      {filteredVideos.length === 0 ? (
        <p className="text-xl text-secondary">Não há vídeos disponíveis para este módulo.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 w-full">
          {filteredVideos.map((video) => (
            <div key={video.id} className="w-full p-4 bg-secondary text-primary rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary">{video.title}</h3>
              <div className="w-full h-0 pb-[56.25%] relative mb-4">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeLink.split('v=')[1].split('&')[0]}`}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
