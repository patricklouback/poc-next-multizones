import Link from "next/link"
import { Home, ArrowLeft, ShoppingCart } from "lucide-react"

const mockProducts = [
  { id: 1, name: "Smartphone X", price: 999.99, description: "Último modelo com câmera de alta resolução" },
  { id: 2, name: "Laptop Pro", price: 1299.99, description: "Poderoso laptop para profissionais" },
  { id: 3, name: "Smartwatch Y", price: 199.99, description: "Monitore sua saúde e receba notificações" },
  { id: 4, name: "Fones de Ouvido Z", price: 149.99, description: "Som de alta qualidade com cancelamento de ruído" },
  { id: 5, name: "Tablet Ultra", price: 499.99, description: "Perfeito para entretenimento e produtividade" },
  { id: 6, name: "Câmera 4K", price: 799.99, description: "Capture momentos com clareza impressionante" },
]

export default function Products() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-600">
            Produtos
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

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                  <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>NextMultizone POC - Projeto 2 | Página de Produtos</p>
        </footer>
      </div>
    </main>
  )
}

