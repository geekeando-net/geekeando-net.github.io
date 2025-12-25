📘 README: Estándar de Proyectos Geekeando
Para mantener la consistencia en el "Laboratorio", cada proyecto debe seguir esta estructura de Page Bundle. Esto permite que las imágenes y archivos sean autogestionados por Astro.

1. Estructura de Carpetas
Crea una carpeta por proyecto en `src/content/projects/`:

```Plaintext
src/content/projects/nombre-del-proyecto/
├── index.md               <-- Contenido y configuración (Frontmatter)
├── cover.png              <-- Imagen principal (obligatoria)
├── [step-image].png       <-- Imágenes para los pasos
├── downloads/             <-- Recursos descargables
│   ├── esquema.pdf
│   └── diseño.stl
└── gallery/               <-- Imágenes adicionales
    ├── foto-01.jpg
    └── foto-02.jpg
```
2. Gestión de Avatares
Las fotos de los autores deben estar en `src/assets/images/authors/`.

- Referencia: En el MD usa `@authors/nombre-archivo.jpg`.
- Default: Si no hay foto, usa `@authors/default-avatar.png.`
---
🛠️ Plantilla Maestra: `index.md`
Copia y pega este bloque cada vez que inicies un nuevo proyecto. He limpiado los errores de espacios y optimizado los campos.

```markdown
---
title: "NOMBRE_DEL_PROYECTO"
description: "Breve descripción técnica del proyecto (máx. 160 caracteres)."
category: "arduino" # opciones: arduino, papercraft, 3d-print, music
difficulty: "Intermedio" # Principiante, Intermedio, Avanzado
pubDate: 2025-12-25
featured: true
image: "./cover.png"
tags: ["Tag1", "Tag2"]
author:
  name: "Tu Nombre"
  avatar: "@authors/default-avatar.png"
  role: "Maker"
verified: true
materials:
  - { name: "Componente 1", quantity: 1, link: "#" }
  - { name: "Componente 2", quantity: 2, link: "#" }
codeRepo: "https://github.com/geekeando-net/..."
stlLink: ""
downloadFiles:
  - name: "PLANOS_TECNICOS"
    file: "./downloads/archivo.pdf"
    type: "PDF"
  - name: "PIEZAS_3D"
    file: "./downloads/modelo.zip"
    type: "ZIP"
gallery:
  - "./gallery/imagen1.jpg"
  - "./gallery/imagen2.jpg"
steps:
  - number: 1
    title: "NOMBRE_DEL_PASO"
    content: "Explicación detallada de lo que se debe hacer en esta etapa."
    image: "./paso-1.png"
  - number: 2
    title: "PROGRAMACION_Y_CODIGO"
    content: "Breve descripción del software."
    code: |
      void setup() {
        // Tu código aquí
      }
tips:
  - type: "warning"
    message: "Mensaje de advertencia técnica."
  - type: "tip"
    message: "Consejo para mejorar el acabado o funcionamiento."
---

Escribe aquí la introducción detallada del proyecto. Este contenido se renderizará 
debajo de la galería y antes de los pasos de construcción. Puedes usar **Markdown** estándar para dar formato.
```
---
🚀 Script de Automatización (Opcional)
Si usas VS Code, puedes crear un User Snippet para que al escribir `geekproject` se genere todo el código anterior automáticamente.

Ve a `File > Preferences > Configure User Snippets`.

Busca `markdown`.

Pega esto dentro de las llaves:

```json
"Geekeando Project Template": {
	"prefix": "geekproject",
	"body": [
		"---",
		"title: \"${1:Titulo del Proyecto}\"",
		"description: \"${2:Descripcion corta}\"",
		"category: \"${3|arduino,papercraft,3d-print,music|}\"",
		"difficulty: \"${4|Principiante,Intermedio,Avanzado|}\"",
		"pubDate: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}",
		"featured: false",
		"image: \"./cover.png\"",
		"tags: [\"${5:Tag1}\"]",
		"author:",
		"  name: \"Pedro Carranza\"",
		"  avatar: \"@authors/default-avatar.png\"",
		"  role: \"Maker & Developer\"",
		"verified: true",
		"materials:",
		"  - { name: \"${6:Material}\", quantity: 1, link: \"#\" }",
		"downloadFiles:",
		"  - name: \"DOCUMENTACION\"",
		"    file: \"./downloads/file.pdf\"",
		"    type: \"PDF\"",
		"gallery: []",
		"steps:",
		"  - number: 1",
		"    title: \"Iniciando el ensamble\"",
		"    content: \"Paso 1...\"",
		"    image: \"./step1.png\"",
		"tips:",
		"  - type: \"tip\"",
		"    message: \"Usa herramientas adecuadas.\"",
		"---",
		"",
		"${0:Escribe la intro aquí...}"
	],
	"description": "Crea el frontmatter estándar para Geekeando"
}
```
