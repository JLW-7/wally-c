<div align="center">

<img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/2a277aa7-7dd7-4a9b-9152-265a8987ebd1" />

# Wally（C++ バージョン）

*XiaoZhi インテリジェントアシスタント基盤で構築されたバイリンガル音声 AI コンパニオン*

[English](README.md) | [中文](README_cn.md) | [日本語](README_ja.md)

</div>


## 概要

**Wally** は、ペンギン型の楽しくて信頼できる音声アシスタントです。主に**リマインダー**用途を想定していますが、生産性向上、日常会話、感情的なサポートにも対応します。

> [!NOTE]
> 近日中に [こちら](https://github.com/JLW-7/wally-website) で購入可能になる予定です。


## 課題

**とにかく物忘れが多い。** 周囲の人も同じ問題を抱えていることに気づきました。これは本当にストレスになります。競技スイマーとして、電解質ドリンクや水着を何度も忘れた結果、自分用のリマインダーを作ることにしました。

## 解決策

Wally は、一般的な AI アシスタントの機能を備えつつ、**あえて見た目を楽しく設計**しています。これが他のリマインダー系アシスタントとの違いです。可愛くて使って楽しいデバイスは印象に残りやすく、自然と使う頻度も増えます。

4か月の開発を経て最初のプロトタイプを完成させ、学校の友人たちに試してもらいました。結果は大好評で、公開を強く勧められました。そこで、このプロジェクトを公開しました。


## よくある使用シーン

家族や友人が実際に使っていた例です：

| シーン | 用途 |
|--------|------|
| **学校** | 学校日の持ち物を素早く確認 |
| **練習** | 練習前後に装備を確認 |
| **旅行** | 旅行中の最終パッキング確認 |


## 主な機能

* **音声ウェイクアップ**：「Hi, Wally」または「Hi Wall-E」
* **バイリンガル音声対話**：英語・中国語対応
* **リアルタイム応答**：[Qwen](https://qwen.ai/home) などの LLM による応答
* **OLED / 画面表示**：認識された音声と応答を表示
* **小型・携帯性**：設置や持ち運びが簡単
* **かわいくて楽しい**：ペンギンデザイン、子供らしい声、画面絵文字


## デモ

### 3D デザイン
<img src="demo/wally-3d-design.png" alt="Wally 3D Design in Tinkercad" width="400" height="400">

### 内部構造
<img src="demo/wall-internal-design-front.png" alt="Wally Internal Design Front" width="400" height="400">
<img src="demo/wally-internal-design-back.png" alt="Wally Internal Design Back" width="400" height="400">

### 使用例
<img src="demo/wally-in-use.png" alt="Wally Conversing with User in English" width="400">
<img src="demo/wally-in-use-chn.jpg" alt="Wally Conversing with User in Chinese" width="350">

### デモ動画
[YouTube で視聴](https://youtu.be/0H2t0p9YrDw) または [動画をダウンロード](demo/wally-vid.mp4)


## 技術概要

* **基盤**：[XiaoZhi](https://github.com/78/xiaozhi-esp32) + ESP32
* **ボード / フレームワーク**：ESP32 + ESP-IDF
* **バックエンド**：Qwen / DeepSeek など
* **フロントエンド**：デバイスファームウェア
* **ウェイクワード**：ESP-SR（オフライン）
* **音声合成**：Volcano Engine / CosyVoice
* **外装**：Tinkercad 設計、Bambu Lab P1 による 3D 印刷


## ネットワーク設定

1. 電源を入れる
2. 頭部を外し、ボタンと「B」を同時押し
3. Wi-Fi **`Xiaozhi`** に接続
4. SSID とパスワードを入力
5. 設定完了


## 使い方

> [!IMPORTANT]
> ネットワーク設定完了後に行ってください。

1. 「Hi, Wally」と話しかける
2. 会話開始
3. 任意の別れの言葉で終了

> [!TIP]
> 忘れやすい物を最初に伝えると、よりパーソナライズされた体験になります。


## 謝辞

- [Xiao Xia](https://github.com/78)
- [XiaoZhi プラットフォーム](https://xiaozhi.me/)


## コントリビューション

Issue / Pull Request 歓迎です。


## ライセンス

[MIT License](LICENSE)

---

### 💙 July 作｜気に入ったら Star をお願いします！
