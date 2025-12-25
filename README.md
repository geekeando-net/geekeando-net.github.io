# geekeando
![Vercel Deploy](https://deploy-badge.vercel.app/vercel/geekeando)

web creada en astro

## Estructura de los archivos del proyecto
estructura recommendada para crear un proyecto en geekeando  el cual se sube a la carpeta src/content/projects ara mantener un orden se crea ela carpeta con el nombre de l proyecto y dentro va la galeria las deelproyecto tiene ua imagen por defeccto de cover que debe ir como cover.png el archivo md debe ser index.Para 
elcaso del avatar del autor si se desea  la foto debe ir en /src/assets/images/authors en caso de no tener una se puede usar default-avatar.png para poder llamar ya sea el default o la personalizada debe llamarse como @authors/nombre-de-avatar.[png/jpg/*]
```
src/content/projects/brazo-robotico/
├── index.md
├── cover.png
├── [image].png            <-- imagenes varias descritas en los pasos
└── downloads/             <-- Carpeta de recursos
├   ├── planos.pdf
├   └── arm_all_parts.zip
└── gallery/               <-- Carpeta de galeria
```

## esquema del index.md
el fronttmater del index.md completo debajo  dodne deberia ir el contenido se lo esta obviando parapdoer tener un contorlpersonalizado del armado de la pagina del proyecto
```
---
title: "Brazo Robotico"
description: "Diseño de brazo robotico para pruebas  y enseñanza de articulaciones."
category: "arduino"
difficulty: "Intermedio"
pubDate: 2025-12-23
image: "./cover.png"
tags: ["Arduino", "Automatización", "Mecanica"]
author:
  name: "Pedro Carranza"
  avatar: "@authors/default-avatar.png"
  role: "Maker & Developer"
verified: true
materials:
  - { name: "Arduino Uno R3", quantity: 1, link: "#" }
  - { name: "Servomotor", quantity: 3, link: "#" }
  - { name: "ProtoBoard", quantity: 1, link: "#" }
  - { name: "Soporte Impreso", quantity: 1, link: "#"}
codeRepo: "https://github.com/geekeando-net/brazo-robotico"
stlLink: "https://printables.com/geekeando/brazo-robotico"
downloadFiles:
  - name: "DISEÑO_COMPLETO"
    file: "./downloads/brazo-robotico.zip"
    type: "ZIP "
  - name: "INDICACIONES_COMPLETAS"
    file: "./downloads/indicaciones.pdf"
    type: "PDF"
gallery:
  - "./gallery/brazo-1.png"
  - "./gallery/brazo-2.png"
  - "./gallery/brazo-3.png"
steps:
  - number: 1
    title: "Preparación de Componentes"
    content: "Reunir todos los materiales y verificar su funcionamiento. Es recomendable probar cada motor por separado antes del ensamblaje final."
    image: "./pruebas-funcionamiento-1.png"
  - number: 2
    title: "Conexión del circuito"
    content: "Conectar los motores al Arduino según el diagrama proporcionado. "
    image: "./conexiones-1.png"
  - number: 3
    title: "Programación básica"
    content: "Cargar el firmware inicial para verificar las lecturas de los sensores. Ajustar los valores umbral según el tipo de planta."
    code: "void setup() { Serial.begin(9600); }"
tips:
  - type: "warning"
    message: "No alimentes los motores con mas de 9v por mucho tiempo o se corroerá por electrólisis."
  - type: "tip"
    message: "Si imprimes el chasis en 3D, usa una altura de capa de 0.2mm para mayor resistencia estructural."
---

```
