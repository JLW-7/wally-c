# Wally

> A bilingual voice-powered AI companion, built using XiaoZhi’s intelligent assistant platform.

[English](README.md) | [Chinese](README_cn.md) | [Japanese](README_ja.md)

## Overview

**Wally** is a warm, reliable voice assistant in the shape of a penguin, developed as an improved version of the [Penguin Pi reminder assisstant](https://github.com/JLW-7/Penguin-Pi). It is designed to help users with reminders, productivity, daily conversations, and emotional support — all packed into a portable ESP32-based device.

> [!NOTE]
> Wally is currently a prototype and not yet available for purchase, public use or distribution. Check out its demo below and stay tuned for updates!

---

## Core Features

* **Voice Wake-Up**: Wake word: "Hi, Wally" triggers Wally to start listening and responding
* **Bilingual Voice Chat**: Fluent interaction in both English and Mandarin
* **Real-Time Streaming Responses**: Instant replies from XiaoZhi-powered LLM backend (Qwen, Deepseek etc)
* **OLED/Display Feedback**: On-screen reply visualization with various emojis for interaction

---

## Demo

> Coming soon...

---

## Network Configuration

1. Power on the Wally device by flipping the switch on its back
2. Remove its head from the body, and inside, on the back of the board, click on the round button right next to the white battery stand. Press it, along with the button labeled "B" together. It will now report "Entering network configuration mode". 
3. Choose the network called Xiaozhi on your phone/laptop, and a web page shall pop up. If not, go manually to the address shown on its screen.
4. Inside the web page, enter your network's details (name and password). You can also choose to remember the network in future use.
5. Once done, read the below instructions to start using it.

For more detailed instructions check out the video in the demo above.
___

## Getting Started

> [!IMPORTANT]
> Only follow the below instructions once network configuration has been completed.

1. Say "Hi, Wally" to wake Wally up.
2. Start chatting with Wally.
3. Say any form of goodbye (e.g. "Stop talking" or "Go to sleep" or simply "bye") to shut Wally down.

---

## Technical Overview

* **Powered by**: [XiaoZhi](https://github.com/78/xiaozhi-esp32) cloud + ESP32 firmware
* **Board compatibility**: DFRobot (UNIHiker), others require significant software/hardware adaptation
* **Backend**: Uses XiaoZhi’s LLM response system
* **Frontend**: Device firmware via XiaoZhi flashing tools and preset images
* **Wake Word Engine**: ESP-SR based offline recognition
* **Voice Synthesis**: TTS via Volcano Engine or CosyVoice
* **Outer Shell**: Designed in Tynkercad and 3D printed via [Bambu Lab P1](https://bambulab.com/en-us/p1)

___

## Acknowledgements

Special thanks to:
- [Xiao Xia](https://github.com/78) and his amazing project [XiaoZhi](https://github.com/78/xiaozhi-esp32)
- [The Xiao Zhi Platform](https://xiaozhi.me/)

___

## Contributions

Let's make Wally better! Feel free to open issues and pull requests.

---

## License

This project is licensed under the [MIT License](LICENSE)

---

### If you find this project cool or helpful, please show some love by giving it a star!
