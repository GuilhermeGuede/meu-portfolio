import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 min-h-screen text-white">
      <Head>
        <title>Meu Portfólio</title>
      </Head>
      <header className="bg-black bg-opacity-50 p-6 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-extrabold">Meu Portfólio</h1>
        <nav>
          <ul className="flex space-x-6">
            <Link href="about/" className="hover:text-gray-300 transition duration-300">Sobre</Link>
            <Link href="#projetos" className="hover:text-gray-300 transition duration-300">Projetos</Link>
            <Link href="#contato" className="hover:text-gray-300 transition duration-300">Contato</Link>
          </ul>
        </nav>
      </header>
      <main className="p-10">
        <section id="sobre" className="mb-12 p-6 bg-black bg-opacity-40 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-gray-300">Sou um desenvolvedor apaixonado por tecnologia e criação de soluções eficientes. Tenho experiência em desenvolvimento web, especialmente com PHP, e estou expandindo meus conhecimentos para novas tecnologias como Next.js. Gosto de enfrentar desafios técnicos, aprender novas ferramentas e transformar ideias em projetos funcionais. Busco constantemente aprimorar minhas habilidades para entregar aplicações de qualidade e proporcionar boas experiências aos usuários. 🚀</p>
        </section>
        <section id="projetos" className="mb-12 p-6 bg-black bg-opacity-40 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Projetos</h2>
          <p className="text-gray-300">Realizei alguns projetos, projetos que me permitiram aprimorar minhas habilidades e explorar novas tecnologias. Desenvolvi um CRM em PHP para gerenciamento de leads, incluindo geração automática de contratos com dados extraídos diretamente do banco de dados. Também criei um site em Next.js integrado ao Thirdweb, trazendo soluções Web3 para a aplicação. Além disso, desenvolvi uma plataforma de leilões em PHP, focada em desempenho e experiência do usuário. Busco sempre aprender e evoluir, entregando soluções eficientes e bem estruturadas.</p>
        </section>
        <section id="habilidades" className="mb-12 p-6 bg-black bg-opacity-40 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
          <p className="text-gray-300">Tenho habilidades em PHP, Next.js, JavaScript, HTML e CSS. Tenho experiência no desenvolvimento de sites e sistemas simples, utilizando PHP para criação de funcionalidades dinâmicas e integração com bancos de dados. No front-end, uso Next.js para construir aplicações modernas e com boa performance, e JavaScript para implementar interatividade. Com HTML e CSS, sou capaz de criar layouts responsivos e com boa usabilidade. Estou em constante evolução, buscando sempre melhorar minhas habilidades e entregar soluções cada vez mais eficazes.</p>
        </section>
        <section id="contato" className="p-6 bg-black bg-opacity-40 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Contato</h2>
          <p className="text-gray-300">Fique à vontade para entrar em contato comigo para dúvidas, colaborações ou oportunidades de trabalho. Você pode me encontrar através dos seguintes canais:
          <br></br><br></br>
          E-mail: guedesg226@gmail.com<br></br><br></br>
          Telefone: (11) 95104-8256<br></br><br></br>
          GitHub: github.com/GuilhermeGuede</p>
        </section>
      </main>
      <footer className="bg-black bg-opacity-50 text-center p-4">
        <p>&copy; {new Date().getFullYear()} Guilherme Guedes</p>
      </footer>
            {/* Ícone do WhatsApp */}
            <a href="https://wa.me/5511951048256" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  );
}
