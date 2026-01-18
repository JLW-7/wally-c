<div align="center">

<img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/2a277aa7-7dd7-4a9b-9152-265a8987ebd1" />

# Wally (C++ Version)

![Language](https://img.shields.io/badge/Language-C%2B%2B-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Users](https://img.shields.io/badge/Special_Users-14-orange?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/JLW-7/Wally?style=for-the-badge&label=Stars&color=yellow)

*A bilingual voice-powered AI companion, built using XiaoZhi’s intelligent assistant platform.*

[English](README.md) | [中文](README_cn.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [Français](README_fr.md) | [Español](README_es.md) | [Deutsch](README_de.md) | [हिन्दी](README_hi.md)

</div>


## Overview

**Wally** is a fun, reliable voice assistant in the shape of a penguin. It is designed to mainly help users with **reminders**, but can also assist in anything from productivity, to daily conversations, to emotional support.

> [!NOTE]
> This will soon be available for purchase [here](https://github.com/JLW-7/wally-website). Give it a star to stay tuned for updates!


## The Problem

**I just keep forgetting stuff.** A lot of people around me have the same issue as well, I’ve noticed. It’s annoying to the point where it drives people crazy. As a competitive swimmer, after the *nth* time of forgetting to bring my electrolyte drink or swim gear to practice, I decided to build a tool to remind myself.

## The Solution

Wally is designed to have all the normal functionalities of an AI assistant, while also being **intentionally interesting in appearance**. This is what separates it from other reminder assistants out there. I find that a cute, fun-to-use device creates a better impression on users, meaning you’re more likely to remember to ask it for help and actually listen to its reminders.

After four months, I completed my first prototype and gave a few to friends at school to test out. It turned out that all of them absolutely loved using it and urged me to make it public. So here it is.


## Common Use Cases

These are some ways my family and friends used Wally:

| Scenario | Usage |
|----------|-----|
| **School** | Quick essentials check before school day |
| **Practice** | Confirm practice gear before/after training |
| **Travel** | Final packing check during trips |

  

## Core Features

* **Voice Wake-Up**: Wake word: "Hi, Wally" or "Hi Wall-E" triggers Wally to start listening and responding

* **Bilingual Voice Chat**: Fluent interaction in both English and Mandarin (although it's Mandarin accent might sound strange at the moment)

* **Real-Time Streaming Responses**: Instant replies from XiaoZhi-powered [Qwen](https://qwen.ai/home) LLM backend

* **OLED/Display Feedback**: On-screen visualization of detected user speech said and system replies.

* **Small and Portable**: Simple, miniature form that is easy to place or carry around.

* **Adorable and Fun To Use**: Intentionally cute penguin design, child-like voice and various on-screen emojis for interaction.


## Demo

### 3D Design
<img src="demo/wally-3d-design.png" alt="Wally 3D Design in Tinkercad" width="400" height="400">

### Internal Structure
<img src="demo/wall-internal-design-front.png" alt="Wally Internal Design Front" width="400" height="400"> <img src="demo/wally-internal-design-back.png" alt="Wally Internal Design Back" width="400" height="400">

### Actual Usage Scenarios
<img src="demo/wally-in-use.png" alt="Wally Conversing with User in English" width="400"> <img src="demo/wally-in-use-chn.jpg" alt="Wally Conversing with User in Chinse" width="350">

### Demonstration Video
[Watch on Youtube](https://youtu.be/0H2t0p9YrDw) or download it [here](demo/wally-vid.mp4).


## Technical Overview

* **Powered by**: [XiaoZhi](https://github.com/78/xiaozhi-esp32) cloud + ESP32 firmware

* **Board + Framework**: [ESP32](https://www.espressif.com.cn/en/products/socs/esp32) and [ESP-IDF](https://github.com/espressif/esp-idf)

* **Backend**: Uses XiaoZhi’s LLM (Qwen, Deepseek, etc) response system

* **Frontend**: Device firmware via XiaoZhi flashing tools and preset images

* **Wake Word Engine**: ESP-SR based offline recognition

* **Voice Synthesis**: TTS via Volcano Engine or CosyVoice

* **Outer Shell**: Designed in [Tinkercad](https://www.tinkercad.com/) and 3D printed via [Bambu Lab P1](https://bambulab.com/en-us/p1)


## Network Configuration (Setup)

1. **Turn on Wally**: Flip the switch on Wally’s back to power it on.

2. **Enter Configuration Mode**: Remove Wally’s head to access the internal board. On the back of the board, locate the round button next to the white battery stand. Press that button and the one labeled “B” at the same time. Wally will report: *“Entering network configuration mode.”*

3. **Connect to Wally’s Setup Network**: On your phone or laptop, connect to the Wi-Fi network named **`Xiaozhi`**. A configuration webpage should automatically open. If it doesn’t, open your browser and go to the address displayed on Wally’s screen.

4. **Enter Your Wi-Fi Details**: On the setup page, input your Wi-Fi network’s **name (SSID)** and **password**. (You can choose to remember this network for future use.)

5. **You're All Set!**: Once configuration is complete, follow the next set of instructions to start using Wally.
   

## Getting Started

> [!IMPORTANT]
> Only follow the below instructions once network configuration has been completed.

1. Say "Hi, Wally" to wake Wally up.
2. Start chatting with Wally. 
3. Say any form of goodbye you like to shut Wally down.

> [!TIP]
> For a more personalized experience, it may be helpful to list details about your belongings you want Wally to remember. The information will be stored in Wally's memory and can be cleared any time simply by asking it to.


## Acknowledgements

Special thanks to:
- [Xiao Xia](https://github.com/78) and his amazing project [XiaoZhi](https://github.com/78/xiaozhi-esp32)
- [The Xiao Zhi Platform](https://xiaozhi.me/)


## Contributions

Contributions are welcome. Feel free to open issues and pull requests.


## License

This project is licensed under the [MIT License](LICENSE).

---


### Made with 💙 by July. If you found this project cool or helpful, please give it a star!
