# 🚀 Instrucciones para Desplegar en Netlify

## Opción 1: Despliegue Directo (Drag & Drop) - MÁS FÁCIL

### Paso 1: Preparar el proyecto
1. **Descarga** toda la carpeta `cecinas-la-osorno` a tu computadora
2. Comprime la carpeta en un archivo ZIP

### Paso 2: Desplegar en Netlify
1. Ve a [https://app.netlify.com](https://app.netlify.com)
2. Inicia sesión en tu cuenta de Netlify
3. Haz clic en **"Add new site"** → **"Deploy manually"**
4. Arrastra la carpeta `cecinas-la-osorno` (o el ZIP) al área de despliegue
5. Espera 2-3 minutos mientras Netlify construye el sitio
6. ¡Listo! Tu sitio estará en línea

---

## Opción 2: Despliegue con Git (Recomendado para actualizaciones)

### Paso 1: Crear repositorio en GitHub
1. Ve a [https://github.com/new](https://github.com/new)
2. Crea un nuevo repositorio llamado `cecinas-la-osorno`
3. **NO** marques "Initialize with README"

### Paso 2: Subir el código
Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
cd cecinas-la-osorno
git init
git add .
git commit -m "Sitio web Cecinas La Osorno completo"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/cecinas-la-osorno.git
git push -u origin main
```

### Paso 3: Conectar con Netlify
1. Ve a [https://app.netlify.com](https://app.netlify.com)
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Selecciona **"Deploy with GitHub"**
4. Autoriza Netlify en GitHub (si es la primera vez)
5. Busca y selecciona el repositorio `cecinas-la-osorno`
6. Configura el despliegue:
   - **Build command:** `bun run build` (o `npm run build` si no tienes Bun)
   - **Publish directory:** `.next`
   - **Base directory:** (dejar vacío)
7. Haz clic en **"Deploy site"**
8. Espera 3-5 minutos

---

## ⚙️ Configuración del Sitio en Netlify

Una vez desplegado, puedes:

### 1. **Cambiar el nombre del dominio:**
   - Ve a **Site settings** → **Domain management**
   - Click en **"Change site name"**
   - Elige algo como: `cecinas-la-osorno.netlify.app`

### 2. **Conectar un dominio personalizado:**
   - Ve a **Domain management** → **Add domain**
   - Sigue las instrucciones para conectar tu dominio
   - Netlify configurará SSL automáticamente

### 3. **Variables de entorno (si las necesitas más adelante):**
   - Ve a **Site settings** → **Environment variables**

---

## 🔄 Actualizar el Sitio

### Si usaste Opción 1 (Drag & Drop):
- Arrastra la carpeta actualizada nuevamente

### Si usaste Opción 2 (GitHub):
```bash
git add .
git commit -m "Actualización del sitio"
git push
```
Netlify detectará los cambios y desplegará automáticamente.

---

## ✅ Checklist Post-Despliegue

- [ ] El sitio carga correctamente
- [ ] Todas las secciones funcionan (Hero, Historia, Productos, etc.)
- [ ] Las imágenes se muestran correctamente
- [ ] El formulario de contacto funciona
- [ ] El sitio es responsive en móvil
- [ ] Cambiar el nombre del dominio en Netlify
- [ ] (Opcional) Conectar dominio personalizado

---

## 🆘 Problemas Comunes

### "Build failed"
- Verifica que el comando de build sea: `bun run build` o `npm run build`
- Verifica que el directorio de publicación sea: `.next`

### "Images not loading"
- Las imágenes externas están configuradas en `netlify.toml`
- Netlify las optimizará automáticamente

### "Function errors"
- Next.js dinámico está soportado por el plugin @netlify/plugin-nextjs
- Ya está configurado en `netlify.toml`

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs de despliegue en Netlify
2. Verifica que todos los archivos se hayan subido correctamente
3. Contacta al desarrollador del sitio

---

**¡Tu sitio de Cecinas La Osorno estará en línea en minutos!** 🎉
