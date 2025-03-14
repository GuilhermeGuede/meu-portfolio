import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 min-h-screen text-white">
      <Head>
        <title>Sobre Mim</title>
      </Head>
      <header className="bg-black bg-opacity-50 p-6 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-extrabold">Sobre Mim</h1>
        <nav>
          <ul className="flex space-x-6">
            <Link href="/" className="hover:text-gray-300 transition duration-300">Home</Link>
            <Link href="/projetos" className="hover:text-gray-300 transition duration-300">Projetos</Link>
            <Link href="/contato" className="hover:text-gray-300 transition duration-300">Contato</Link>
          </ul>
        </nav>
      </header>
      <main className="p-10 flex flex-col items-center text-center">
        <section className="max-w-3xl p-6 bg-black bg-opacity-40 rounded-lg shadow-lg flex flex-col items-center">
          <img src="/images/minha_foto.jpg" alt="Minha Foto" className="w-40 h-40 rounded-full mb-4 border-4 border-gray-300 shadow-md" />
          <h2 className="text-3xl font-bold mb-4">Quem Sou Eu?</h2>
          <p className="text-gray-300">
            Sou um desenvolvedor apaixonado por tecnologia, sempre buscando 
            aprender novas ferramentas e melhorar minhas habilidades. Tenho experiência 
            em desenvolvimento web e adoro transformar ideias em realidade através do código.
          </p>
          <p className="text-gray-300 mt-4">
            Meu foco está em criar aplicações modernas, eficientes e escaláveis, 
            utilizando tecnologias como React, Next.js e Tailwind CSS.
          </p>
        </section>
      </main>
      <footer className="bg-black bg-opacity-50 text-center p-4 mt-10">
        <p>&copy; {new Date().getFullYear()} Meu Nome</p>
      </footer>
    </div>
  );
}
