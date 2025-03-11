import Link from "next/link"
import { ArrowLeft, ExternalLink, Home, Mail, Send, Phone, MapPin } from "lucide-react"

export default function Contact() {
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
            <Mail className="h-4 w-4 mr-1" />
            <span>Contato</span>
          </span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Entre em{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Contato</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
        </header>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-slate-800">Envie uma mensagem</h2>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar mensagem</span>
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium mb-4 text-slate-800">Informações de contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">Email</p>
                    <p className="text-slate-600">contato@exemplo.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">Telefone</p>
                    <p className="text-slate-600">(11) 9999-9999</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">Endereço</p>
                    <p className="text-slate-600">Av. Exemplo, 123 - São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>

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
  )
}