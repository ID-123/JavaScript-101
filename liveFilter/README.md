# 🔍 Filtro dinámico con animación y reflow (JavaScript puro)

## 📌 Descripción
Este proyecto demuestra cómo implementar un sistema de búsqueda en tiempo real sobre un conjunto de tarjetas usando JavaScript puro.

Incluye:
- Filtrado tipo LIKE %
- Animaciones suaves (fade out)
- Reorganización automática del layout (CSS Grid)

---

## 🎯 Objetivos
- Manipulación del DOM
- Uso de eventos en tiempo real
- Animaciones CSS
- Control del renderizado del navegador

---

## 🧱 Estructura

/proyecto
│
├── index.html
├── styles.css
├── script.js
└── README.md

---

## ⚙️ Funcionamiento

### Entrada del usuario
Se usa el evento input para detectar cambios en tiempo real.

### Búsqueda flexible
Se utiliza includes() para simular:
LIKE '%texto%'

### Animación
Se aplica una clase .hidden:
- opacity: 0
- transform: scale(0.85)

### Eliminación del layout
Luego se aplica .removed con:
display: none

Esto permite que el grid se reorganice automáticamente.

---

## 🎨 Propiedades clave

CSS:
- opacity → visibilidad
- transform → escala
- transition → suavidad
- display → flujo del layout

JS:
- textContent → texto interno
- includes() → búsqueda parcial
- classList → control de estados
- transitionend → sincronización

---

## ⚠️ Errores comunes

- Usar solo display:none (sin animación)
- Usar solo opacity (sin reflow)
- No limpiar eventos
- No normalizar texto

---

## 🚀 Mejoras posibles

- Debounce
- Filtros múltiples
- Animaciones FLIP
- Mensaje "sin resultados"

---

## 🧠 Conclusión

Este proyecto combina:
- DOM
- Eventos
- CSS Animations
- Render Flow

Base sólida para interfaces modernas.

---

## 📦 Uso

1. Abrir index.html
2. Escribir en el buscador
3. Ver animación + reflow

---

## ✨ Autor
Proyecto educativo de frontend
