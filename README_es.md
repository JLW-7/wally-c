<div align="center">

<img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/2a277aa7-7dd7-4a9b-9152-265a8987ebd1" />

# Wally (Versión C++)

![Language](https://img.shields.io/badge/Language-C%2B%2B-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Users](https://img.shields.io/badge/Users-14-orange?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/JLW-7/Wally?style=for-the-badge&label=Stars&color=yellow)

*Un compañero AI de voz bilingüe, construido con la plataforma de asistente inteligente XiaoZhi.*

[English](README.md) | [中文](README_cn.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [Français](README_fr.md) | [Español](README_es.md) | [Deutsch](README_de.md) | [हिन्दी](README_hi.md)

</div>


## Resumen

**Wally** es un asistente de voz divertido y confiable en forma de pingüino. Está diseñado principalmente para **recordatorios**, pero también puede ayudar en productividad, conversaciones diarias y apoyo emocional.

> [!NOTE]
> Pronto estará disponible para compra [aquí](https://github.com/JLW-7/wally-website).


## El Problema

**Siempre olvido cosas.** He notado que mucha gente a mi alrededor también lo hace. Es muy molesto. Como nadador competitivo, después de olvidar mi bebida de electrolitos o equipo de entrenamiento varias veces, decidí construir una herramienta que me recordara.

## La Solución

Wally tiene todas las funciones normales de un asistente AI, pero además es **intencionalmente atractivo visualmente**. Eso lo diferencia de otros asistentes de recordatorios. Creo que un dispositivo lindo y divertido deja mejor impresión y hace que sea más probable que lo uses y escuches sus recordatorios.

Después de cuatro meses, completé mi primer prototipo y se lo di a amigos en la escuela para probar. Todos lo amaron y me pidieron que lo hiciera público. Así que aquí está.


## Casos de uso comunes

Así es como mi familia y amigos usan Wally:

| Escenario | Uso |
|----------|-----|
| **Escuela** | Chequeo rápido de cosas antes del día escolar |
| **Entrenamiento** | Confirmar equipo antes/después de entrenar |
| **Viaje** | Revisión final de equipaje durante viajes |


## Características principales

* **Despertar por voz**: “Hi, Wally” o “Hi Wall-E” activa Wally

* **Chat de voz bilingüe**: Inglés y mandarín (el acento puede sonar raro)

* **Respuestas en streaming en tiempo real**: Respuestas instantáneas del backend LLM Qwen

* **Pantalla OLED**: Visualiza lo que se dijo y la respuesta

* **Pequeño y portátil**: Fácil de llevar

* **Adorable y divertido**: Diseño de pingüino, voz infantil y emojis


## Demo

### Diseño 3D
<img src="demo/wally-3d-design.png" alt="Wally 3D Design in Tinkercad" width="400" height="400">

### Estructura interna
<img src="demo/wall-internal-design-front.png" alt="Wally Internal Design Front" width="400" height="400"> <img src="demo/wally-internal-design-back.png" alt="Wally Internal Design Back" width="400" height="400">

### Escenarios reales
<img src="demo/wally-in-use.png" alt="Wally Conversing with User in English" width="400"> <img src="demo/wally-in-use-chn.jpg" alt="Wally Conversing with User in Chinse" width="350">

### Video
[Ver en YouTube](https://youtu.be/0H2t0p9YrDw) o [descargar](demo/wally-vid.mp4)。


## Descripción técnica

* **Basado en**: [XiaoZhi](https://github.com/78/xiaozhi-esp32) cloud + firmware ESP32

* **Placa & Framework**: [ESP32](https://www.espressif.com.cn/en/products/socs/esp32) + [ESP-IDF](https://github.com/espressif/esp-idf)

* **Backend**: Sistema de respuestas XiaoZhi LLM (Qwen, Deepseek, etc.)

* **Frontend**: Firmware del dispositivo via XiaoZhi flash tools y preset images

* **Wake word engine**: ESP-SR offline recognition

* **TTS**: Volcano Engine o CosyVoice

* **Carcasa**: Diseñada en [Tinkercad](https://www.tinkercad.com/) y 3D impresa con [Bambu Lab P1](https://bambulab.com/en-us/p1)


## Configuración de red

1. **Encender Wally**
2. **Modo configuración**
3. **Conectar a Wi-Fi `Xiaozhi`**
4. **Ingresar Wi-Fi**
5. **Listo**


## Empezando

> [!IMPORTANT]
> Solo después de configurar la red.

1. Di “Hi, Wally”
2. Empieza a hablar
3. Di “adiós” para apagar

> [!TIP]
> Para personalizar, dile a Wally qué recordar. Se puede borrar en cualquier momento.


## Agradecimientos

Gracias a:
- [Xiao Xia](https://github.com/78) y [XiaoZhi](https://github.com/78/xiaozhi-esp32)
- [Xiao Zhi platform](https://xiaozhi.me/)


## Contribuciones

Contribuciones bienvenidas. Issues y PRs son bienvenidos.


## Licencia

MIT License (LICENSE)

---

### Hecho con 💙 por July. Si te gusta, dale una estrella!
