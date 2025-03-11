import Link from "next/link"
import { ArrowRight, ExternalLink, Home, Info, Mail } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Projeto 1
            </span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Demonstração de funcionamento do NextMultizone com navegação entre projetos
          </p>
        </header>

        {/* Navegação interna */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Home className="h-5 w-5 text-purple-600 mr-2" />
                <h2 className="text-xl font-semibold text-slate-800">Navegação Interna</h2>
              </div>
              <p className="text-slate-600 mb-6">Links para páginas dentro do Projeto 1</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <Info className="h-4 w-4" />
                  <span>Sobre</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Contato</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Link para o Projeto 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-t-4 border-emerald-500">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <ExternalLink className="h-5 w-5 text-emerald-600 mr-2" />
                <h2 className="text-xl font-semibold text-slate-800">Projeto 2</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Navegue para o segundo projeto da aplicação multizone
              </p>
              <a
                href="/app2"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors w-full sm:w-auto"
              >
                <span>Acessar Projeto 2</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>NextMultizone POC - Demonstração de navegação entre projetos</p>
        </footer>
      </div>
    </main>
  )
}

