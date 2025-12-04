'use client'

import { Product } from '@/lib/supabase'
import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [adding, setAdding] = useState(false)

  const handleAddToCart = async () => {
    setAdding(true)
    await addToCart(product, 1)
    setAdding(false)
  }

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-100">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Sin imagen
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        {product.description && (
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        {/* Price and Add to Cart - Hidden
        <div className="hidden">
          <span className="text-2xl font-bold text-red-600">
            ${product.price.toLocaleString('es-CL')}
          </span>
          <Button
            onClick={handleAddToCart}
            disabled={adding || product.stock <= 0}
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.stock <= 0 ? 'Agotado' : 'Agregar'}
          </Button>
        </div>
        */}
        {/* Temporarily hidden: stock warning */}
        <div className="hidden">
          {product.stock > 0 && product.stock < 10 && (
            <p className="text-xs text-orange-600 mt-2">
              ¡Solo quedan {product.stock} unidades!
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
