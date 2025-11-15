'use client'

import { useState, useEffect } from 'react'
import { supabase, Product, Cart, CartItem } from '@/lib/supabase'

export function useCart() {
  const [cart, setCart] = useState<Cart | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)

  // Obtener o crear carrito
  useEffect(() => {
    const initCart = async () => {
      try {
        // Obtener session_id del localStorage
        let sessionId = localStorage.getItem('cart_session_id')
        
        if (!sessionId) {
          sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
          localStorage.setItem('cart_session_id', sessionId)
        }

        // Buscar carrito existente
        const { data: existingCart } = await supabase
          .from('app_fd25b764ee_carts')
          .select('*')
          .eq('session_id', sessionId)
          .single()

        if (existingCart) {
          setCart(existingCart)
          await loadCartItems(existingCart.id)
        } else {
          // Crear nuevo carrito
          const { data: newCart, error } = await supabase
            .from('app_fd25b764ee_carts')
            .insert({ session_id: sessionId })
            .select()
            .single()

          if (error) throw error
          setCart(newCart)
        }
      } catch (error) {
        console.error('Error initializing cart:', error)
      } finally {
        setLoading(false)
      }
    }

    initCart()
  }, [])

  // Cargar items del carrito
  const loadCartItems = async (cartId: string) => {
    try {
      const { data, error } = await supabase
        .from('app_fd25b764ee_cart_items')
        .select(`
          *,
          product:app_fd25b764ee_products(*)
        `)
        .eq('cart_id', cartId)

      if (error) throw error
      setCartItems(data || [])
    } catch (error) {
      console.error('Error loading cart items:', error)
    }
  }

  // Agregar producto al carrito
  const addToCart = async (product: Product, quantity: number = 1) => {
    if (!cart) return

    try {
      // Verificar si el producto ya está en el carrito
      const existingItem = cartItems.find(item => item.product_id === product.id)

      if (existingItem) {
        // Actualizar cantidad
        const { error } = await supabase
          .from('app_fd25b764ee_cart_items')
          .update({ quantity: existingItem.quantity + quantity })
          .eq('id', existingItem.id)

        if (error) throw error
      } else {
        // Agregar nuevo item
        const { error } = await supabase
          .from('app_fd25b764ee_cart_items')
          .insert({
            cart_id: cart.id,
            product_id: product.id,
            quantity
          })

        if (error) throw error
      }

      await loadCartItems(cart.id)
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  // Actualizar cantidad de un item
  const updateQuantity = async (itemId: string, quantity: number) => {
    if (!cart) return

    try {
      if (quantity <= 0) {
        await removeFromCart(itemId)
        return
      }

      const { error } = await supabase
        .from('app_fd25b764ee_cart_items')
        .update({ quantity })
        .eq('id', itemId)

      if (error) throw error
      await loadCartItems(cart.id)
    } catch (error) {
      console.error('Error updating quantity:', error)
    }
  }

  // Eliminar item del carrito
  const removeFromCart = async (itemId: string) => {
    if (!cart) return

    try {
      const { error } = await supabase
        .from('app_fd25b764ee_cart_items')
        .delete()
        .eq('id', itemId)

      if (error) throw error
      await loadCartItems(cart.id)
    } catch (error) {
      console.error('Error removing from cart:', error)
    }
  }

  // Limpiar carrito
  const clearCart = async () => {
    if (!cart) return

    try {
      const { error } = await supabase
        .from('app_fd25b764ee_cart_items')
        .delete()
        .eq('cart_id', cart.id)

      if (error) throw error
      setCartItems([])
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
  }

  // Calcular total
  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.product?.price || 0
      return total + (price * item.quantity)
    }, 0)
  }

  // Obtener cantidad total de items
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return {
    cart,
    cartItems,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotal,
    getTotalItems
  }
}