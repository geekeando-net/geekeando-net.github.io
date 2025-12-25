---
title: "Sistema de Riego Automático IoT"
description: "Monitoreo de humedad en tiempo real con alertas vía WiFi y control de bomba sumergible."
category: "arduino"
difficulty: "Intermedio"
pubDate: 2025-12-23
image: "./cover.png"
tags: ["IoT", "Automatización", "Agricultura Urbana"]
author:
  name: "Pedro Carranza"
  avatar: "@authors/default-avatar.png"
  role: "Maker & Developer"
verified: true
materials:
  - { name: "Arduino Uno R3", quantity: 1, link: "#" }
  - { name: "Sensor Humedad Capacitivo", quantity: 1, link: "#" }
  - { name: "Relé 5V", quantity: 1, link: "#" }
codeRepo: "https://github.com/geekeando/riego-iot"
stlLink: "https://printables.com/"
downloadFiles:
  - name: "PLANOS_CORTA_LASER"
    file: "./downloads/planos.pdf"
  - name: "PIEZAS_3D_COMPLETO"
    file: "./downloads/arm_all_parts.zip"
    type: "ZIP"
gallery:
  - "./gallery/riego-1.png"
  - "./gallery/riego-2.png"
  - "./gallery/riego-3.png"
steps:
  - number: 1
    title: "Preparación de Componentes"
    content: "Reunir todos los materiales y verificar su funcionamiento. Es recomendable probar cada sensor por separado antes del ensamblaje final."
    image: "./irrigation-1.png"
  - number: 2
    title: "Conexión del circuito"
    content: "Conectar los sensores al Arduino según el diagrama proporcionado. Usar resistencias de 10kΩ para los sensores de humedad."
    code: "
    // Ejemplo de lectura del sensor
    const int sensorPin = A0;
    int moistureLevel = 0;

    void setup() {
    Serial.begin(9600);
    }

    void loop() {

    moistureLevel = analogRead(sensorPin);

    Serial.print("Humedad: ");

    Serial.println(moistureLevel);

    delay(1000);

    }"
  - number: 3
    title: "Programación básica"
    content: "Cargar el firmware inicial para verificar las lecturas de los sensores. Ajustar los valores umbral según el tipo de planta."
    code: "void setup() { Serial.begin(9600); }"
tips:
  - type: "warning"
    message: "No alimentes el sensor de humedad directamente con 5V por mucho tiempo o se corroerá por electrólisis."
  - type: "tip"
    message: "Si imprimes el chasis en 3D, usa una altura de capa de 0.2mm para mayor resistencia estructural."
---

## El Corazón del Proyecto
Este sistema utiliza el cerebro de **BitsaBots** (lógica de control) para procesar datos de humedad. Si la tierra está seca, el microcontrolador activa el relé para hidratar tus plantas.
