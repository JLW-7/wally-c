<div align="center">

<img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/2a277aa7-7dd7-4a9b-9152-265a8987ebd1" />

# Wally (Version C++)

![Language](https://img.shields.io/badge/Language-C%2B%2B-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Users](https://img.shields.io/badge/Users-14-orange?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/JLW-7/Wally?style=for-the-badge&label=Stars&color=yellow)

*Un compagnon IA vocal bilingue, construit sur la plateforme d’assistant intelligent XiaoZhi.*

[English](README.md) | [中文](README_cn.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [Français](README_fr.md) | [Español](README_es.md) | [Deutsch](README_de.md) | [हिन्दी](README_hi.md)

</div>


## Vue d’ensemble

**Wally** est un assistant vocal amusant et fiable en forme de pingouin. Il est conçu principalement pour **les rappels**, mais peut aussi aider à la productivité, aux conversations quotidiennes ou au soutien émotionnel.

> [!NOTE]
> Il sera bientôt disponible à l’achat [ici](https://github.com/JLW-7/wally-website).


## Le problème

**J’oublie toujours des choses.** J’ai remarqué que beaucoup de gens autour de moi ont le même problème. C’est très frustrant. En tant que nageur compétitif, après avoir oublié plusieurs fois ma boisson électrolyte ou mon équipement d’entraînement, j’ai décidé de construire un outil de rappel.

## La solution

Wally a toutes les fonctionnalités normales d’un assistant IA, mais est aussi **intentionnellement conçu pour être intéressant visuellement**. Cela le distingue des autres assistants de rappel. Je trouve qu’un appareil mignon et amusant laisse une meilleure impression et augmente les chances que vous l’utilisiez et écoutiez ses rappels.

Après quatre mois, j’ai terminé mon premier prototype et l’ai donné à des amis à l’école pour le tester. Ils ont tous adoré et m’ont encouragé à le rendre public. Donc le voici.


## Cas d’utilisation courants

Voici comment ma famille et mes amis utilisent Wally :

| Scénario | Utilisation |
|----------|-----|
| **École** | Vérification rapide des essentiels avant la journée |
| **Entraînement** | Vérification du matériel avant/après l’entraînement |
| **Voyage** | Vérification des bagages en voyage |


## Fonctionnalités principales

* **Réveil vocal** : “Hi, Wally” ou “Hi Wall-E” active Wally

* **Chat vocal bilingue** : Anglais et mandarin (l’accent peut sembler étrange)

* **Réponses en streaming en temps réel** : Réponses instantanées via Qwen

* **Retour OLED/Écran** : Affiche ce que vous avez dit et la réponse

* **Petit et portable** : Facile à placer ou à transporter

* **Adorable et amusant** : Design pingouin, voix enfantine, emojis


## Démo

### Design 3D
<img src="demo/wally-3d-design.png" alt="Wally 3D Design in Tinkercad" width="400" height="400">

### Structure interne
<img src="demo/wall-internal-design-front.png" alt="Wally Internal Design Front" width="400" height="400"> <img src="demo/wally-internal-design-back.png" alt="Wally Internal Design Back" width="400" height="400">

### Scénarios réels
<img src="demo/wally-in-use.png" alt="Wally Conversing with User in English" width="400"> <img src="demo/wally-in-use-chn.jpg" alt="Wally Conversing with User in Chinse" width="350">

### Vidéo
[Voir sur YouTube](https://youtu.be/0H2t0p9YrDw) ou [télécharger](demo/wally-vid.mp4)。


## Aperçu technique

* **Basé sur** : [XiaoZhi](https://github.com/78/xiaozhi-esp32) cloud + firmware ESP32

* **Carte & Framework** : [ESP32](https://www.espressif.com.cn/en/products/socs/esp32) + [ESP-IDF](https://github.com/espressif/esp-idf)

* **Backend** : Système de réponses LLM XiaoZhi (Qwen, Deepseek, etc.)

* **Frontend** : Firmware via outils XiaoZhi et images préconfigurées

* **Wake word engine** : ESP-SR offline

* **TTS** : Volcano Engine ou CosyVoice

* **Coque** : Conçu sur [Tinkercad](https://www.tinkercad.com/) et imprimé en 3D sur [Bambu Lab P1](https://bambulab.com/en-us/p1)


## Configuration réseau

1. **Allumer Wally**
2. **Mode configuration**
3. **Se connecter au Wi-Fi `Xiaozhi`**
4. **Entrer le Wi-Fi**
5. **Terminé**


## Commencer

> [!IMPORTANT]
> Après configuration réseau seulement.

1. Dire “Hi, Wally”
2. Commencer à parler
3. Dire “au revoir” pour arrêter

> [!TIP]
> Pour personnaliser, dites à Wally quoi mémoriser. Peut être effacé à tout moment.


## Remerciements

Merci à :
- [Xiao Xia](https://github.com/78) et [XiaoZhi](https://github.com/78/xiaozhi-esp32)
- [Xiao Zhi platform](https://xiaozhi.me/)


## Contributions

Contributions bienvenues. Issues & PRs acceptés.


## Licence

MIT License (LICENSE)

---

### Fait avec 💙 par July. Si tu aimes ce projet, mets une étoile !
