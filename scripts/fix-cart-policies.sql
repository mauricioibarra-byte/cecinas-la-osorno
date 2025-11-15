-- Script para corregir las políticas RLS del carrito
-- Permite operaciones anónimas en las tablas del carrito

BEGIN;

-- Eliminar políticas existentes si existen
DROP POLICY IF EXISTS "allow_anonymous_cart_insert" ON app_fd25b764ee_carts;
DROP POLICY IF EXISTS "allow_anonymous_cart_select" ON app_fd25b764ee_carts;
DROP POLICY IF EXISTS "allow_anonymous_cart_update" ON app_fd25b764ee_carts;
DROP POLICY IF EXISTS "allow_anonymous_cart_items_insert" ON app_fd25b764ee_cart_items;
DROP POLICY IF EXISTS "allow_anonymous_cart_items_select" ON app_fd25b764ee_cart_items;
DROP POLICY IF EXISTS "allow_anonymous_cart_items_update" ON app_fd25b764ee_cart_items;
DROP POLICY IF EXISTS "allow_anonymous_cart_items_delete" ON app_fd25b764ee_cart_items;

-- Políticas para la tabla de carritos
CREATE POLICY "allow_anonymous_cart_insert" ON app_fd25b764ee_carts
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "allow_anonymous_cart_select" ON app_fd25b764ee_carts
    FOR SELECT TO anon
    USING (true);

CREATE POLICY "allow_anonymous_cart_update" ON app_fd25b764ee_carts
    FOR UPDATE TO anon
    USING (true)
    WITH CHECK (true);

-- Políticas para la tabla de items del carrito
CREATE POLICY "allow_anonymous_cart_items_insert" ON app_fd25b764ee_cart_items
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "allow_anonymous_cart_items_select" ON app_fd25b764ee_cart_items
    FOR SELECT TO anon
    USING (true);

CREATE POLICY "allow_anonymous_cart_items_update" ON app_fd25b764ee_cart_items
    FOR UPDATE TO anon
    USING (true)
    WITH CHECK (true);

CREATE POLICY "allow_anonymous_cart_items_delete" ON app_fd25b764ee_cart_items
    FOR DELETE TO anon
    USING (true);

COMMIT;

-- Verificar que las políticas se crearon correctamente
SELECT 
    tablename,
    policyname,
    cmd
FROM pg_policies
WHERE tablename IN (
    'app_fd25b764ee_carts',
    'app_fd25b764ee_cart_items'
)
ORDER BY tablename, policyname;