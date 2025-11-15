# Cecinas La Osorno - E-commerce Website

Sitio web de e-commerce para Cecinas La Osorno, especialistas en cecinas artesanales de calidad premium.

## 🚀 Características

- **Catálogo de Productos**: Visualización de productos con imágenes, precios y stock
- **Carrito de Compras**: Sistema completo de carrito con gestión de items
- **Panel de Administración**: Interfaz para gestionar productos e inventario
- **Backend con Supabase**: Base de datos, autenticación y almacenamiento
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Estilo Apple**: Diseño minimalista y elegante

## 🛠️ Tecnologías

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Shadcn/ui** - Componentes UI
- **Supabase** - Backend as a Service
- **Lucide React** - Iconos

## 📦 Instalación

1. Clonar el repositorio:
```bash
git clone <tu-repositorio-url>
cd cecinas-la-osorno-main
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env.local
```

Editar `.env.local` con tus credenciales de Supabase:
```
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon_de_supabase
```

4. Ejecutar en desarrollo:
```bash
pnpm run dev
```

5. Construir para producción:
```bash
pnpm run build
```

## 🗄️ Base de Datos

El proyecto utiliza Supabase con las siguientes tablas:

- `app_fd25b764ee_products` - Productos
- `app_fd25b764ee_carts` - Carritos de compra
- `app_fd25b764ee_cart_items` - Items del carrito
- `app_fd25b764ee_orders` - Órdenes
- `app_fd25b764ee_order_items` - Items de órdenes

## 🚀 Despliegue

### AWS Amplify

El proyecto está configurado para desplegarse en AWS Amplify:

1. Conecta tu repositorio de GitHub a AWS Amplify
2. Las variables de entorno se configuran automáticamente desde `.env.local`
3. El archivo `amplify.yml` contiene la configuración de build

### Vercel (Alternativa)

También puedes desplegar en Vercel:

```bash
vercel deploy
```

## 📱 Páginas

- `/` - Página principal con productos
- `/tienda` - Catálogo completo de productos
- `/admin` - Panel de administración

## 🔐 Seguridad

- Row Level Security (RLS) habilitado en todas las tablas
- Variables de entorno para credenciales sensibles
- Validación de datos en frontend y backend

## 📄 Licencia

Todos los derechos reservados - Cecinas La Osorno

## 👥 Contacto

Para más información, visita [Cecinas La Osorno](https://cecinaslasosorno.cl)