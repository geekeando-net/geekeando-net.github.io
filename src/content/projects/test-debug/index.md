---
title: "Debug del Sistema BitsaBots"
description: "Proyecto de prueba para validar componentes de terminal y galería."
category: "arduino"
difficulty: "Avanzado"
pubDate: 2025-12-23
image: "./cover.png"
tags: ["Debug", "Astro", "Tailwind"]
verified: true
author:
  name: "Pedro Carranza"
  role: "Lead Engineer"
  avatar: "@authors/default-avatar.png"
stlLink: "./chasis-test.stl"
codeRepo: "https://github.com/bitsabots/test"
materials:
  - name: "Sensor Capacitivo"
    quantity: 1
    link: "https://tienda.com"
steps:
  - number: 1
    title: "Iniciando Protocolo"
    content: "Verifica que el led parpadee en color ámbar."
    image: "./arduino-irrigation.png"
    code: "void setup() { pinMode(13, OUTPUT); }"
tips:
  - type: "warning"
    message: "No desconectes el cable USB durante la subida del firmware."
  - type: "tip"
    message: "Usa cables blindados para evitar interferencias electromagnéticas."
---

Este es el cuerpo del proyecto donde probamos las letras blancas sobre fondo oscuro.