'use client'

import { useEffect, useState, useCallback } from 'react'
import { supabase, Product } from '@/lib/supabase'
import { ProductCard } from '@/components/products/ProductCard'
import { CartButton } from '@/components/cart/CartButton'

export default function TiendaPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const loadProducts = useCallback(async () => {
    try {
      let query = supabase
        .from('app_fd25b764ee_products')
        .select('*')
        .order('name')

      if (selectedCategory) {
        query = query.eq('category', selectedCategory)
      }

      const { data, error } = await query

      if (error) throw error
      setProducts(data || [])
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      setLoading(false)
    }
  }, [selectedCategory])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  const categories = ['embutidos', 'curados']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-600">Cecinas La Osorno</h1>
          <CartButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Nuestra Tienda</h2>
          <p className="text-muted-foreground mb-6">
            Productos artesanales de la más alta calidad
          </p>

          {/* Category Filter */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === null
                  ? 'bg-red-600 text-white'
                  : 'bg-white border hover:bg-gray-50'
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full capitalize ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-white border hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">Cargando productos...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No hay productos disponibles
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}