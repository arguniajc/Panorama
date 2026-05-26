# 🏘️ Barrio Panorama — Portal Institucional JAC

> **"Comunidad que crece unida"**  
> Portal web institucional de la Junta de Acción Comunal del Barrio Panorama, Yumbo, Valle del Cauca, Colombia.

[![Deploy to GitHub Pages](https://github.com/arguniajc/Panorama/actions/workflows/deploy.yml/badge.svg)](https://github.com/arguniajc/Panorama/actions/workflows/deploy.yml)

🌐 **Demo en vivo:** https://arguniajc.github.io/Panorama/

---

## 🏗️ Arquitectura

Este proyecto implementa **Clean Architecture** adaptada a React:

```
src/
├── core/               # Shared: hooks, utils, constants
│   ├── constants/      # Configuración global del sitio
│   ├── hooks/          # useSlider, useScrollAnimation, useCounter, useNavbar
│   └── utils/          # formatDate, formatCurrency, helpers
│
├── domain/             # Reglas de negocio
│   ├── models/         # News, Event, CommunityMember, Project, GalleryItem
│   └── interfaces/     # INewsRepository, IEventsRepository, etc.
│
├── data/               # Capa de datos
│   ├── mock/           # Mock data (JSON/TS) — sin backend
│   └── repositories/   # Implementaciones de repositorios
│
├── presentation/       # UI Layer
│   ├── components/     # Navbar, Footer, Button, NewsCard, EventCard, MemberCard
│   ├── sections/       # HeroSection, AboutSection, NewsSection, etc.
│   └── pages/          # HomePage
│
├── App.tsx
└── main.tsx
```

---

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|---|---|---|
| React | 19 | UI Framework |
| TypeScript | 6 | Tipado estático |
| Vite | 8 | Build tool |
| Tailwind CSS | 3 | Estilos utilitarios |
| Lucide React | latest | Iconografía |

---

## 🚀 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/arguniajc/Panorama.git
cd Panorama

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173/Panorama/`

---

## 📦 Build y Despliegue

```bash
# Build de producción
npm run build

# Preview del build
npm run preview
```

El despliegue a **GitHub Pages** es **automático** via GitHub Actions al hacer push a `main`.

### Configurar GitHub Pages:
1. Ir a **Settings → Pages** en el repositorio
2. Source: **GitHub Actions**
3. El workflow en `.github/workflows/deploy.yml` se encarga del resto

---

## 📋 Secciones del sitio

| Sección | Descripción |
|---|---|
| 🎬 Hero Slider | Slider automático con 5 slides, botones CTA |
| 🏘️ Nosotros | Historia, cultura y estadísticas del barrio |
| 📰 Noticias | Cards filtrables por categoría con alertas |
| 🗓️ Eventos | Próximos eventos con sistema de inscripción vía WhatsApp |
| 🔨 Proyectos | Estado de proyectos con barras de progreso |
| 👥 Comunidad | Dignatarios JAC y líderes comunitarios |
| 📸 Galería | Grid interactivo con lightbox y comparador antes/después |
| 📍 Mapa | Google Maps embed de la ubicación |
| 📬 Contacto | Formulario con envío directo por WhatsApp |

---

## 🎨 Diseño

- **Colores:** Azul institucional (#1B4F8A), Verde comunidad (#2D8653), Dorado (#F2A900)
- **Tipografía:** Poppins (títulos) + Inter (cuerpo)
- **Mobile-first** responsive design
- **Animaciones** suaves con IntersectionObserver
- Botón flotante **WhatsApp**

---

## 📄 Licencia

JAC Barrio Panorama © 2026 — Yumbo, Valle del Cauca, Colombia
