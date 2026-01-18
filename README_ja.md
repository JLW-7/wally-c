<div align="center">

<img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/2a277aa7-7dd7-4a9b-9152-265a8987ebd1" />

# Wally (C++ バージョン)

![Language](https://img.shields.io/badge/Language-C%2B%2B-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Users](https://img.shields.io/badge/Users-14-orange?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/JLW-7/Wally?style=for-the-badge&label=Stars&color=yellow)

*XiaoZhi のインテリジェントアシスタントプラットフォームを使用して作られた、二言語対応の音声 AI 伴侶。*

[English](README.md) | [中文](README_cn.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [Français](README_fr.md) | [Español](README_es.md) | [Deutsch](README_de.md) | [हिन्दी](README_hi.md)

</div>


## 概要

**Wally** はペンギン型の楽しくて信頼できる音声アシスタントです。主に **リマインダー** を助けるために設計されていますが、生産性向上、日常会話、感情サポートなどにも使えます。

> [!NOTE]
> 近日中に購入可能になります。詳細は [こちら](https://github.com/JLW-7/wally-website) をご覧ください。


## 問題

**物をよく忘れる。** 私の周りにも同じ問題を抱える人が多いです。これはかなりストレスになります。競泳選手として、電解質ドリンクや練習用具を忘れることが何度も続き、リマインダーを作ることにしました。

## 解決策

Wally は普通の AI アシスタントの機能を備えつつ、**見た目が意図的に面白い**デザインになっています。これが他のリマインダーアシスタントと違う点です。可愛くて使っていて楽しいデバイスは、ユーザーの印象を良くし、頼みやすく、リマインダーをちゃんと聞くようになります。

4か月後、初期プロトタイプを完成させ、学校の友人にテストしてもらいました。みんな気に入り、公開するよう勧めてくれました。なのでここに公開します。


## よくある使用例

家族や友人が Wally を使った方法：

| シナリオ | 使用例 |
|----------|-----|
| **学校** | 学校に行く前の必需品チェック |
| **練習** | 練習前後の用具確認 |
| **旅行** | 旅行中の荷物チェック |


## コア機能

* **音声起動**：起動ワード “Hi, Wally” または “Hi Wall-E” で Wally が応答開始

* **二言語音声チャット**：英語と中国語（普通話）に対応（現在は発音が少し変な場合あり）

* **リアルタイムストリーミング返信**：XiaoZhi による [Qwen](https://qwen.ai/home) LLM から即時返信

* **OLED/ディスプレイ表示**：認識した音声と返信内容を画面に表示

* **小型で持ち運び可能**：コンパクトで置き場所を選ばない

* **可愛くて楽しい**：可愛いペンギンデザイン、子供のような声、様々な絵文字で対話


## デモ

### 3D デザイン
<img src="demo/wally-3d-design.png" alt="Wally 3D Design in Tinkercad" width="400" height="400">

### 内部構造
<img src="demo/wall-internal-design-front.png" alt="Wally Internal Design Front" width="400" height="400"> <img src="demo/wally-internal-design-back.png" alt="Wally Internal Design Back" width="400" height="400">

### 実際の使用シーン
<img src="demo/wally-in-use.png" alt="Wally Conversing with User in English" width="400"> <img src="demo/wally-in-use-chn.jpg" alt="Wally Conversing with User in Chinse" width="350">

### デモ動画
[YouTubeで見る](https://youtu.be/0H2t0p9YrDw) または [ダウンロード](demo/wally-vid.mp4)。


## 技術概要

* **基盤**： [XiaoZhi](https://github.com/78/xiaozhi-esp32) クラウド + ESP32 ファームウェア

* **ボード & フレームワーク**： [ESP32](https://www.espressif.com.cn/en/products/socs/esp32) + [ESP-IDF](https://github.com/espressif/esp-idf)

* **バックエンド**：小智の LLM（Qwen、Deepseek など）による応答

* **フロントエンド**：小智のフラッシュツールとプリセット画像でデバイスを構築

* **ウェイクワードエンジン**：ESP-SR オフライン認識

* **音声合成**：Volcano Engine または CosyVoice TTS

* **外殻**： [Tinkercad](https://www.tinkercad.com/) で設計し、[Bambu Lab P1](https://bambulab.com/en-us/p1) で 3D 印刷


## ネットワーク設定（セットアップ）

1. **Wally を起動**：背面のスイッチをオン

2. **設定モードに入る**：頭部を外し、基板背面の丸いボタンと “B” ボタンを同時に押す。Wally が「ネットワーク設定モードに入ります」と言う。

3. **設定用 Wi-Fi に接続**：スマホやPCで **`Xiaozhi`** という Wi-Fi に接続。自動で設定ページが開く。開かない場合は画面に表示されたアドレスにアクセス。

4. **Wi-Fi 情報を入力**：SSID とパスワードを入力（保存可能）

5. **完了**：設定完了後、使用開始。


## 使い方

> [!IMPORTANT]
> ネットワーク設定完了後に実行してください。

1. “Hi, Wally” と言って起動
2. 会話を開始
3. 任意の別れの言葉で終了

> [!TIP]
> 初回使用時に、Wally に覚えてほしい持ち物を伝えると、よりパーソナルな体験になります。メモリはいつでも削除可能です。


## 感謝

特別な感謝：
- [Xiao Xia](https://github.com/78) と [XiaoZhi](https://github.com/78/xiaozhi-esp32)
- [Xiao Zhi プラットフォーム](https://xiaozhi.me/)


## 貢献

貢献歓迎。Issue や PR を自由にどうぞ。


## ライセンス

本プロジェクトは [MIT ライセンス](LICENSE) です。

---

### July 💙 が制作。もしこのプロジェクトが気に入ったらスターをお願いします！
