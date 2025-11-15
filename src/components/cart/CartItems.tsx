'use client'

import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/button'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { CheckoutForm } from './CheckoutForm'

export function CartItems() {
  const { cartItems, loading, updateQuantity, removeFromCart, getTotal, clearCart } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  if (loading) {
    return <div className="py-8 text-center">Cargando carrito...</div>
  }

  if (cartItems.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">Tu carrito está vacío</p>
      </div>
    )
  }

  if (showCheckout) {
    return <CheckoutForm onBack={() => setShowCheckout(false)} />
  }

  const total = getTotal()

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto py-4">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <div className="relative w-20 h-20 rounded-md overflow-hidden bg-gray-100">
                {item.product?.image_url ? (
                  <Image
                    src={item.product.image_url}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Sin imagen
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{item.product?.name}</h4>
                <p className="text-sm text-muted-foreground">
                  ${item.product?.price.toLocaleString('es-CL')}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 ml-auto"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-4 space-y-4">
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>${total.toLocaleString('es-CL')}</span>
        </div>
        <Button 
          className="w-full" 
          size="lg"
          onClick={() => setShowCheckout(true)}
        >
          Finalizar Compra
        </Button>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={clearCart}
        >
          Vaciar Carrito
        </Button>
      </div>
    </div>
  )
}