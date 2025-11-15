import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vlmavdxronhiyangmjan.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsbWF2ZHhyb25oaXlhbmdtamFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMDIyMTAsImV4cCI6MjA3ODc3ODIxMH0.ZVxiOh-UivR8SMCrKyhJUtCz7EzkVRD87ZqzWyFSfOw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Product {
  id: string
  name: string
  description: string | null
  price: number
  image_url: string | null
  category: string | null
  stock: number
  created_at: string
  updated_at: string
}

export interface CartItem {
  id: string
  cart_id: string
  product_id: string
  quantity: number
  product?: Product
}

export interface Cart {
  id: string
  user_id: string | null
  session_id: string | null
  created_at: string
  updated_at: string
  cart_items?: CartItem[]
}

export interface Order {
  id: string
  user_id: string | null
  session_id: string | null
  total: number
  status: string
  customer_name: string
  customer_email: string
  customer_phone: string | null
  shipping_address: string | null
  created_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  product_name: string
  quantity: number
  price: number
}