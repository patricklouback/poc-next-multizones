import Link from "next/link";
import { ArrowLeft, ExternalLink, Home, Info } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-slate-500 mb-8">
          <Link href="/" className="flex items-center hover:text-slate-700">
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 flex items-center">
            <Info className="h-4 w-4 mr-1" />
            <span>Sobre</span>
          </span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Sobre o <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Projeto 1</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
        </header>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-800">Sobre este projeto</h2>
              <div className="prose max-w-none">
                <p className="text-slate-600 mb-4">
                  Este é um exemplo de demonstração para o NextMultizone, uma solução que permite executar múltiplos aplicativos Next.js em um único domínio.
                </p>
                <p className="text-slate-600 mb-4">
                  Com o NextMultizone, você pode:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
                  <li>Dividir sua aplicação em múltiplos projetos independentes</li>
                  <li>Permitir que diferentes equipes trabalhem em diferentes partes da aplicação</li>
                  <li>Implementar e escalar cada projeto separadamente</li>
                  <li>Manter uma experiência de usuário unificada</li>
                </ul>
                <p className="text-slate-600">
                  Esta página faz parte do Projeto 1, mas você pode navegar facilmente para o Projeto 2 usando os links abaixo.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium mb-4 text-slate-800">Navegação</h3>
              <div className="space-y-3">
                <Link 
                  href="/" 
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 text-slate-700 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Voltar para Home</span>
                </Link>
                <a 
                  href="/app2" 
                  className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Ir para Projeto 2</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>NextMultizone POC - Demonstração de navegação entre projetos</p>
        </footer>
      </div>
    </main>
  );
}
