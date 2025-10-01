# ArtDei - Tallas Religiosas

Sitio web profesional para ArtDei, empresa especializada en tallas religiosas y carpintería sacra.

![ArtDei Logo](img/logo.png)

## 🎨 Descripción

ArtDei es una landing page moderna con toques religiosos que presenta los servicios de tallas religiosas de Alejandro Barra García. El sitio incluye un sistema completo de gestión de proyectos con panel de administración.

## ✨ Características

### Landing Page (index.html)
- **Hero Section** con video de fondo
- **Sección Nosotros** - Presentación de la empresa
- **Servicios** - 5 servicios principales:
  - Talla
  - Escultura
  - Carpintería Religiosa
  - Ornamentación en Madera
  - Digitalización 3D
- **Galería de Proyectos** - Con carrusel de imágenes
- **Clientes** - Carrusel automático de logos
- **Contacto** - Formulario de contacto
- **Footer** completo con navegación, contacto y redes sociales

### Panel de Administración (admin.html)
- ✅ Agregar proyectos con múltiples imágenes
- ✅ Editar proyectos existentes
- ✅ Eliminar proyectos
- ✅ Vista previa de imágenes
- ✅ Gestión completa de la galería

### Características Técnicas
- 📱 **Responsive Design** - Adaptado a móviles y tablets
- 🎠 **Carrusel de imágenes** - Para proyectos con múltiples fotos
- 💾 **LocalStorage** - Persistencia de datos en el navegador
- 🎨 **Diseño elegante** - Paleta burgundy y dorado
- ⚡ **Animaciones suaves** - Transiciones y efectos hover

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno
- Servidor HTTP local (Python, Node.js, etc.)

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/PabloMR4/ArtDei.git
cd ArtDei
```

2. Inicia un servidor local:
```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server -p 8000
```

3. Abre tu navegador en:
```
http://localhost:8000
```

## 📁 Estructura del Proyecto

```
ArtDei/
├── index.html          # Página principal
├── admin.html          # Panel de administración
├── styles.css          # Estilos CSS
├── script.js           # JavaScript principal
├── img/
│   ├── logo.png       # Logo de ArtDei
│   ├── hero.mp4       # Video del hero
│   └── Carrusel/      # Logos de clientes
│       ├── Cofradiasantamariamagdalena.png
│       └── Descendimiento.jpg
└── README.md          # Este archivo
```

## 🎯 Uso del Panel de Administración

### Acceso
Visita: `http://localhost:8000/admin.html`

### Agregar Proyecto
1. Completa el título y descripción
2. Selecciona una o varias imágenes (Ctrl+Click para múltiples)
3. Haz clic en "➕ Agregar Proyecto"
4. El proyecto aparece automáticamente en la landing page

### Editar Proyecto
1. En "Proyectos Guardados", haz clic en "✏️ Editar"
2. Modifica título, descripción
3. Elimina imágenes existentes con el botón ×
4. Agrega nuevas imágenes si lo deseas
5. Guarda los cambios

### Eliminar Proyecto
1. Haz clic en "🗑️ Eliminar"
2. Confirma la eliminación

## 🎨 Paleta de Colores

```css
--primary-gold: #C9A961      /* Dorado principal */
--dark-gold: #9B7C3F         /* Dorado oscuro */
--deep-burgundy: #5C1A1B     /* Burgundy profundo */
--soft-cream: #FAF7F0        /* Crema suave */
--stone-gray: #4A4A4A        /* Gris piedra */
```

## 📞 Información de Contacto

- **Email:** info@artdei.es
- **Teléfono:** 666 666 666
- **Facebook:** [ArtDei Facebook](https://www.facebook.com/profile.php?id=100064712074972)
- **Instagram:** [ArtDei Instagram](https://instagram.com)

## 🖼️ Clientes Destacados

- Cofradía Santa María Magdalena
- Hermandad del Sagrado Descendimiento de Nuestro Señor Jesuscristo

## 💻 Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS)
- JavaScript (ES6+)
- LocalStorage API
- Google Fonts (Cinzel, Montserrat, Tangerine)

## 📝 Tipografías

- **Títulos:** Cinzel (serif elegante)
- **Texto:** Montserrat (sans-serif moderna)
- **Firma:** Tangerine (cursiva caligráfica)

## 🔧 Funcionalidades JavaScript

- Menú móvil responsive
- Scroll suave
- Carrusel de imágenes automático
- Sistema de gestión de proyectos
- Validación de formularios
- Vista previa de imágenes
- Modal de edición

## 🌐 Despliegue

Para desplegar en producción, puedes usar:
- GitHub Pages
- Netlify
- Vercel
- Cualquier hosting estático

## 👨‍💻 Desarrollo

**Desarrollador:** Pablo Martínez Ruiz
**Cliente:** Alejandro Barra García - ArtDei
**Año:** 2025

## 📄 Licencia

© 2025 ArtDei. Todos los derechos reservados.

---

**Hecho con ❤️ por Pablo Martínez Ruiz**