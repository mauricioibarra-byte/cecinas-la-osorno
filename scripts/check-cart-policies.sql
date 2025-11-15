-- Script de diagnóstico para verificar políticas RLS del carrito
-- Este script verifica y muestra las políticas actuales de las tablas del carrito

-- Verificar políticas de la tabla de carritos
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename IN (
    'app_fd25b764ee_carts',
    'app_fd25b764ee_cart_items'
)
ORDER BY tablename, policyname;

-- Verificar si RLS está habilitado
SELECT 
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables
WHERE tablename IN (
    'app_fd25b764ee_carts',
    'app_fd25b764ee_cart_items'
);