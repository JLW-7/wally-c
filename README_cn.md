# Wally

> 一款双语语音驱动的 AI 伙伴，基于小智智能助手平台构建。

[English](README.md) | [中文](README_cn.md) | [日本語](README_ja.md)

## 项目概述

**Wally** 是一个温暖可靠的企鹅形语音助手，是 [Penguin Pi 提醒助手](https://github.com/JLW-7/Penguin-Pi) 的升级版本。它旨在帮助用户进行提醒、提高效率、日常对话以及情感支持，全部集成在一台便携的基于 ESP32 的设备中。

> [!NOTE]
> Wally 目前仍处于原型阶段，尚未面向公众销售或使用。欢迎查看下方的演示，敬请期待更新！

---

## 核心功能

* **语音唤醒**：唤醒词 “Hi, Wally” 启动 Wally 的语音识别响应
* **双语语音对话**：支持流利的中英文交互
* **实时流式响应**：来自小智后端（Qwen、DeepSeek 等）的即时回复
* **OLED/显示屏反馈**：设备屏幕上显示回复内容和互动表情

---

## 演示

> 即将发布...

---

## 网络配置

1. 打开 Wally 背后的开关以启动设备  
2. 拆下 Wally 的头部，在主板背面，找到白色电池支架旁边的圆形按钮。与标有 “B” 的按钮一起按下。此时，设备将语音播报：“进入配网模式”。  
3. 使用手机或笔记本电脑连接名为 **Xiaozhi** 的 Wi-Fi 网络，配置页面会自动弹出。如果没有，请根据屏幕上显示的地址手动打开网页。  
4. 在页面中输入您网络的名称和密码。也可以选择记住网络信息以便下次自动连接。  
5. 配置完成后，参考下方的使用说明开始体验。

详细说明请参考上方演示视频。

___

## 快速开始

> [!IMPORTANT]
> 请确保网络配置完成后再进行以下操作。

1. 说 “Hi, Wally” 唤醒 Wally。  
2. 开始与 Wally 对话。  
3. 说任意形式的道别语（如 “Stop talking”、“Go to sleep” 或简单的 “bye”）即可关闭 Wally。  

---

## 技术架构

* **核心平台**：使用 [XiaoZhi](https://github.com/78/xiaozhi-esp32) 云平台 + ESP32 固件  
* **主控兼容性**：DFRobot 行空板（UNIHiker），其他主板需进行软硬件适配  
* **后端服务**：通过小智平台 LLM 系统进行响应  
* **前端部署**：通过小智烧录工具和预设固件完成设备部署  
* **唤醒词引擎**：基于 ESP-SR 的本地离线识别  
* **语音合成**：使用火山引擎或 CosyVoice 进行 TTS  
* **外壳设计**：使用 Tynkercad 设计，3D 打印通过 [Bambu Lab P1](https://bambulab.com/en-us/p1) 完成  

___

## 鸣谢

特别感谢：
- [Xiao Xia](https://github.com/78) 及其出色的项目 [XiaoZhi](https://github.com/78/xiaozhi-esp32)
- [小智平台](https://xiaozhi.me/)

___

## 贡献方式

欢迎一起让 Wally 变得更好！请随时提交 Issue 和 Pull Request。

---

## 许可证

本项目基于 [MIT License](LICENSE) 开源许可协议发布。

---

### 如果你觉得这个项目很酷或有帮助，欢迎点个 Star 支持一下！
