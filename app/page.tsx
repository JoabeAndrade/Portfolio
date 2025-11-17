import Image from "next/image";
import GridBackground from "@/components/GridBackground";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  MapPin,
  Calendar,
  Briefcase,
  Smartphone,
  Code2,
  Layout,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

export default function Portfolio() {
  return (
    <>
      <GridBackground />

      <main className="relative z-10 min-h-screen flex flex-col max-w-6xl mx-auto px-6 py-16 font-sans text-slate-900">
        <header className="flex justify-between items-center mb-24">
          <h1 className="text-2xl font-bold tracking-tighter text-slate-900 bg-white/80 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/50">
            Joabe<span className="text-accent"> Andrade</span>
          </h1>
          <nav className="hidden md:flex gap-4 text-lg font-medium text-slate-600 bg-white/80 p-2 rounded-xl backdrop-blur-sm shadow-sm border border-white/50">
            <a
              href="#about"
              className="hover:text-accent hover:bg-accent/10 px-3 py-1 rounded-lg transition-all"
            >
              Sobre
            </a>
            <a
              href="#education"
              className="hover:text-accent hover:bg-accent/10 px-3 py-1 rounded-lg transition-all"
            >
              Formação
            </a>
            <a
              href="#experience"
              className="hover:text-accent hover:bg-accent/10 px-3 py-1 rounded-lg transition-all"
            >
              Experiência
            </a>
            <a
              href="#projects"
              className="hover:text-accent hover:bg-accent/10 px-3 py-1 rounded-lg transition-all"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="hover:text-accent hover:bg-accent/10 px-3 py-1 rounded-lg transition-all"
            >
              Contato
            </a>
          </nav>
        </header>

        <section
          id="about"
          className="flex flex-col-reverse md:flex-row items-center gap-16 mb-32"
        >
          <div className="flex-1 space-y-8">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider border border-accent/20 backdrop-blur-sm">
              Full Stack Developer
            </span>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
              Transformando ideias em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
                soluções digitais
              </span>
              .
            </h2>

            <p className="text-slate-600 text-xl max-w-xl leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 shadow-sm">
              Olá, meu nome é Joabe Andrade, sou desenvolvedor Fullstack,
              formando no curso de ciência da computação na Universidade
              Estadual de Santa Cruz (UESC). Atualmente sou desenvolvedor
              Fullstack na ISUS, tabalhando com as tecnologias React, Node,
              Typescript, Python, Django e PostgreSQL. Também faço parte de uma
              residência em software, construindo soluções tecnologicas com o
              React Native (Expo), design patterns e clean code. Reconhecido por
              minha comunicação eficaz, organização e proatividade, destaco-me
              pela facilidade em colaborar com equipes multidisciplinares e por
              entregar soluções robustas e eficientes.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/JoabeAndrade"
                target="_blank"
                className="p-4 rounded-full bg-white text-slate-700 hover:bg-accent hover:text-white transition-all shadow-md hover:-translate-y-1 border border-slate-100"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/joabeandrade/"
                target="_blank"
                className="p-4 rounded-full bg-white text-slate-700 hover:bg-accent hover:text-white transition-all shadow-md hover:-translate-y-1 border border-slate-100"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:joabeandrade2k01@gmail.com"
                className="p-4 rounded-full bg-white text-slate-700 hover:bg-accent hover:text-white transition-all shadow-md hover:-translate-y-1 border border-slate-100"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-96 md:h-96 shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
              <Image
                src="/perfil.jpeg"
                alt="Foto de Joabe"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </section>

        <section
          id="education"
          className="mb-20 bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-slate-200 shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-900">
            <GraduationCap className="text-accent" size={36} /> Formação
            Acadêmica
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-l-4 border-accent pl-6 py-2 bg-slate-50/80 rounded-r-xl p-6">
            <div>
              <h4 className="text-2xl font-bold text-slate-900">
                Ciência da Computação
              </h4>
              <p className="text-xl text-slate-600 mt-2 font-medium">
                UESC – Universidade Estadual de Santa Cruz
              </p>
              <div className="flex items-center gap-2 text-slate-500 mt-2">
                <MapPin size={18} />
                <span>Ilhéus, BA</span>
              </div>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl border border-slate-200 font-bold text-accent flex items-center gap-2 shadow-sm">
              <Calendar size={18} />
              Jun 2021 - Jun 2026
            </div>
          </div>
        </section>

        <section id="experience" className="mb-32">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900">
            <Briefcase className="text-accent" size={36} /> Experiência
            Profissional
          </h3>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-accent text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} className="text-white" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h4 className="font-bold text-xl text-slate-900">
                    Desenvolvedor Fullstack
                  </h4>
                  <time className="font-medium text-accent text-sm">
                    Fev 2025 - Presente
                  </time>
                </div>
                <h5 className="text-lg font-semibold text-slate-700 mb-3">
                  ISUS
                </h5>
                <p className="text-slate-600 leading-relaxed">
                  Atuando no desenvolvimento de uma aplicação web FullStack
                  utilizando{" "}
                  <span className="font-bold text-slate-800">Next.js</span> e{" "}
                  <span className="font-bold text-slate-800">TypeScript</span>{" "}
                  para criação de interfaces de usuários e desenvolvendo APIs
                  com{" "}
                  <span className="font-bold text-slate-800">
                    Django Rest Framework
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h4 className="font-bold text-xl text-slate-900">
                    Residente em Software
                  </h4>
                  <time className="font-medium text-slate-500 text-sm">
                    Jul 2024 - Out 2025
                  </time>
                </div>
                <h5 className="text-lg font-semibold text-slate-700 mb-3">
                  CEPEDI
                </h5>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Minha trilha foi desenvolvimento mobile utilizando:{" "}
                  <span className="font-bold text-slate-800">
                    React Native, Expo, TypeScript e Node (Express)
                  </span>
                  . Tive uma grande experiência no trabalho em equipe.
                </p>
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-lg text-sm inline-block font-bold">
                  Projeto: E-Drive Navigator
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h4 className="font-bold text-xl text-slate-900">
                    Diretor de Projetos
                  </h4>
                  <time className="font-medium text-slate-500 text-sm">
                    Jan 2023 - Jan 2025
                  </time>
                </div>
                <h5 className="text-lg font-semibold text-slate-700 mb-3">
                  TecnoJr – Ilhéus, BA
                </h5>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Comecei como trainee (React/Next), me tornei membro
                  desenvolvedor, depois Assessor de Projetos (planejamento e
                  reuniões com clientes) e fui promovido a Diretor. Organizei,
                  planejei e controlei o desenvolvimento de soluções.
                </p>
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-lg text-sm inline-block font-bold">
                  Projeto: Engaj
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900">
            <Code2 className="text-accent" size={36} /> Tecnologias &
            Ferramentas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <StackCard name="React">
              <SiReact size={40} className="text-[#61DAFB]" />
            </StackCard>

            <StackCard name="Next.js">
              <SiNextdotjs size={40} className="text-black" />
            </StackCard>

            <StackCard name="React Native">
              {/* React Native usa o mesmo logo do React */}
              <SiReact size={40} className="text-[#61DAFB]" />
            </StackCard>

            <StackCard name="TypeScript">
              <SiTypescript size={40} className="text-[#3178C6]" />
            </StackCard>

            <StackCard name="Node.js">
              <SiNodedotjs size={40} className="text-[#339933]" />
            </StackCard>

            <StackCard name="Express">
              <SiExpress size={40} className="text-slate-800" />
            </StackCard>

            <StackCard name="Python">
              <SiPython size={40} className="text-[#3776AB]" />
            </StackCard>

            <StackCard name="Django">
              <SiDjango size={40} className="text-[#092E20]" />
            </StackCard>

            <StackCard name="PostgreSQL">
              <SiPostgresql size={40} className="text-[#336791]" />
            </StackCard>

            <StackCard name="Tailwind CSS">
              <SiTailwindcss size={40} className="text-[#06B6D4]" />
            </StackCard>
          </div>
        </section>

        <section id="projects" className="mb-32">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900">
            <Layout className="text-accent" size={36} /> Projetos em Destaque
          </h3>

          <div className="grid gap-12">
            <div className="group rounded-3xl overflow-hidden bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-gradient-to-br from-[#0C1E58] to-accent flex items-center justify-center p-10">
                  <div className="text-white text-center">
                    <Smartphone className="w-20 h-20 mx-auto mb-2 opacity-90" />
                    <span className="font-bold text-xl">E-Drive Navigator</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <h4 className="text-3xl font-bold mb-4 text-slate-900">
                    E-Drive Navigator
                  </h4>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    Aplicativo mobile para planejamento inteligente de rotas
                    para veículos elétricos. Resolve a ansiedade de autonomia
                    calculando paradas baseadas na bateria real do carro.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {["Next.js", "Tailwind", "Mobile First"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://e-drive-navigator.vercel.app/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:underline"
                  >
                    Ver Projeto <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-slate-900 flex items-center justify-center p-10">
                  <span className="text-white font-bold text-4xl">Engaj</span>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <h4 className="text-3xl font-bold mb-4 text-slate-900">
                    Engaj Consultoria
                  </h4>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    Plataforma completa para construção de projetos sociais
                    sustentáveis e autênticos. Site institucional com alta
                    performance e otimização de SEO.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {["React", "Next.js", "TypeScript"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://www.engajconsultoria.com.br/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:underline"
                  >
                    Ver Projeto <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-gradient-to-br from-purple-900 to-indigo-600 flex items-center justify-center p-10">
                  <div className="text-white text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-20 h-20 mx-auto mb-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="font-bold text-xl">ToDo-Zen</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <h4 className="text-3xl font-bold mb-4 text-slate-900">
                    ToDo-Zen
                  </h4>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    Projeto desenvolvido durante o curso de Desenvolvimento
                    Mobile, oferecida pela CEPEDI. Gerenciamento de tarefas com
                    foco em simplicidade e produtividade.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {["React Native", "Expo", "TypeScript"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/moabesouza/ListaTarefas"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:underline"
                  >
                    Ver no GitHub <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          id="contact"
          className="border-t border-slate-200 pt-16 pb-10 text-center bg-white/90 backdrop-blur-sm rounded-t-3xl"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Vamos construir algo juntos?
          </h2>
          <a
            href="https://wa.me/5573982135571"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-xl px-10 py-4 rounded-full hover:bg-opacity-90 transition-transform hover:-translate-y-1 shadow-lg shadow-green-500/30"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Mande um oi 👋
          </a>
          <p className="mt-16 text-slate-500 text-sm">
            © 2025 Joabe Andrade. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

function StackCard({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/50 transition-all flex flex-col items-center gap-4 text-center group cursor-default hover:scale-105">
      <div className="group-hover:scale-110 transition-transform duration-300">
        {children}
      </div>
      <span className="font-bold text-lg text-slate-700">{name}</span>
    </div>
  );
}
