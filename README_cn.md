<div align="center">

<img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/2a277aa7-7dd7-4a9b-9152-265a8987ebd1" />

# Wally (C++ 版本)

![Language](https://img.shields.io/badge/Language-C%2B%2B-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Users](https://img.shields.io/badge/Users-14-orange?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/JLW-7/Wally?style=for-the-badge&label=Stars&color=yellow)

*一个双语语音 AI 伙伴，基于小智智能助手平台构建。*

[English](README.md) | [中文](README_cn.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [Français](README_fr.md) | [Español](README_es.md) | [Deutsch](README_de.md) | [हिन्दी](README_hi.md)

</div>


## 概述

**Wally** 是一个有趣、可靠的企鹅形语音助手。它主要用于 **提醒功能**，同时也可以帮助用户提高效率、进行日常对话，甚至提供情绪支持。

> [!NOTE]
> 该产品即将上线购买，详情见 [这里](https://github.com/JLW-7/wally-website)。敬请期待。


## 问题

**我总是忘记东西。** 我发现我身边很多人也有同样的问题。这种情况非常烦人，甚至让人抓狂。作为一名竞技游泳运动员，在第 *N* 次忘记带电解质饮料或训练装备后，我决定做一个提醒工具。

## 解决方案

Wally 具备普通 AI 助手的所有功能，同时外观设计 **更有趣、更吸引人**。这就是它与其他提醒助手的区别。我认为一个可爱、好用的设备会给用户更好的印象，也更容易让你记得去使用它并听取提醒。

四个月后，我完成了第一个原型，并给学校里的朋友测试。结果他们都非常喜欢，并鼓励我公开发布。所以现在它就在这里。


## 常见使用场景

这些是我家人和朋友使用 Wally 的方式：

| 场景 | 用法 |
|----------|-----|
| **学校** | 早上快速检查必带物品 |
| **训练** | 训练前/后确认装备 |
| **旅行** | 旅行中检查行李是否齐全 |


## 核心功能

* **语音唤醒**：唤醒词 “Hi, Wally” 或 “Hi Wall-E” 可触发 Wally 开始听取并回复

* **双语语音聊天**：支持英语和普通话（目前普通话口音可能略怪）

* **实时流式回复**：来自小智驱动的 [Qwen](https://qwen.ai/home) LLM 后端的即时回复

* **OLED/屏幕反馈**：屏幕实时显示识别到的语音和系统回复

* **小巧便携**：简洁小巧，方便摆放或携带

* **可爱好玩**：可爱的企鹅造型、童声以及多种表情符号互动


## 演示

### 3D 设计
<img src="demo/wally-3d-design.png" alt="Wally 3D Design in Tinkercad" width="400" height="400">

### 内部结构
<img src="demo/wall-internal-design-front.png" alt="Wally Internal Design Front" width="400" height="400"> <img src="demo/wally-internal-design-back.png" alt="Wally Internal Design Back" width="400" height="400">

### 实际使用场景
<img src="demo/wally-in-use.png" alt="Wally Conversing with User in English" width="400"> <img src="demo/wally-in-use-chn.jpg" alt="Wally Conversing with User in Chinse" width="350">

### 演示视频
[在 Youtube 观看](https://youtu.be/0H2t0p9YrDw) 或 [下载](demo/wally-vid.mp4)。


## 技术概览

* **基于**： [XiaoZhi](https://github.com/78/xiaozhi-esp32) 云 + ESP32 固件

* **硬件与框架**： [ESP32](https://www.espressif.com.cn/en/products/socs/esp32) + [ESP-IDF](https://github.com/espressif/esp-idf)

* **后端**：使用小智的 LLM（Qwen、Deepseek 等）响应系统

* **前端**：通过小智刷写工具和预设图片生成设备固件

* **唤醒词引擎**：ESP-SR 离线识别

* **语音合成**：Volcano Engine 或 CosyVoice TTS

* **外壳**：在 [Tinkercad](https://www.tinkercad.com/) 设计，使用 [Bambu Lab P1](https://bambulab.com/en-us/p1) 3D 打印


## 网络配置（设置）

1. **打开 Wally**：打开背部开关上电

2. **进入配置模式**：取下 Wally 头部，找到主板背面的圆形按钮和标有 “B” 的按钮同时按下。Wally 会提示：*“进入网络配置模式。”*

3. **连接 Wally 的设置网络**：在手机或电脑上连接 Wi-Fi 名称为 **`Xiaozhi`** 的网络。网页会自动弹出；如果没有，请在浏览器打开屏幕上显示的地址。

4. **输入 Wi-Fi 信息**：在设置页面输入 Wi-Fi 名称（SSID）和密码（可选择记住网络）。

5. **完成设置**：完成后即可开始使用 Wally。


## 开始使用

> [!IMPORTANT]
> 仅在完成网络配置后操作。

1. 说 “Hi, Wally” 唤醒 Wally。
2. 开始对话。
3. 说任何告别语让 Wally 关闭。

> [!TIP]
> 第一次使用时，可以告诉 Wally 你希望它记住的物品信息，这会存入它的记忆。随时可以通过语音让它清除。


## 致谢

特别感谢：
- [Xiao Xia](https://github.com/78) 以及他的项目 [XiaoZhi](https://github.com/78/xiaozhi-esp32)
- [小智平台](https://xiaozhi.me/)


## 贡献

欢迎贡献。欢迎提交 issue 或 pull request。


## 许可

本项目采用 [MIT 许可证](LICENSE)。

---

### 由 July 💙 制作。如果你觉得这个项目很酷或有帮助，请给它点个 star！
