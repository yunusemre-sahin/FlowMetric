<div align="center">

<br>

# 🌊 FlowMetric

### Universal Unit Converter · Evrensel Birim Dönüştürücü

<br>

**🌐 Language / Dil:**
[🇬🇧 English](#english) · [🇹🇷 Türkçe](#türkçe)

<br>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-blue?style=flat-square)](package.json)

<br>

</div>

---

![Dashboard Ekran Görüntüsü](Photo/Wb_Screen.png)


## English

FlowMetric is a **zero-dependency, browser-based universal unit converter** built with pure HTML, CSS, and JavaScript. It converts across 6 categories and 40+ units with real-world context cards for every result.

### ✨ Features

| Feature | Description |
|---|---|
| 🌡️ **6 Categories** | Temperature, Length, Weight, Data, Energy, Pressure |
| 📐 **40+ Units** | From millimetres to light-years, bits to petabytes |
| 🔍 **Smart Search** | Type a unit name to filter the list instantly |
| 💡 **Result Analytics** | Context cards like *"This equals ~2 Everest heights"* |
| ⭐ **Favourites** | Save frequent conversions to `localStorage` |
| 📋 **Copy** | One-click result copy to clipboard |
| ⇄ **Swap** | Instantly swap source ↔ target units |
| 🎨 **Glassmorphism UI** | Dark theme, blur effects, gradient orbs, particle canvas |
| ⚠️ **Error Handling** | Shake animation + toast on invalid input |
| 🌍 **Bilingual (i18n)** | Full English and Turkish support |
| 📱 **Responsive** | Optimised for desktop and mobile |

### 🗂️ Project Structure

```
flowmetric/
│
├── index.html          # Main HTML (semantic, SEO-ready, Bilingual)
├── Photo/              # Project screenshots and visual assets
├── css/
│   └── style.css       # Design system & all component styles
├── js/
│   └── app.js          # Modular app engine with i18n support
├── README.md
├── LICENSE
└── .gitignore
```

### 🚀 Getting Started

No installation needed. Just open in a browser:

```bash
git clone https://github.com/yunusemre-sahin/flowmetric.git
cd flowmetric
# Open index.html in your browser
```

> Works entirely offline. No Node.js, npm, or build tools required.

### 🧩 Architecture

`app.js` follows a clean, 12-section modular structure:

```
1.  Data Layer      — FM_UNITS object, all categories & base conversion functions
2.  Analytics       — buildAnalytics() — real-world context engine
3.  Helpers         — formatNumber(), convert()
4.  Favourites      — localStorage CRUD (get/save/add/remove/render/load)
5.  Tab System      — buildTabs(), setCategory()
6.  Unit Selects    — buildUnitSelects() with search support
7.  Calculation     — calculate() — main conversion loop
8.  Error Handling  — shakeInvalidInput()
9.  Toast           — showToast()
10. Event Listeners — All addEventListener bindings
11. Particles       — Canvas-based floating particle animation
12. init()          — App bootstrapper
```

### 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--fm-primary` | `#63b3ed` | Blue — buttons, active tabs |
| `--fm-accent` | `#4fd1c5` | Teal — result highlight |
| `--fm-void` | `#060612` | Background — deep space black |
| `--fm-glass` | `rgba(255,255,255,0.035)` | Glassmorphism card surface |
| `--spring` | `cubic-bezier(0.34,1.56,0.64,1)` | Bounce easing |
| `--expo-out` | `cubic-bezier(0.16,1,0.3,1)` | Smooth deceleration |

### 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-category`)
3. Commit your changes (`git commit -m 'feat: add speed category'`)
4. Push to the branch (`git push origin feature/new-category`)
5. Open a Pull Request

### 📄 License

[MIT](LICENSE) — Free to use, modify, and distribute.

---

## Türkçe

FlowMetric, sıfır bağımlılıkla çalışan, **saf HTML, CSS ve JavaScript** ile yazılmış evrensel bir birim dönüştürücüdür. 6 kategori ve 40'tan fazla birim arasında dönüşüm yapar; her sonuç için gerçek dünya bağlamı sunar.

### ✨ Özellikler

| Özellik | Açıklama |
|---|---|
| 🌡️ **6 Kategori** | Sıcaklık, Uzunluk, Ağırlık, Veri, Enerji, Basınç |
| 📐 **40+ Birim** | Milimetredn Işık Yılına, Bit'ten Petabayt'a |
| 🔍 **Akıllı Arama** | Birim adını yazın, liste anında filtrelesin |
| 💡 **Sonuç Analitiği** | *"Bu mesafe yaklaşık 2 Everest yüksekliğine eşit"* tarzı bağlamsal kartlar |
| ⭐ **Favoriler** | Sık kullanılan dönüşümleri `localStorage`'a kaydedin |
| 📋 **Kopyala** | Sonucu tek tıkla panoya alın |
| ⇄ **Swap** | Kaynak ↔ Hedef birimleri anında yer değiştirin |
| 🎨 **Glassmorphism Arayüz** | Koyu tema, blur efektleri, gradient orb'lar, parçacık animasyonu |
| ⚠️ **Hata Yönetimi** | Geçersiz girişlerde shake animasyonu + toast bildirimi |
| 🌍 **Çoklu Dil (i18n)** | Tam İngilizce ve Türkçe desteği |
| 📱 **Responsive** | Masaüstü ve mobil için optimize edilmiş |

### 🗂️ Proje Yapısı

```
flowmetric/
│
├── index.html          # Ana HTML (semantik, SEO hazır, Çift Dil)
├── Photo/              # Proje ekran görüntüleri ve görselleri
├── css/
│   └── style.css       # Tasarım sistemi ve tüm bileşen stilleri
├── js/
│   └── app.js          # Özel i18n modülü entegre edilmiş uygulama motoru
├── README.md
├── LICENSE
└── .gitignore
```

### 🚀 Kullanım

Kurulum gerektirmez. Tarayıcıda açmanız yeterli:

```bash
git clone https://github.com/yunusemre-sahin/flowmetric.git
cd flowmetric
# index.html dosyasını tarayıcıda açın
```

> Tamamen çevrimdışı çalışır. Node.js, npm veya herhangi bir build aracına ihtiyaç duymaz.

### 📦 Desteklenen Kategoriler

| Kategori | Birimler |
|---|---|
| 🌡️ Sıcaklık | Celsius, Fahrenheit, Kelvin |
| 📏 Uzunluk | mm, cm, m, km, in, ft, yd, mi, nmi, Işık Yılı |
| ⚖️ Ağırlık | µg, mg, g, kg, t, lb, oz, st |
| 💾 Veri | Bit, Byte, KB, MB, GB, TB, PB |
| ⚡ Enerji | J, kJ, cal, kcal, Wh, kWh, eV, BTU |
| 🌀 Basınç | Pa, kPa, MPa, bar, atm, psi, mmHg, inHg |

### 🤝 Katkı

Pull request'ler her zaman açıktır. Büyük değişiklikler için önce bir issue açın.

### 📄 Lisans

[MIT](LICENSE) — Özgürce kullanın, değiştirin, dağıtın.

---

<div align="center">

Built with 🌊 by <strong>FlowMetric</strong>

</div>
