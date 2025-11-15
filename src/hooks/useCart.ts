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

        console.log('Initializing cart with session_id:', sessionId)

        // Buscar carrito existente
        const { data: existingCart, error: fetchError } = await supabase
          .from('app_fd25b764ee_carts')
          .select('*')
          .eq('session_id', sessionId)
          .maybeSingle()

        if (fetchError) {
          console.error('Error fetching cart:', fetchError)
        }

        if (existingCart) {
          console.log('Found existing cart:', existingCart.id)
          setCart(existingCart)
          await loadCartItems(existingCart.id)
        } else {
          // Crear nuevo carrito
          console.log('Creating new cart...')
          const { data: newCart, error } = await supabase
            .from('app_fd25b764ee_carts')
            .insert({ session_id: sessionId })
            .select()
            .single()

          if (error) {
            console.error('Error creating cart:', error)
            throw error
          }
          console.log('New cart created:', newCart.id)
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
      console.log('Loading cart items for cart:', cartId)
      const { data, error } = await supabase
        .from('app_fd25b764ee_cart_items')
        .select(`
          *,
          product:app_fd25b764ee_products(*)
        `)
        .eq('cart_id', cartId)

      if (error) {
        console.error('Error loading cart items:', error)
        throw error
      }
      console.log('Loaded cart items:', data?.length || 0)
      setCartItems(data || [])
    } catch (error) {
      console.error('Error loading cart items:', error)
    }
  }

  // Agregar producto al carrito
  const addToCart = async (product: Product, quantity: number = 1) => {
    if (!cart) {
      console.error('No cart available')
      return
    }

    try {
      console.log('Adding product to cart:', product.id, 'quantity:', quantity)
      
      // Verificar si el producto ya está en el carrito
      const existingItem = cartItems.find(item => item.product_id === product.id)

      if (existingItem) {
        console.log('Updating existing item:', existingItem.id)
        // Actualizar cantidad
        const { error } = await supabase
          .from('app_fd25b764ee_cart_items')
          .update({ quantity: existingItem.quantity + quantity })
          .eq('id', existingItem.id)

        if (error) {
          console.error('Error updating cart item:', error)
          throw error
        }
        console.log('Item updated successfully')
      } else {
        console.log('Inserting new item')
        // Agregar nuevo item
        const { error } = await supabase
          .from('app_fd25b764ee_cart_items')
          .insert({
            cart_id: cart.id,
            product_id: product.id,
            quantity
          })

        if (error) {
          console.error('Error inserting cart item:', error)
          throw error
        }
        console.log('Item inserted successfully')
      }

      await loadCartItems(cart.id)
    } catch (error) {
      console.error('Error adding to cart:', error)
      alert('Error al agregar producto al carrito. Por favor, intenta de nuevo.')
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

      console.log('Updating quantity for item:', itemId, 'to:', quantity)
      const { error } = await supabase
        .from('app_fd25b764ee_cart_items')
        .update({ quantity })
        .eq('id', itemId)

      if (error) {
        console.error('Error updating quantity:', error)
        throw error
      }
      await loadCartItems(cart.id)
    } catch (error) {
      console.error('Error updating quantity:', error)
    }
  }

  // Eliminar item del carrito
  const removeFromCart = async (itemId: string) => {
    if (!cart) return

    try {
      console.log('Removing item from cart:', itemId)
      const { error } = await supabase
        .from('app_fd25b764ee_cart_items')
        .delete()
        .eq('id', itemId)

      if (error) {
        console.error('Error removing item:', error)
        throw error
      }
      await loadCartItems(cart.id)
    } catch (error) {
      console.error('Error removing from cart:', error)
    }
  }

  // Limpiar carrito
  const clearCart = async () => {
    if (!cart) return

    try {
      console.log('Clearing cart:', cart.id)
      const { error } = await supabase
        .from('app_fd25b764ee_cart_items')
        .delete()
        .eq('cart_id', cart.id)

      if (error) {
        console.error('Error clearing cart:', error)
        throw error
      }
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