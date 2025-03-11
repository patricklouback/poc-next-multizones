import Link from "next/link";
import { ExternalLink, Home, Package, Briefcase } from 'lucide-react';

export default function App2Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <span className="text-gray-700 flex items-center">
            <Home className="h-4 w-4 mr-1" />
            <span>Home (Projeto 2)</span>
          </span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Projeto 2 - <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">Página Principal</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
        </header>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sobre o Projeto 2</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Bem-vindo ao Projeto 2 da nossa demonstração NextMultizone. Este projeto ilustra como múltiplos aplicativos Next.js podem coexistir e interagir em um único domínio.
                </p>
                <p className="text-gray-600 mb-4">
                  No Projeto 2, você encontrará:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                  <li>Uma página de produtos com itens mockados para demonstração</li>
                  <li>Uma página de serviços oferecidos, também com dados de exemplo</li>
                  <li>Navegação fluida entre os diferentes projetos da aplicação NextMultizone</li>
                </ul>
                <p className="text-gray-600">
                  Explore as diferentes seções e observe como a transição entre projetos é seamless, proporcionando uma experiência de usuário unificada.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium mb-4 text-gray-800">Navegação</h3>
              <div className="space-y-3">
                <Link 
                  href="/products" 
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-50 text-gray-700 transition-colors"
                >
                  <Package className="h-4 w-4 text-green-600" />
                  <span>Produtos</span>
                </Link>
                <Link 
                  href="/services" 
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-50 text-gray-700 transition-colors"
                >
                  <Briefcase className="h-4 w-4 text-green-600" />
                  <span>Serviços</span>
                </Link>
                <a href="/" className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  <span>Ir para Projeto 1</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>NextMultizone POC - Projeto 2 | Demonstração de navegação entre projetos</p>
        </footer>
      </div>
    </main>
  );
}
