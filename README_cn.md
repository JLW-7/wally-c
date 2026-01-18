<div align="center">

<img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/2a277aa7-7dd7-4a9b-9152-265a8987ebd1" />

# Wally（C++ 版本）

*基于 XiaoZhi 智能助手平台构建的双语语音 AI 伙伴*

[English](README.md) | [中文](README_cn.md) | [日本語](README_ja.md)

</div>


## 项目概览

**Wally** 是一个外形为企鹅的有趣且可靠的语音助手，主要用于**提醒事项**，同时也能在效率管理、日常对话和情绪陪伴等方面提供帮助。

> [!NOTE]
> 本产品将很快在 [这里](https://github.com/JLW-7/wally-website) 开放购买，敬请期待。


## 问题背景

**我总是忘东西。** 我也注意到，身边很多人都有同样的问题。这种情况真的很烦，甚至会把人逼疯。作为一名竞技游泳运动员，在第 *n* 次忘记带电解质饮料或泳具去训练之后，我决定做一个工具来提醒自己。

## 解决方案

Wally 在具备普通 AI 助手所有功能的同时，还被**刻意设计得更有趣、更有亲和力**。这正是它与其他提醒类助手的区别所在。一个可爱、好玩的设备更容易给人留下印象，也更容易让人记得去使用它，并认真听它的提醒。

经过四个月的开发，我完成了第一个原型，并把它交给了学校里的朋友测试。结果他们都非常喜欢，并鼓励我将它公开分享。于是，Wally 就这样诞生了。


## 常见使用场景

以下是家人和朋友们使用 Wally 的一些方式：

| 场景 | 用途 |
|------|------|
| **学校** | 学校日的随身物品快速检查 |
| **训练** | 训练前 / 后确认装备是否齐全 |
| **旅行** | 行程中的最终行李检查 |


## 核心功能

* **语音唤醒**：唤醒词 “Hi, Wally” 或 “Hi Wall-E”
* **双语语音对话**：支持英语和普通话（普通话口音仍在优化中）
* **实时流式回复**：由 XiaoZhi 平台驱动的 [Qwen](https://qwen.ai/home) 等 LLM 提供响应
* **OLED / 屏幕反馈**：实时显示识别到的语音内容与系统回复
* **小巧便携**：体积小，易于摆放或携带
* **可爱又好玩**：企鹅造型、童声语音与屏幕表情增强互动体验


## 演示

### 3D 设计
<img src="demo/wally-3d-design.png" alt="Wally 3D Design in Tinkercad" width="400" height="400">

### 内部结构
<img src="demo/wall-internal-design-front.png" alt="Wally Internal Design Front" width="400" height="400">
<img src="demo/wally-internal-design-back.png" alt="Wally Internal Design Back" width="400" height="400">

### 实际使用场景
<img src="demo/wally-in-use.png" alt="Wally Conversing with User in English" width="400">
<img src="demo/wally-in-use-chn.jpg" alt="Wally Conversing with User in Chinese" width="350">

### 演示视频
[在 YouTube 上观看](https://youtu.be/0H2t0p9YrDw) 或 [下载视频](demo/wally-vid.mp4)


## 技术概览

* **核心平台**：[XiaoZhi](https://github.com/78/xiaozhi-esp32) 云端 + ESP32 固件
* **开发板 / 框架**：ESP32 + ESP-IDF
* **后端**：小智平台 LLM（Qwen、DeepSeek 等）
* **前端**：设备固件（通过小智烧录工具）
* **唤醒词引擎**：ESP-SR 离线识别
* **语音合成**：Volcano Engine 或 CosyVoice
* **外壳**：Tinkercad 设计，Bambu Lab P1 3D 打印


## 网络配置（首次设置）

1. 打开 Wally 电源
2. 取下头部，同时按下主板上的圆形按钮与 “B” 键
3. 连接 Wi-Fi **`Xiaozhi`**
4. 输入 Wi-Fi 名称与密码
5. 配置完成，开始使用


## 开始使用

> [!IMPORTANT]
> 请在完成网络配置后再进行以下步骤。

1. 说 “Hi, Wally” 唤醒
2. 开始对话
3. 用任意告别语关闭 Wally

> [!TIP]
> 首次使用时，提前告诉 Wally 你常忘记的物品，会获得更个性化的体验。


## 致谢

特别感谢：
- [Xiao Xia](https://github.com/78) 及其项目 [XiaoZhi](https://github.com/78/xiaozhi-esp32)
- [小智平台](https://xiaozhi.me/)


## 贡献

欢迎提交 Issue 和 Pull Request。


## 许可证

本项目基于 [MIT License](LICENSE) 开源。

---

### 💙 由 July 制作｜如果你觉得这个项目很酷，欢迎点个 Star！
