<div align="center">

<img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/2a277aa7-7dd7-4a9b-9152-265a8987ebd1" />

# Wally (C++ Version)

![Language](https://img.shields.io/badge/Language-C%2B%2B-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Users](https://img.shields.io/badge/Users-14-orange?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/JLW-7/Wally?style=for-the-badge&label=Stars&color=yellow)

*Ein zweisprachiger sprachgesteuerter AI-Begleiter, gebaut auf der XiaoZhi Intelligent Assistant Plattform.*

[English](README.md) | [中文](README_cn.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [Français](README_fr.md) | [Español](README_es.md) | [Deutsch](README_de.md) | [हिन्दी](README_hi.md)

</div>


## Überblick

**Wally** ist ein lustiger, zuverlässiger Sprachassistent in Form eines Pinguins. Er ist hauptsächlich für **Erinnerungen** gedacht, kann aber auch bei Produktivität, alltäglichen Gesprächen oder emotionaler Unterstützung helfen.

> [!NOTE]
> Wird bald hier erhältlich sein: [Link](https://github.com/JLW-7/wally-website)


## Das Problem

**Ich vergesse ständig Dinge.** Viele Menschen in meiner Umgebung haben dasselbe Problem. Das ist extrem nervig. Als Leistungsschwimmer habe ich nach dem x-ten Mal, als ich mein Elektrolytgetränk oder meine Trainingsausrüstung vergessen habe, beschlossen, ein Erinnerungsgerät zu bauen.

## Die Lösung

Wally hat alle normalen Funktionen eines AI-Assistenten, ist aber **absichtlich optisch interessant** gestaltet. Das unterscheidet ihn von anderen Erinnerungs-Assistenten. Ein süßes, spaßiges Gerät macht einen besseren Eindruck und erhöht die Wahrscheinlichkeit, dass man es benutzt und die Erinnerungen beachtet.

Nach vier Monaten habe ich den ersten Prototyp fertiggestellt und ihn Freunden in der Schule gegeben. Alle fanden ihn super und wollten, dass ich ihn öffentlich mache. Hier ist er.


## Häufige Anwendungsfälle

So nutzten Familie und Freunde Wally:

| Szenario | Nutzung |
|----------|-----|
| **Schule** | Schneller Check vor dem Schultag |
| **Training** | Ausrüstung vor/nach Training bestätigen |
| **Reise** | Check des Gepäcks unterwegs |


## Kernfunktionen

* **Sprachaktivierung**: „Hi, Wally“ oder „Hi Wall-E“ aktiviert Wally

* **Zweisprachiger Sprachchat**: Englisch und Mandarin (Aussprache kann aktuell etwas seltsam sein)

* **Echtzeit Streaming Antworten**: Sofortige Antworten über XiaoZhi [Qwen](https://qwen.ai/home)

* **OLED/Display Feedback**: Anzeige von erkannten Sprachbefehlen und Antworten

* **Klein & tragbar**: Einfach zu platzieren oder mitzunehmen

* **Süß & Spaß**: Pinguin-Design, kindliche Stimme, Emojis


## Demo

### 3D Design
<img src="demo/wally-3d-design.png" alt="Wally 3D Design in Tinkercad" width="400" height="400">

### Interner Aufbau
<img src="demo/wall-internal-design-front.png" alt="Wally Internal Design Front" width="400" height="400"> <img src="demo/wally-internal-design-back.png" alt="Wally Internal Design Back" width="400" height="400">

### Anwendungsszenarien
<img src="demo/wally-in-use.png" alt="Wally Conversing with User in English" width="400"> <img src="demo/wally-in-use-chn.jpg" alt="Wally Conversing with User in Chinse" width="350">

### Video
[Auf Youtube ansehen](https://youtu.be/0H2t0p9YrDw) oder [downloaden](demo/wally-vid.mp4)。


## Technische Übersicht

* **Powered by**: [XiaoZhi](https://github.com/78/xiaozhi-esp32) cloud + ESP32 firmware

* **Board & Framework**: [ESP32](https://www.espressif.com.cn/en/products/socs/esp32) + [ESP-IDF](https://github.com/espressif/esp-idf)

* **Backend**: XiaoZhi LLM (Qwen, Deepseek etc.)

* **Frontend**: Firmware via XiaoZhi Flash Tools und Preset-Bilder

* **Wake Word Engine**: ESP-SR Offline-Erkennung

* **TTS**: Volcano Engine oder CosyVoice

* **Gehäuse**: In [Tinkercad](https://www.tinkercad.com/) entworfen und mit [Bambu Lab P1](https://bambulab.com/en-us/p1) 3D-gedruckt


## Netzwerk-Konfiguration

1. **Wally einschalten**
2. **Konfigurationsmodus** aktivieren (Knopf + B drücken)
3. **Mit `Xiaozhi` Wi-Fi verbinden**
4. **Wi-Fi Daten eingeben**
5. **Fertig**


## Erste Schritte

> [!IMPORTANT]
> Nur nach Netzwerksetup.

1. „Hi, Wally“ sagen.
2. Chat starten.
3. „Bye“ sagen, um zu beenden.

> [!TIP]
> Für Personalisierung: Sag Wally, was es sich merken soll. Kann jederzeit gelöscht werden.


## Dank

Danke an:
- [Xiao Xia](https://github.com/78) 和 [XiaoZhi](https://github.com/78/xiaozhi-esp32)
- [Xiao Zhi 平台](https://xiaozhi.me/)


## Beiträge

Contributions willkommen. Issues & PRs gerne.

## Lizenz

MIT License (LICENSE)

---

### Made with 💙 by July. Wenn dir das Projekt gefällt, gib ihm einen Star!
