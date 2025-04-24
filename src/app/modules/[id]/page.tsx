'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ScrollToTopButton from '@/components/ScrollToTopButton';

interface Video {
  id: number;
  title: string;
  youtubeLink: string;
}

const videos: { [key: number]: Video[] } = {
  1: [
    { id: 1, title: 'Alfabeto', youtubeLink: 'https://www.youtube.com/watch?v=ARX0sl6apCw' },
  ],
  2: [
    { id: 1, title: 'Números Cardinais e Quantitativos', youtubeLink: 'https://www.youtube.com/watch?v=TFtme0cvf28' },
    { id: 2, title: 'Números Ordinais', youtubeLink: 'https://www.youtube.com/watch?v=0RD-UVUOyYc' },
  ],
  3: [
    { id: 1, title: 'Obrigada', youtubeLink: 'https://www.youtube.com/watch?v=_X2i1MXPCkA&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH' },
    { id: 2, title: 'Oi', youtubeLink: 'https://www.youtube.com/watch?v=3iUZju5h5gw&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 3, title: 'Peso', youtubeLink: 'https://www.youtube.com/watch?v=iFW_iY3fiII&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 4, title: 'Por favor', youtubeLink: 'https://www.youtube.com/watch?v=ZONwauXiwRc&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 5, title: 'Prazer em Conhecer', youtubeLink: 'https://www.youtube.com/watch?v=9UcdfolhYDI&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 6, title: 'Saudade', youtubeLink: 'https://www.youtube.com/watch?v=j1N14G3alko&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 7, title: 'Seu Nome', youtubeLink: 'https://www.youtube.com/watch?v=wt3CwqAIvzE&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 8, title: 'Tchau/Até logo', youtubeLink: 'https://www.youtube.com/watch?v=lo4DBUaNPME&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 9, title: 'Nome completo', youtubeLink: 'https://www.youtube.com/watch?v=TotOUnrWBdI&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 10, title: 'Nascimento', youtubeLink: 'https://www.youtube.com/watch?v=mGEGQtqoGTA&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 11, title: 'Meu sinal', youtubeLink: 'https://www.youtube.com/watch?v=liwxZbdAexs&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 12, title: 'Altura', youtubeLink: 'https://www.youtube.com/watch?v=UxaA3QlWr0w&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 13, title: 'Bem/Bom', youtubeLink: 'https://www.youtube.com/watch?v=FP11oMFsxFc&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 14, title: 'Boa noite', youtubeLink: 'https://www.youtube.com/watch?v=rLe5gwZh9oM&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 15, title: 'Boa Tarde', youtubeLink: 'https://www.youtube.com/watch?v=6PmU5MFWuRo&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 16, title: 'Bom dia', youtubeLink: 'https://www.youtube.com/watch?v=u21tp3PktO0&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 17, title: 'Cumprimento', youtubeLink: 'https://www.youtube.com/watch?v=TA8cmI7F90I&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 18, title: 'Desculpe', youtubeLink: 'https://www.youtube.com/watch?v=YWTNzFXgTA8&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 19, title: 'Idade', youtubeLink: 'https://www.youtube.com/watch?v=2HhrWeDgLZs&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 20, title: 'Meu nome', youtubeLink: 'https://www.youtube.com/watch?v=Jw6lKkWVUsg&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
    { id: 21, title: 'Tudo bem', youtubeLink: 'https://www.youtube.com/watch?v=ix4-tXaO2Ck&list=PL3NiGvCg31F-WZYf2UJX6yBmpq8uLXjMH&index=' },
  ],
  4: [
    { id: 1, title: 'Manga', youtubeLink: 'https://www.youtube.com/watch?v=Y41tSCSZzoI&' },
    { id: 2, title: 'Macarrão', youtubeLink: 'https://www.youtube.com/watch?v=yeVuDYA7-6c&' },
    { id: 3, title: 'Melancia', youtubeLink: 'https://www.youtube.com/watch?v=gOnl8CVNKTY&' },
    { id: 4, title: 'Mel', youtubeLink: 'https://www.youtube.com/watch?v=2l4TO4H4A1Q&' },
    { id: 5, title: 'Maracujá', youtubeLink: 'https://www.youtube.com/watch?v=B975Tt3Qphs&' },
    { id: 6, title: 'Manteiga / Margarina', youtubeLink: 'https://www.youtube.com/watch?v=p3hTj-0vKE4&' },
    { id: 7, title: 'Mandioca', youtubeLink: 'https://www.youtube.com/watch?v=GpskbawkE9k&' },
    { id: 8, title: 'Feijão', youtubeLink: 'https://www.youtube.com/watch?v=bmCtxILL_Og&' },
    { id: 9, title: 'Figo', youtubeLink: 'https://www.youtube.com/watch?v=Gtcpb7rVoWQ&' },
    { id: 10, title: 'Frango', youtubeLink: 'https://www.youtube.com/watch?v=JAshhuNA-JU&' },
    { id: 11, title: 'Frutas', youtubeLink: 'https://www.youtube.com/watch?v=s-3ujO9sCKA&' },
    { id: 12, title: 'Gelatina', youtubeLink: 'https://www.youtube.com/watch?v=xuy89KeHUGA&' },
    { id: 13, title: 'Jabuticaba', youtubeLink: 'https://www.youtube.com/watch?v=GnMquPpyWCM&' },
    { id: 14, title: 'Kiwi', youtubeLink: 'https://www.youtube.com/watch?v=GFrYSjqQ1IA&' },
    { id: 15, title: 'Laranja', youtubeLink: 'https://www.youtube.com/watch?v=nxCv6-YhgJ8&' },
    { id: 16, title: 'Leite', youtubeLink: 'https://www.youtube.com/watch?v=E9lGVI6Hb3s&' },
    { id: 17, title: 'Limão', youtubeLink: 'https://www.youtube.com/watch?v=lcUpTq7Dwjs&' },
    { id: 18, title: 'Linguiça', youtubeLink: 'https://www.youtube.com/watch?v=Yrj1OyKVsno&' },
    { id: 19, title: 'Maçã', youtubeLink: 'https://www.youtube.com/watch?v=RE8WHYfS3oA&' },
    { id: 20, title: 'Ervilha', youtubeLink: 'https://www.youtube.com/watch?v=_pr95epABds&' },
    { id: 21, title: 'Melão', youtubeLink: 'https://www.youtube.com/watch?v=DWoxBFneAPk&' },
    { id: 22, title: 'Mexerica', youtubeLink: 'https://www.youtube.com/watch?v=a2qd9cxJND0&' },
    { id: 23, title: 'Sanduíche', youtubeLink: 'https://www.youtube.com/watch?v=M47FkCsjeG4&' },
    { id: 24, title: 'Salada', youtubeLink: 'https://www.youtube.com/watch?v=GqmsfTXWN6E&' },
    { id: 25, title: 'Queijo', youtubeLink: 'https://www.youtube.com/watch?v=JSesJSAFMj4&' },
    { id: 26, title: 'Pirulito', youtubeLink: 'https://www.youtube.com/watch?v=onesHiETfXk&' },
    { id: 27, title: 'Pipoca', youtubeLink: 'https://www.youtube.com/watch?v=lGZR09zSjCk&' },
    { id: 28, title: 'Pimenta', youtubeLink: 'https://www.youtube.com/watch?v=kbFh5KY_zQ4&' },
    { id: 29, title: 'Pêra', youtubeLink: 'https://www.youtube.com/watch?v=u4FqehFLZ4k&' },
    { id: 30, title: 'Pastel', youtubeLink: 'https://www.youtube.com/watch?v=eXJ_6D6lPpA&' },
    { id: 31, title: 'Sopa', youtubeLink: 'https://www.youtube.com/watch?v=twrDfu8HEv0&' },
    { id: 32, title: 'Sorvete / Picolé', youtubeLink: 'https://www.youtube.com/watch?v=CHiZWtyuKaE&' },
    { id: 33, title: 'Tomate', youtubeLink: 'https://www.youtube.com/watch?v=8ywXjj4BpmY&' },
    { id: 34, title: 'Milho', youtubeLink: 'https://www.youtube.com/watch?v=vrL5yTFBg4s&' },
    { id: 35, title: 'Morango', youtubeLink: 'https://www.youtube.com/watch?v=cuUhx6Fj0Fc&' },
    { id: 36, title: 'Ovo', youtubeLink: 'https://www.youtube.com/watch?v=1YVel5SVebk&' },
    { id: 37, title: 'Pão', youtubeLink: 'https://www.youtube.com/watch?v=4Uj_dS9KHvM&' },
    { id: 38, title: 'Salsicha', youtubeLink: 'https://www.youtube.com/watch?v=dGx0ny-RfJ8&' },
    { id: 39, title: 'Vinagre', youtubeLink: 'https://www.youtube.com/watch?v=S1rir6zDhB8&' },
    { id: 40, title: 'Legumes', youtubeLink: 'https://www.youtube.com/watch?v=uc6wlzd-OuI&' },
  ],
  5: [
    { id: 1, title: 'Manhã', youtubeLink: 'https://www.youtube.com/watch?v=LNPMRpbd47A' },
    { id: 2, title: 'Tarde', youtubeLink: 'https://www.youtube.com/watch?v=7Ph58G8J01g&' },
    { id: 3, title: 'Noite', youtubeLink: 'https://www.youtube.com/watch?v=XRW7AtIYNfA&' },
    { id: 4, title: 'Segunda Feira', youtubeLink: 'https://www.youtube.com/watch?v=MVR8VRqHtXs&' },
    { id: 5, title: 'Terça Feira', youtubeLink: 'https://www.youtube.com/watch?v=CwWBbBQSmuM&' },
    { id: 6, title: 'Quarta Feira', youtubeLink: 'https://www.youtube.com/watch?v=HhtuWeGVjag&' },
    { id: 7, title: 'Quinta Feira', youtubeLink: 'https://www.youtube.com/watch?v=ZJwws4Ry4ls&' },
    { id: 8, title: 'Sexta Feira', youtubeLink: 'https://www.youtube.com/watch?v=bE_c_8VbdvM&' },
    { id: 9, title: 'Sábado', youtubeLink: 'https://www.youtube.com/watch?v=JoDtyWV69oY&' },
    { id: 10, title: 'Domingo', youtubeLink: 'https://www.youtube.com/watch?v=XTLU6R5LaHQ&' },
    { id: 11, title: 'Semana', youtubeLink: 'https://www.youtube.com/watch?v=okiglqWgfa8&' },
    { id: 12, title: 'Passado', youtubeLink: 'https://www.youtube.com/watch?v=CtWVxSLU568&' },
    { id: 13, title: 'Ontem', youtubeLink: 'https://www.youtube.com/watch?v=uVaa1AjxZwM&' },
    { id: 14, title: 'Hoje', youtubeLink: 'https://www.youtube.com/watch?v=WU57c9vl_8w&' },
    { id: 15, title: 'Minuto', youtubeLink: 'https://www.youtube.com/watch?v=h1zhBMIZ_7Y&' },
    { id: 16, title: 'Futuro', youtubeLink: 'https://www.youtube.com/watch?v=Qc6m3rMEUow&' },
    { id: 17, title: 'Férias', youtubeLink: 'https://www.youtube.com/watch?v=EQynM6frv0A&' },
    { id: 18, title: 'Feriado', youtubeLink: 'https://www.youtube.com/watch?v=AfgMqdAmLYM&' },
    { id: 19, title: 'Dia', youtubeLink: 'https://www.youtube.com/watch?v=ERtoFu3tpc4&' },
    { id: 20, title: 'Depois', youtubeLink: 'https://www.youtube.com/watch?v=yrm--LQ3wVU&' },
    { id: 21, title: 'Antes', youtubeLink: 'https://www.youtube.com/watch?v=B7_q1-0FIR8&' },
    { id: 22, title: 'Ano que vem', youtubeLink: 'https://www.youtube.com/watch?v=to6FTvVuEqc&' },
    { id: 23, title: 'Ano', youtubeLink: 'https://www.youtube.com/watch?v=ES0oblxbmw4&' },
    { id: 24, title: 'Amanhã', youtubeLink: 'https://www.youtube.com/watch?v=LgbimW7XFO0&' },
    { id: 25, title: 'Estações do Ano', youtubeLink: 'https://www.youtube.com/watch?v=RfHfUWJIGJ4&' },
    { id: 26, title: 'Verão', youtubeLink: 'https://www.youtube.com/watch?v=_R6x-qc_pis&' },
    { id: 27, title: 'Outono', youtubeLink: 'https://www.youtube.com/watch?v=gYOmfr7pmTo&' },
    { id: 28, title: 'Inverno', youtubeLink: 'https://www.youtube.com/watch?v=uItVu4p1sZs&' },
    { id: 29, title: 'Primavera', youtubeLink: 'https://www.youtube.com/watch?v=_2NLH4tPwY4&' },
    { id: 30, title: 'Mês', youtubeLink: 'https://www.youtube.com/watch?v=NHE8Q0dI4lA&' },
    { id: 31, title: 'Janeiro', youtubeLink: 'https://www.youtube.com/watch?v=VvAaS3Vf-bs&' },
    { id: 32, title: 'Fevereiro', youtubeLink: 'https://www.youtube.com/watch?v=7VekGXzj9Wo&' },
    { id: 33, title: 'Março', youtubeLink: 'https://www.youtube.com/watch?v=yGCgIyOITb4&' },
    { id: 34, title: 'Abril', youtubeLink: 'https://www.youtube.com/watch?v=23xbgZBtAPE&' },
    { id: 35, title: 'Maio', youtubeLink: 'https://www.youtube.com/watch?v=c4dXJHvNADM&' },
    { id: 36, title: 'Junho', youtubeLink: 'https://www.youtube.com/watch?v=NlJAGclfwTc&' },
    { id: 37, title: 'Julho', youtubeLink: 'https://www.youtube.com/watch?v=TPtNbwmgYoc&' },
    { id: 38, title: 'Agosto', youtubeLink: 'https://www.youtube.com/watch?v=TfWCAp2yC0w&' },
    { id: 39, title: 'Setembro', youtubeLink: 'https://www.youtube.com/watch?v=mjHHrGqvAFY&' },
    { id: 40, title: 'Outubro', youtubeLink: 'https://www.youtube.com/watch?v=CsOeex7uhRE&' },
    { id: 41, title: 'Novembro', youtubeLink: 'https://www.youtube.com/watch?v=IVf7tWyEGyY&' },
    { id: 42, title: 'Dezembro', youtubeLink: 'https://www.youtube.com/watch?v=iGzuZ4fePhE&' },
  ],
};

export default function ModulePage() {
  const pathname = usePathname();
  const [moduleId, setModuleId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(''); 

  useEffect(() => {
    const id = pathname?.split('/').pop();
    if (id) {
      setModuleId(Number(id));
    }
  }, [pathname]);

  const moduleVideos = videos[moduleId || 0] || []; 
  const filteredVideos = moduleVideos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return moduleId === null ? (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mb-4"></div>
  <p className="text-lg font-semibold text-primary">Carregando...</p>
</div>
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
      <ScrollToTopButton />
    </div>
    
  );
  
}
