"use client";

import { useEffect, useState } from 'react';
import { supabase, Product } from '@/lib/supabase';
import { useCart } from '@/hooks/useCart';
import { ShoppingCart, Check, AlertCircle } from 'lucide-react';

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set());
  const { addToCart } = useCart();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('app_fd25b764ee_products')
        .select('*')
        .order('name');

      if (fetchError) {
        console.error('Error loading products:', fetchError);
        setError('Error al cargar los productos. Por favor, recarga la página.');
        return;
      }

      if (!data || data.length === 0) {
        setError('No hay productos disponibles en este momento.');
        return;
      }

      setProducts(data);
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Error inesperado al cargar los productos.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (product: Product) => {
    try {
      await addToCart(product, 1);
      setAddedProducts(prev => new Set(prev).add(product.id));

      // Remover el check después de 2 segundos
      setTimeout(() => {
        setAddedProducts(prev => {
          const newSet = new Set(prev);
          newSet.delete(product.id);
          return newSet;
        });
      }, 2000);
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Error al agregar al carrito. Por favor, intenta de nuevo.');
    }
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header - Estilo Apple */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            Nuestros Productos
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            Cada pieza elaborada con dedicación y tradición
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
            <p className="mt-4 text-xl text-black/60">Cargando productos...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <p className="text-xl text-black/80 mb-4">{error}</p>
            <button
              onClick={loadProducts}
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-all"
            >
              Reintentar
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && products.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group block"
                >
                  {/* Card minimalista */}
                  <div className="bg-neutral-50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                    {/* Imagen */}
                    <div className="relative h-80 overflow-hidden bg-neutral-100">
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-neutral-400">Sin imagen</div>';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                          Sin imagen
                        </div>
                      )}

                      {/* Badge de stock bajo */}
                      {product.stock > 0 && product.stock < 10 && (
                        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          ¡Solo {product.stock}!
                        </div>
                      )}

                      {/* Badge de agotado */}
                      {product.stock <= 0 && (
                        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Agotado
                        </div>
                      )}
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-black mb-2">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="text-base text-black/60 mb-4">
                          {product.description}
                        </p>
                      )}

                      {/* Price and Add to Cart - Hidden
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-3xl font-bold text-red-600">
                          ${product.price.toLocaleString('es-CL')}
                        </span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          disabled={product.stock <= 0}
                          className={`
                            inline-flex items-center justify-center px-6 py-3 rounded-full
                            font-medium transition-all duration-200
                            ${product.stock <= 0
                              ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                              : addedProducts.has(product.id)
                              ? 'bg-green-600 text-white'
                              : 'bg-black text-white hover:bg-black/90'
                            }
                          `}
                        >
                          {addedProducts.has(product.id) ? (
                            <>
                              <Check className="h-5 w-5 mr-2" />
                              Agregado
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="h-5 w-5 mr-2" />
                              Agregar
                            </>
                          )}
                        </button>
                      </div>
                      */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Final */}
            <div className="mt-20 text-center">
              <a
                href="#visitanos"
                className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-all text-base font-medium"
              >
                Visítanos en Nuestra Tienda
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}