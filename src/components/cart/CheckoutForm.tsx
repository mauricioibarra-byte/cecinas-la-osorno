'use client'

import { useState } from 'react'
import { useCart } from '@/hooks/useCart'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft } from 'lucide-react'

interface CheckoutFormProps {
  onBack: () => void
}

export function CheckoutForm({ onBack }: CheckoutFormProps) {
  const { cart, cartItems, getTotal, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    shipping_address: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!cart) return

    setLoading(true)

    try {
      const total = getTotal()
      const sessionId = localStorage.getItem('cart_session_id')

      // Crear orden
      const { data: order, error: orderError } = await supabase
        .from('app_fd25b764ee_orders')
        .insert({
          session_id: sessionId,
          total,
          status: 'pending',
          ...formData
        })
        .select()
        .single()

      if (orderError) throw orderError

      // Crear items de la orden
      const orderItems = cartItems.map(item => ({
        order_id: order.id,
        product_id: item.product_id,
        product_name: item.product?.name || '',
        quantity: item.quantity,
        price: item.product?.price || 0
      }))

      const { error: itemsError } = await supabase
        .from('app_fd25b764ee_order_items')
        .insert(orderItems)

      if (itemsError) throw itemsError

      // Actualizar stock de productos
      for (const item of cartItems) {
        if (item.product) {
          const { error: stockError } = await supabase
            .from('app_fd25b764ee_products')
            .update({ stock: item.product.stock - item.quantity })
            .eq('id', item.product_id)

          if (stockError) throw stockError
        }
      }

      // Limpiar carrito
      await clearCart()
      setSuccess(true)
    } catch (error) {
      console.error('Error creating order:', error)
      alert('Hubo un error al procesar tu orden. Por favor intenta nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="py-8 text-center space-y-4">
        <div className="text-6xl">✅</div>
        <h3 className="text-2xl font-bold">¡Orden Recibida!</h3>
        <p className="text-muted-foreground">
          Gracias por tu compra. Te contactaremos pronto para coordinar la entrega.
        </p>
        <Button onClick={onBack}>Volver</Button>
      </div>
    )
  }

  return (
    <div className="py-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Volver al carrito
      </Button>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="customer_name">Nombre Completo *</Label>
          <Input
            id="customer_name"
            required
            value={formData.customer_name}
            onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="customer_email">Email *</Label>
          <Input
            id="customer_email"
            type="email"
            required
            value={formData.customer_email}
            onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="customer_phone">Teléfono</Label>
          <Input
            id="customer_phone"
            type="tel"
            value={formData.customer_phone}
            onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="shipping_address">Dirección de Entrega</Label>
          <Textarea
            id="shipping_address"
            rows={3}
            value={formData.shipping_address}
            onChange={(e) => setFormData({ ...formData, shipping_address: e.target.value })}
          />
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total a Pagar:</span>
            <span>${getTotal().toLocaleString('es-CL')}</span>
          </div>
          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? 'Procesando...' : 'Confirmar Orden'}
          </Button>
        </div>
      </form>
    </div>
  )
}