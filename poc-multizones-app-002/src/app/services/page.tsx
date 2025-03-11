import Link from "next/link"
import { Home, ArrowLeft, Calendar } from "lucide-react"

const mockServices = [
  { id: 1, name: "Consultoria de TI", price: 150, description: "Ajudamos a otimizar sua infraestrutura de TI" },
  { id: 2, name: "Desenvolvimento Web", price: 200, description: "Criamos sites modernos e responsivos" },
  { id: 3, name: "Marketing Digital", price: 100, description: "Estratégias para aumentar sua presença online" },
  { id: 4, name: "Suporte Técnico", price: 80, description: "Assistência técnica para seus dispositivos" },
  { id: 5, name: "Design Gráfico", price: 120, description: "Criação de logotipos e materiais visuais" },
  { id: 6, name: "Treinamento em Software", price: 90, description: "Aprenda a usar as ferramentas mais recentes" },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-600">
            Serviços
            <span className="block text-2xl md:text-3xl text-gray-600 mt-2">Projeto 2</span>
          </h1>
          <div className="h-1 w-20 bg-green-500 rounded-full"></div>
        </header>

        {/* Navigation */}
        <nav className="mb-12 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Voltar para Home (Projeto 2)</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Ir para Projeto 1</span>
          </Link>
        </nav>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">${service.price}/hora</span>
                  <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <Calendar className="h-5 w-5" />
                    <span>Agendar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>NextMultizone POC - Projeto 2 | Página de Serviços</p>
        </footer>
      </div>
    </main>
  )
}

