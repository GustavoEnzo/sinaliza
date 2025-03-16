import Image from 'next/image';
import Logo from '@/assets/logonome.svg';
import Whats from '@/assets/whatsapp.svg';
import Desenho from '@/assets/desenho.svg';

export function Main() {
    return (
        <>
            {/* Seção Principal */}
            <div className="w-full bg-primary flex justify-center">
                <div className="container mx-auto px-6 md:px- flex flex-col md:flex-row items-center justify-between py-16">
                    <div className="text-white text-center md:text-left flex-1">
                        <div className="flex flex-col items-center md:items-center gap-4">
                            <Image src={Logo} alt="Logo" width={200} />
                            <h2 className="font-light text-center text-2xl md:text-3xl max-w-md">
                                Tornando mais fácil o aprendizado de Libras
                            </h2>
                            <a href="/modules"><button className="bg-white text-primary text-xl font-semibold w-48 rounded-lg p-3">Começar</button></a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center mt-8 md:mt-0">
                        <Image src={Desenho} alt="Desenho" width={700} height={700} className="w-full max-w-md" />
                    </div>
                </div>
            </div>
            
            {/* Seção Sobre */}
            <div className="w-full bg-secondary flex justify-center">
                <div className="container mx-auto px-6 md:px-12 py-12">
                    <section className="text-center text-primary">
                        <h1 id='sobre' className="text-3xl font-extrabold mb-4">Sobre</h1>
                        <p className="max-w-3xl mx-auto text-lg text-justify">
                        A importância do aprendizado da Língua Brasileira de Sinais (Libras) para a comunidade e familiares das pessoas surdas e/ou com deficiência auditiva torna-se relevante para a inclusão e a integração das pessoas com deficiência na sociedade, possibilitando melhorias na comunicação, acesso as informações e consequentemente a educação de qualidade. Neste sentido, o projeto intitulado: “SINALIZA: Facilitando a Aprendizagem de Libras” propõe a criação de uma ferramenta web de inovação social facilitadora para o aprendizado básico de Libras em situações cotidianas, visando a saúde e bem-estar da sociedade, a promoção da educação de qualidade e a redução das desigualdades sociais, alinhando-se aos Objetivos de Desenvolvimento Sustentável (ODS). O projeto será desenvolvido por uma equipe multicampi do Instituto Federal de Educação, Ciência e Tecnologia do Maranhão (IFMA) pertencente a Mesorregião do Leste Maranhense, composta por professores, técnicos administrativos e estudantes de cursos técnicos e superiores, visando atender a usuários com diferentes níveis de proficiência, desde iniciantes até aqueles que desejam reforçar seus conhecimentos em Libras, garantindo que todos possam aprender conforme suas necessidades.
                        </p>
                    </section>
                </div>
            </div>
            
            {/* Botão WhatsApp */}
            <a 
                href="https://wa.me/5586994618767" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="fixed bottom-7 right-7 z-50 w-14 h-14 flex items-center justify-center"
            >
                <Image 
                    src={Whats} 
                    alt="WhatsApp" 
                    width={50} 
                    height={50} 
                    className="transition-transform hover:scale-110"
                />
            </a>
        </>
    );
}