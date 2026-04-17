
"use strict";

let FM_LANG = (function () {
  const saved = localStorage.getItem("flowmetric_lang");
  return saved === "en" ? "en" : "tr";
})();

/** Tüm çeviri dizileri */
const I18N = {
  tr: {
    title:            "Universal Converter",
    subtitle:         "6 kategori \u00b7 40+ birim \u00b7 Ak\u0131ll\u0131 analitik \u00b7 Anl\u0131k d\u00f6n\u00fc\u015f\u00fcm",
    selectCategory:   "Kategori Se\u00e7",
    searchPlaceholder:"Birim ara\u2026 (\u00f6rn: Kilometre)",
    fromUnit:         "Kaynak Birim",
    toUnit:           "Hedef Birim",
    swapTitle:        "Birimleri Ters \u00c7evir",
    result:           "Sonu\u00e7",
    infoDefault:      "Bir de\u011fer girerek d\u00f6n\u00fc\u015f\u00fcm\u00fc ba\u015flat\u0131n.",
    favorites:        "\u2b50 Favoriler",
    favEmpty:         "Hen\u00fcz favori yok. S\u0131k kulland\u0131klar\u0131n\u0131z\u0131 \u2b50 ile kaydedin!",
    copyBtn:          "\ud83d\udccb Sonucu Kopyala",
    favBtn:           "\u2b50 Favoriye Ekle",
    resetBtn:         "\u21ba S\u0131f\u0131rla",
    footerText:       "6 kategori \u00b7 40+ birim \u00b7 MIT Lisans\u0131",
    toastCopied:      "Sonu\u00e7 panoya kopyaland\u0131! \ud83d\udccb",
    toastNoCopy:      "Kopyalanacak sonu\u00e7 bulunamad\u0131!",
    toastCopyFail:    "Kopyalama ba\u015far\u0131s\u0131z!",
    toastFavAdded:    "Favorilere eklendi! \u2b50",
    toastFavExists:   "Zaten favorilerde! \u2b50",
    toastReset:       "S\u0131f\u0131rland\u0131. \u21ba",
    toastInvalidNum:  "L\u00fctfen ge\u00e7erli bir say\u0131 girin! \u26a0\ufe0f",
    loadAriaLabel:    "d\u00f6n\u00fc\u015f\u00fcm\u00fcn\u00fc y\u00fckle",
    removeAriaLabel:  "favoriden kald\u0131r",
    htmlLang:         "tr",
    cats: {
      sicaklik: "Sıcaklık", uzunluk: "Uzunluk", agirlik: "Ağırlık",
      veri: "Veri", enerji: "Enerji", basinc: "Basınç"
    },
    units: {
      C: "Celsius", F: "Fahrenheit", K: "Kelvin",
      mm: "Milimetre", cm: "Santimetre", m: "Metre", km: "Kilometre",
      in: "İnç", ft: "Fit", yd: "Yarda", mi: "Mil", nmi: "Deniz Mili", ly: "Işık Yılı",
      mcg: "Mikrogram", mg: "Miligram", g: "Gram", kg: "Kilogram", t: "Metrik Ton", lb: "Pound", oz: "Ons", st: "Taş (Stone)",
      b: "Bit", B: "Byte", KB: "Kilobayt", MB: "Megabayt", GB: "Gigabayt", TB: "Terabayt", PB: "Petabayt",
      J: "Joule", kJ: "Kilojoule", cal: "Kalori", kcal: "Kilokalori", Wh: "Watt-saat", kWh: "Kilowatt-saat", eV: "Elektron-volt", BTU: "İngiliz Isı Birimi (BTU)",
      Pa: "Pascal", kPa: "Kilopaskal", MPa: "Megapaskal", bar: "Bar", atm: "Atmosfer", psi: "PSI", mmHg: "mmHg (Torr)", inHg: "İnç Cıva"
    },
    analytics: {
      sicaklik: {
        sun: "Güneşin yüzeyinden bile sıcak! ☀️",
        boil: "Su kaynama noktasının üstünde. 🔥",
        bodyExact: "Tam olarak insan vücut sıcaklığı! 🧬",
        bodyNorm: "Normal vücut sıcaklığı aralığında. 🧬",
        freeze: "Suyun donma noktasında veya altında. ❄️",
        cool: "Serin bir hava. 🧥",
        hot: "Sıcak bir gün. ☀️",
        default: v => `= <strong>${v}</strong> °C`
      },
      uzunluk: {
        space: "Dünya'dan Proxima Centauri'ye kadar olan mesafeye eşdeğer! 🌌",
        moon: v => `Ay ile Dünya arasındaki mesafenin yaklaşık <strong>${v}</strong> katı. 🌕`,
        everest: v => `Yaklaşık <strong>${v}</strong> Everest yüksekliği! 🏔️`,
        walk: (v1, v2) => `Yaklaşık <strong>${v1}</strong> kilometre — yürüyerek ~${v2} dakika. 🚶`,
        football: v => `Yaklaşık <strong>${v}</strong> futbol sahası uzunluğu. ⚽`,
        human: v => `Ortalama insan boyunun <strong>${v}</strong> katı. 🧑`,
        nano: "Nanometre ölçeği — atomlar bu düzeyde. ⚛️",
        micro: "Mikro ölçek, gözle görülmesi güç. 🔬",
        default: v => `≈ <strong>${v}</strong> metre.`
      },
      agirlik: {
        earth: "Dünya'nın ağırlığına ulaştınız! 🌍",
        human: v => `Yaklaşık <strong>${v}</strong> yetişkin insan ağırlığı. 🏋️`,
        car: v => `Yaklaşık <strong>${v}</strong> kilogram — büyük bir otomobil ağırlığı! 🚗`,
        ball: v => `Yaklaşık <strong>${v}</strong> futbol topu ağırlığında. ⚽`,
        hand: "Ortalama erişkin el ağırlığının (<strong>~400g</strong>) bir kısmı. 🤚",
        butterfly: "Bir kelebek kanadından bile hafif! 🦋",
        drop: "Bir damla su bile ağırdır buna kıyasla. 💧",
        default: v => `≈ <strong>${v}</strong> kilogram.`
      },
      veri: {
        server: "Binlerce sunucunun ortak depolama kapasitesi! 🖥️",
        movie: v => `Yaklaşık <strong>${v}</strong> tam uzun metrajlı film depolayabilirsiniz. 🎬`,
        photo: v => `<strong>${v}</strong> adet yüksek çözünürlüklü fotoğraf. 📸`,
        song: v => `Yaklaşık <strong>${v}</strong> şarkı (MP3). 🎵`,
        text: "Küçük bir metin dosyası büyüklüğünde. 📄",
        default: v => `≈ <strong>${v}</strong> GB.`
      },
      enerji: {
        nuclear: "Küçük bir nükleer santral üretimi kadar! ☢️",
        bulb: v => `Bu enerjiyle bir ampul <strong>${v}</strong> saat yanar. 💡`,
        run: (v1, v2) => `<strong>${v1}</strong> kcal — yaklaşık <strong>${v2}</strong> dakika koşu enerjisi. 🏃`,
        lift: "Bir 1 kg nesneyi 10 cm kaldırmaya yetecek enerji. 🏋️",
        quantum: "Kuantum ölçeğinde enerji! ⚛️",
        default: v => `≈ <strong>${v}</strong> kalori.`
      },
      basinc: {
        ocean: "Derin okyanus uçurumlarındaki basınçlara yakın! 🌊",
        atm: v => `Deniz seviyesi atmosfer basıncının <strong>${v}</strong> katı. 🌍`,
        tire: "Bisiklet lastiği şişirme aralığında. 🚴",
        wind: "Hafif rüzgâr basıncı seviyesi. 💨",
        vacuum: "Çok düşük basınç — neredeyse vakum! 🌌",
        default: v => `≈ <strong>${v}</strong> atm.`
      }
    }
  },
  en: {
    title:            "Universal Converter",
    subtitle:         "6 categories \u00b7 40+ units \u00b7 Smart analytics \u00b7 Instant conversion",
    selectCategory:   "Select Category",
    searchPlaceholder:"Search unit\u2026 (e.g. Kilometre)",
    fromUnit:         "From Unit",
    toUnit:           "To Unit",
    swapTitle:        "Swap Units",
    result:           "Result",
    infoDefault:      "Enter a value to start conversion.",
    favorites:        "\u2b50 Favorites",
    favEmpty:         "No favorites yet. Save frequent conversions with \u2b50!",
    copyBtn:          "\ud83d\udccb Copy Result",
    favBtn:           "\u2b50 Add to Favorites",
    resetBtn:         "\u21ba Reset",
    footerText:       "6 categories \u00b7 40+ units \u00b7 MIT License",
    toastCopied:      "Result copied to clipboard! \ud83d\udccb",
    toastNoCopy:      "No result to copy!",
    toastCopyFail:    "Copy failed!",
    toastFavAdded:    "Added to favorites! \u2b50",
    toastFavExists:   "Already in favorites! \u2b50",
    toastReset:       "Reset. \u21ba",
    toastInvalidNum:  "Please enter a valid number! \u26a0\ufe0f",
    loadAriaLabel:    "load conversion",
    removeAriaLabel:  "remove from favorites",
    htmlLang:         "en",
    cats: {
      sicaklik: "Temperature", uzunluk: "Length", agirlik: "Weight",
      veri: "Data", enerji: "Energy", basinc: "Pressure"
    },
    units: {
      C: "Celsius", F: "Fahrenheit", K: "Kelvin",
      mm: "Millimeter", cm: "Centimeter", m: "Meter", km: "Kilometer",
      in: "Inch", ft: "Foot", yd: "Yard", mi: "Mile", nmi: "Nautical Mile", ly: "Light Year",
      mcg: "Microgram", mg: "Milligram", g: "Gram", kg: "Kilogram", t: "Metric Ton", lb: "Pound", oz: "Ounce", st: "Stone",
      b: "Bit", B: "Byte", KB: "Kilobyte", MB: "Megabyte", GB: "Gigabyte", TB: "Terabyte", PB: "Petabyte",
      J: "Joule", kJ: "Kilojoule", cal: "Calorie", kcal: "Kilocalorie", Wh: "Watt-hour", kWh: "Kilowatt-hour", eV: "Electron-volt", BTU: "British Thermal Unit (BTU)",
      Pa: "Pascal", kPa: "Kilopascal", MPa: "Megapascal", bar: "Bar", atm: "Atmosphere", psi: "PSI", mmHg: "mmHg (Torr)", inHg: "Inch of Mercury"
    },
    analytics: {
      sicaklik: {
        sun: "Hotter than the surface of the sun! ☀️",
        boil: "Above the boiling point of water. 🔥",
        bodyExact: "Exactly human body temperature! 🧬",
        bodyNorm: "Within normal human body temperature range. 🧬",
        freeze: "At or below the freezing point of water. ❄️",
        cool: "A cool weather. 🧥",
        hot: "A hot day. ☀️",
        default: v => `= <strong>${v}</strong> °C`
      },
      uzunluk: {
        space: "Equivalent to the distance from Earth to Proxima Centauri! 🌌",
        moon: v => `About <strong>${v}</strong> times the distance between Earth and the Moon. 🌕`,
        everest: v => `About <strong>${v}</strong> times the height of Mount Everest! 🏔️`,
        walk: (v1, v2) => `About <strong>${v1}</strong> kilometers — ~${v2} minutes walking. 🚶`,
        football: v => `About <strong>${v}</strong> football fields long. ⚽`,
        human: v => `<strong>${v}</strong> times the height of an average human. 🧑`,
        nano: "Nanometer scale — atoms are at this level. ⚛️",
        micro: "Micro scale, hard to see with the naked eye. 🔬",
        default: v => `≈ <strong>${v}</strong> meters.`
      },
      agirlik: {
        earth: "You've reached the mass of the Earth! 🌍",
        human: v => `About <strong>${v}</strong> average adult human weights. 🏋️`,
        car: v => `About <strong>${v}</strong> kilograms — the weight of a large car! 🚗`,
        ball: v => `About <strong>${v}</strong> average footballs. ⚽`,
        hand: "A fraction of the average adult hand weight (<strong>~400g</strong>). 🤚",
        butterfly: "Lighter than a butterfly's wing! 🦋",
        drop: "Even a single drop of water is heavier compared to this. 💧",
        default: v => `≈ <strong>${v}</strong> kilograms.`
      },
      veri: {
        server: "The combined storage capacity of thousands of servers! 🖥️",
        movie: v => `You can store about <strong>${v}</strong> full-length movies. 🎬`,
        photo: v => `<strong>${v}</strong> high-resolution photos. 📸`,
        song: v => `About <strong>${v}</strong> songs (MP3). 🎵`,
        text: "The size of a small text file. 📄",
        default: v => `≈ <strong>${v}</strong> GB.`
      },
      enerji: {
        nuclear: "As much as a small nuclear power plant's production! ☢️",
        bulb: v => `With this energy, a light bulb would burn for <strong>${v}</strong> hours. 💡`,
        run: (v1, v2) => `<strong>${v1}</strong> kcal — about <strong>${v2}</strong> minutes of running energy. 🏃`,
        lift: "Enough energy to lift a 1 kg object by 10 cm. 🏋️",
        quantum: "Energy at the quantum scale! ⚛️",
        default: v => `≈ <strong>${v}</strong> calories.`
      },
      basinc: {
        ocean: "Close to the pressures of deep ocean trenches! 🌊",
        atm: v => `<strong>${v}</strong> times the sea-level atmospheric pressure. 🌍`,
        tire: "In the range of bicycle tire inflation. 🚴",
        wind: "Level of a light wind breeze. 💨",
        vacuum: "Very low pressure — near vacuum! 🌌",
        default: v => `≈ <strong>${v}</strong> atm.`
      }
    }
  },
};


function setLanguage(lang) {
  FM_LANG = lang;
  localStorage.setItem("flowmetric_lang", lang);

  // html lang attr
  document.getElementById("html-root").lang = I18N[lang].htmlLang;

  // Buton active durumlar\u0131
  document.getElementById("lang-tr").classList.toggle("active", lang === "tr");
  document.getElementById("lang-tr").setAttribute("aria-pressed", String(lang === "tr"));
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
  document.getElementById("lang-en").setAttribute("aria-pressed", String(lang === "en"));

  applyLanguage();
}


function applyLanguage() {
  const t = I18N[FM_LANG];

  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (t[key] !== undefined) el.title = t[key];
  });

  
  const infoEl = document.getElementById("info-text");
  if (infoEl && (infoEl.innerHTML === I18N.tr.infoDefault || infoEl.innerHTML === I18N.en.infoDefault)) {
    infoEl.innerHTML = t.infoDefault;
  }

  
  if (typeof renderFavorites === "function") renderFavorites();

  
  if (typeof buildTabs === "function") buildTabs();
}


function t(key) {
  return I18N[FM_LANG][key] ?? key;
}

/* ================================================================
   1. VERİ KATMANI
   Her kategori şu yapıyı takip eder:
   - label:    Görünen isim
   - icon:     Emoji ikon
   - color:    Tema rengi (gelecekte kullanım için)
   - units:    [{id, name, symbol}] dizisi
   - toBase:   {unitId: fn(value) => baseValue}   — baz birime çeviri
   - fromBase: {unitId: fn(baseValue) => value}   — bazdan çeviri
   ================================================================ */
const FM_UNITS = {

  /* ── Sıcaklık — baz: Celsius ─────────────────────────────── */
  sicaklik: {
    label: "Sıcaklık",
    icon:  "🌡️",
    color: "#f6ad55",
    units: [
      { id: "C", name: "Celsius",    symbol: "°C" },
      { id: "F", name: "Fahrenheit", symbol: "°F" },
      { id: "K", name: "Kelvin",     symbol: "K"  },
    ],
    toBase: {
      C: v => v,
      F: v => (v - 32) * 5 / 9,
      K: v => v - 273.15,
    },
    fromBase: {
      C: v => v,
      F: v => v * 9 / 5 + 32,
      K: v => v + 273.15,
    },
  },

  /* ── Uzunluk — baz: Metre ────────────────────────────────── */
  uzunluk: {
    label: "Uzunluk",
    icon:  "📏",
    color: "#63b3ed",
    units: [
      { id: "mm",  name: "Milimetre",   symbol: "mm"  },
      { id: "cm",  name: "Santimetre",  symbol: "cm"  },
      { id: "m",   name: "Metre",       symbol: "m"   },
      { id: "km",  name: "Kilometre",   symbol: "km"  },
      { id: "in",  name: "İnç",         symbol: "in"  },
      { id: "ft",  name: "Fit",         symbol: "ft"  },
      { id: "yd",  name: "Yarda",       symbol: "yd"  },
      { id: "mi",  name: "Mil",         symbol: "mi"  },
      { id: "nmi", name: "Deniz Mili",  symbol: "nmi" },
      { id: "ly",  name: "Işık Yılı",   symbol: "ly"  },
    ],
    toBase: {
      mm:  v => v / 1000,
      cm:  v => v / 100,
      m:   v => v,
      km:  v => v * 1000,
      in:  v => v * 0.0254,
      ft:  v => v * 0.3048,
      yd:  v => v * 0.9144,
      mi:  v => v * 1609.344,
      nmi: v => v * 1852,
      ly:  v => v * 9.4607e15,
    },
    fromBase: {
      mm:  v => v * 1000,
      cm:  v => v * 100,
      m:   v => v,
      km:  v => v / 1000,
      in:  v => v / 0.0254,
      ft:  v => v / 0.3048,
      yd:  v => v / 0.9144,
      mi:  v => v / 1609.344,
      nmi: v => v / 1852,
      ly:  v => v / 9.4607e15,
    },
  },

  /* ── Ağırlık — baz: Gram ─────────────────────────────────── */
  agirlik: {
    label: "Ağırlık",
    icon:  "⚖️",
    color: "#68d391",
    units: [
      { id: "mcg", name: "Mikrogram",       symbol: "µg"  },
      { id: "mg",  name: "Miligram",        symbol: "mg"  },
      { id: "g",   name: "Gram",            symbol: "g"   },
      { id: "kg",  name: "Kilogram",        symbol: "kg"  },
      { id: "t",   name: "Metrik Ton",      symbol: "t"   },
      { id: "lb",  name: "Pound",           symbol: "lb"  },
      { id: "oz",  name: "Ons",             symbol: "oz"  },
      { id: "st",  name: "Taş (Stone)",     symbol: "st"  },
    ],
    toBase: {
      mcg: v => v / 1e6,
      mg:  v => v / 1000,
      g:   v => v,
      kg:  v => v * 1000,
      t:   v => v * 1e6,
      lb:  v => v * 453.59237,
      oz:  v => v * 28.349523,
      st:  v => v * 6350.2932,
    },
    fromBase: {
      mcg: v => v * 1e6,
      mg:  v => v * 1000,
      g:   v => v,
      kg:  v => v / 1000,
      t:   v => v / 1e6,
      lb:  v => v / 453.59237,
      oz:  v => v / 28.349523,
      st:  v => v / 6350.2932,
    },
  },

  /* ── Veri — baz: Bit ─────────────────────────────────────── */
  veri: {
    label: "Veri",
    icon:  "💾",
    color: "#4fd1c5",
    units: [
      { id: "b",  name: "Bit",       symbol: "b"  },
      { id: "B",  name: "Byte",      symbol: "B"  },
      { id: "KB", name: "Kilobayt",  symbol: "KB" },
      { id: "MB", name: "Megabayt",  symbol: "MB" },
      { id: "GB", name: "Gigabayt",  symbol: "GB" },
      { id: "TB", name: "Terabayt",  symbol: "TB" },
      { id: "PB", name: "Petabayt",  symbol: "PB" },
    ],
    toBase: {
      b:  v => v,
      B:  v => v * 8,
      KB: v => v * 8 * 1024,
      MB: v => v * 8 * 1024 ** 2,
      GB: v => v * 8 * 1024 ** 3,
      TB: v => v * 8 * 1024 ** 4,
      PB: v => v * 8 * 1024 ** 5,
    },
    fromBase: {
      b:  v => v,
      B:  v => v / 8,
      KB: v => v / (8 * 1024),
      MB: v => v / (8 * 1024 ** 2),
      GB: v => v / (8 * 1024 ** 3),
      TB: v => v / (8 * 1024 ** 4),
      PB: v => v / (8 * 1024 ** 5),
    },
  },

  /* ── Enerji — baz: Joule ─────────────────────────────────── */
  enerji: {
    label: "Enerji",
    icon:  "⚡",
    color: "#f6d860",
    units: [
      { id: "J",    name: "Joule",          symbol: "J"    },
      { id: "kJ",   name: "Kilojoule",      symbol: "kJ"   },
      { id: "cal",  name: "Kalori",         symbol: "cal"  },
      { id: "kcal", name: "Kilokalori",     symbol: "kcal" },
      { id: "Wh",   name: "Watt-saat",      symbol: "Wh"   },
      { id: "kWh",  name: "Kilowatt-saat",  symbol: "kWh"  },
      { id: "eV",   name: "Elektron-volt",  symbol: "eV"   },
      { id: "BTU",  name: "İngiliz Isı Birimi (BTU)", symbol: "BTU" },
    ],
    toBase: {
      J:    v => v,
      kJ:   v => v * 1_000,
      cal:  v => v * 4.184,
      kcal: v => v * 4_184,
      Wh:   v => v * 3_600,
      kWh:  v => v * 3_600_000,
      eV:   v => v * 1.602176634e-19,
      BTU:  v => v * 1055.05585,
    },
    fromBase: {
      J:    v => v,
      kJ:   v => v / 1_000,
      cal:  v => v / 4.184,
      kcal: v => v / 4_184,
      Wh:   v => v / 3_600,
      kWh:  v => v / 3_600_000,
      eV:   v => v / 1.602176634e-19,
      BTU:  v => v / 1055.05585,
    },
  },

  /* ── Basınç — baz: Pascal ────────────────────────────────── */
  basinc: {
    label: "Basınç",
    icon:  "🌀",
    color: "#f687b3",
    units: [
      { id: "Pa",   name: "Pascal",       symbol: "Pa"   },
      { id: "kPa",  name: "Kilopaskal",   symbol: "kPa"  },
      { id: "MPa",  name: "Megapaskal",   symbol: "MPa"  },
      { id: "bar",  name: "Bar",          symbol: "bar"  },
      { id: "atm",  name: "Atmosfer",     symbol: "atm"  },
      { id: "psi",  name: "PSI",          symbol: "psi"  },
      { id: "mmHg", name: "mmHg (Torr)",  symbol: "Torr" },
      { id: "inHg", name: "İnç Cıva",    symbol: "inHg" },
    ],
    toBase: {
      Pa:   v => v,
      kPa:  v => v * 1_000,
      MPa:  v => v * 1_000_000,
      bar:  v => v * 100_000,
      atm:  v => v * 101_325,
      psi:  v => v * 6894.757,
      mmHg: v => v * 133.322,
      inHg: v => v * 3386.389,
    },
    fromBase: {
      Pa:   v => v,
      kPa:  v => v / 1_000,
      MPa:  v => v / 1_000_000,
      bar:  v => v / 100_000,
      atm:  v => v / 101_325,
      psi:  v => v / 6894.757,
      mmHg: v => v / 133.322,
      inHg: v => v / 3386.389,
    },
  },
};


/* ================================================================
   2. ANALİTİK — Bağlamsal açıklama üreteci
   Dönüştürülen değerin gerçek dünya karşılığını açıklar.
   ================================================================ */

/**
 * @param {number} result    — Dönüştürülmüş değer (hedef birimde)
 * @param {string} fromId    — Kaynak birim id'si
 * @param {string} toId      — Hedef birim id'si
 * @param {string} category  — Kategori anahtarı
 * @returns {string}         — HTML içerikli açıklama metni
 */
function buildAnalytics(result, fromId, toId, category) {
  if (!isFinite(result) || result === 0) {
    return "Bir değer girerek dönüşümü başlatın.";
  }

  const cat     = FM_UNITS[category];
  const fromObj = cat.units.find(u => u.id === fromId) || { name: fromId, symbol: fromId };
  const toObj   = cat.units.find(u => u.id === toId)   || { name: toId,   symbol: toId   };
  const fromName = I18N[FM_LANG].units[fromObj.id] || fromObj.name;
  const toName   = I18N[FM_LANG].units[toObj.id]   || toObj.name;
  const fmt     = formatNumber(result);

  const at = I18N[FM_LANG].analytics[category];
  const prefix = `<strong>${fmt} ${toObj.symbol}</strong> — `;

  // ── Sıcaklık ──────────────────────────────────────────────
  if (category === "sicaklik") {
    const celsius = FM_UNITS.sicaklik.toBase[toId](result);
    if (celsius >= 1_000_000)         return prefix + at.sun;
    if (celsius >= 100)               return prefix + at.boil;
    if (celsius === 37)               return prefix + at.bodyExact;
    if (celsius > 36 && celsius < 38) return prefix + at.bodyNorm;
    if (celsius <= 0)                 return prefix + at.freeze;
    if (celsius < 15)                 return prefix + at.cool;
    if (celsius >= 30)                return prefix + at.hot;
    const cVal = formatNumber(FM_UNITS.sicaklik.fromBase.C(FM_UNITS.sicaklik.toBase[toId](result)));
    return `<strong>${fmt} ${toObj.symbol}</strong> ${at.default(cVal)}`;
  }

  // ── Uzunluk ───────────────────────────────────────────────
  if (category === "uzunluk") {
    const fromValue = parseFloat(document.getElementById("from-value").value) || 0;
    const meters    = FM_UNITS.uzunluk.toBase[fromId](fromValue);

    if (meters >= 9.461e15) return prefix + at.space;
    if (meters >= 3.844e8)  return prefix + at.moon((meters/3.844e8).toFixed(1));
    if (meters >= 8_848)    return prefix + at.everest((meters/8848).toFixed(1));
    if (meters >= 1_000)    return prefix + at.walk((meters/1000).toFixed(1), Math.round(meters/1.4/60));
    if (meters >= 100)      return prefix + at.football((meters/100).toFixed(0));
    if (meters >= 1.7)      return prefix + at.human((meters/1.75).toFixed(1));
    if (meters < 1e-6)      return prefix + at.nano;
    if (meters < 0.01)      return prefix + at.micro;
    return `<strong>${fmt} ${toObj.symbol}</strong> ${at.default(meters.toFixed(3))}`;
  }

  // ── Ağırlık ───────────────────────────────────────────────
  if (category === "agirlik") {
    const fromValue = parseFloat(document.getElementById("from-value").value) || 0;
    const grams     = FM_UNITS.agirlik.toBase[fromId](fromValue);

    if (grams >= 5.972e27)  return prefix + at.earth;
    if (grams >= 1e9)       return prefix + at.human((grams/75_000).toFixed(0));
    if (grams >= 1_000_000) return prefix + at.car((grams/1_000).toFixed(0));
    if (grams >= 1_000)     return prefix + at.ball((grams/430).toFixed(1));
    if (grams >= 75)        return prefix + at.hand;
    if (grams < 0.001)      return prefix + at.butterfly;
    if (grams < 1)          return prefix + at.drop;
    return `<strong>${fmt} ${toObj.symbol}</strong> ${at.default((grams/1000).toFixed(4))}`;
  }

  // ── Veri ─────────────────────────────────────────────────
  if (category === "veri") {
    const fromValue = parseFloat(document.getElementById("from-value").value) || 0;
    const bits      = FM_UNITS.veri.toBase[fromId](fromValue);
    const gb        = bits / (8 * 1024 ** 3);

    if (gb >= 1_000_000) return prefix + at.server;
    if (gb >= 1_000)     return prefix + at.movie((gb / 750).toFixed(0));
    if (gb >= 10)        return prefix + at.photo(Math.round(gb * 750));
    if (gb >= 1)         return prefix + at.song(Math.round(gb * 1000));
    if (gb < 0.001)      return prefix + at.text;
    return `<strong>${fmt} ${toObj.symbol}</strong> ${at.default(gb.toFixed(4))}`;
  }

  // ── Enerji ────────────────────────────────────────────────
  if (category === "enerji") {
    const fromValue = parseFloat(document.getElementById("from-value").value) || 0;
    const joules    = FM_UNITS.enerji.toBase[fromId](fromValue);

    if (joules >= 3.6e15)    return prefix + at.nuclear;
    if (joules >= 3_600_000) return prefix + at.bulb((joules / 3_600).toFixed(0));
    if (joules >= 4_184)     return prefix + at.run((joules / 4_184).toFixed(1), Math.round(joules / 4_184 / 100));
    if (joules >= 1)         return prefix + at.lift;
    if (joules < 1e-15)      return prefix + at.quantum;
    return `<strong>${fmt} ${toObj.symbol}</strong> ${at.default((joules / 4.184).toFixed(2))}`;
  }

  // ── Basınç ────────────────────────────────────────────────
  if (category === "basinc") {
    const fromValue = parseFloat(document.getElementById("from-value").value) || 0;
    const pa        = FM_UNITS.basinc.toBase[fromId](fromValue);

    if (pa >= 1e9)     return prefix + at.ocean;
    if (pa >= 101_325) return prefix + at.atm((pa / 101325).toFixed(1));
    if (pa >= 6_894)   return prefix + at.tire;
    if (pa >= 1_000)   return prefix + at.wind;
    if (pa < 100)      return prefix + at.vacuum;
    return `<strong>${fmt} ${toObj.symbol}</strong> ${at.default((pa / 101325).toFixed(4))}`;
  }

  // Varsayılan
  return `<strong>${fmt}</strong> ${fromName} → <strong>${formatNumber(result)}</strong> ${toName}.`;
}


/* ================================================================
   3. YARDIMCI FONKSİYONLAR
   ================================================================ */

/**
 * Sayıyı kullanıcı dostu biçimde formatlar.
 * Çok küçük veya çok büyük değerlerde bilimsel gösterim kullanır.
 * @param {number} num
 * @returns {string}
 */
function formatNumber(num) {
  if (!isFinite(num)) return "∞";
  if (num === 0)      return "0";

  const abs = Math.abs(num);
  if (abs > 0 && abs < 1e-6)  return num.toExponential(4);
  if (abs >= 1e15)             return num.toExponential(4);

  return parseFloat(num.toFixed(10)).toLocaleString("tr-TR", {
    maximumFractionDigits: 10,
  });
}

/**
 * Birim dönüşümü — baz değer üzerinden geçiş yapar.
 * @param {number} value
 * @param {string} fromId
 * @param {string} toId
 * @param {string} category
 * @returns {number}
 */
function convert(value, fromId, toId, category) {
  const cat = FM_UNITS[category];
  if (!cat || !isFinite(value)) return NaN;
  if (fromId === toId) return value;

  const baseValue = cat.toBase[fromId](value);
  return cat.fromBase[toId](baseValue);
}


/* ================================================================
   4. FAVORİLER — localStorage CRUD
   ================================================================ */

/** localStorage anahtarı */
const FAV_KEY = "flowmetric_favorites_v1";

/** Favorileri localStorage'dan okur */
function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  } catch {
    return [];
  }
}

/** Favorileri localStorage'a yazar */
function saveFavorites(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

/**
 * Yeni favori ekler. Maksimum 8 kayıt tutar.
 * @param {{ category, from, to, fromName, toName }} entry
 */
function addFavorite(entry) {
  const favs = getFavorites();
  const key  = `${entry.category}:${entry.from}:${entry.to}`;

  if (favs.find(f => f.key === key)) {
    showToast(t("toastFavExists"), false);
    return;
  }

  favs.unshift({ key, ...entry, label: `${entry.fromName} → ${entry.toName}` });
  if (favs.length > 8) favs.pop();

  saveFavorites(favs);
  renderFavorites();
  showToast(t("toastFavAdded"));
}

/**
 * Anahtara göre favori kaldırır.
 * @param {string} key
 */
function removeFavorite(key) {
  saveFavorites(getFavorites().filter(f => f.key !== key));
  renderFavorites();
}

/** Favori listesini DOM'a render eder */
function renderFavorites() {
  const container = document.getElementById("fm-favorites");
  const favs      = getFavorites();

  if (favs.length === 0) {
    container.innerHTML = `<span class="fm-fav-empty">${t("favEmpty")}</span>`;
    return;
  }

  container.innerHTML = favs.map(f => {
    const dFromName = I18N[FM_LANG].units[f.from] || f.fromName;
    const dToName   = I18N[FM_LANG].units[f.to]   || f.toName;
    const dynamicLabel = `${dFromName} → ${dToName}`;
    return `
    <div
      class="fm-fav-chip"
      data-key="${f.key}"
      tabindex="0"
      role="button"
      aria-label="${dynamicLabel} ${t('loadAriaLabel')}"
      onclick="loadFavorite('${f.key}')"
      onkeydown="if(event.key==='Enter')loadFavorite('${f.key}')"
      title="${dynamicLabel}"
    >
      ${FM_UNITS[f.category]?.icon || "🔄"} ${dynamicLabel}
      <span
        class="remove"
        role="button"
        aria-label="${dynamicLabel} ${t('removeAriaLabel')}"
        onclick="event.stopPropagation(); removeFavorite('${f.key}')"
        onkeydown="if(event.key==='Enter'){event.stopPropagation(); removeFavorite('${f.key}');}"
        tabindex="0"
      >×</span>
    </div>
  `}).join("");
}

/**
 * Favori seçimini uygulamaya yükler.
 * @param {string} key
 */
function loadFavorite(key) {
  const fav = getFavorites().find(f => f.key === key);
  if (!fav) return;

  setCategory(fav.category);

  // Kısa gecikme — sebep: buildUnitSelects() sonrasında DOM güncellenir
  requestAnimationFrame(() => {
    document.getElementById("from-unit").value = fav.from;
    document.getElementById("to-unit").value   = fav.to;
    calculate();
  });
}


/* ================================================================
   5. UI — SEKME SİSTEMİ
   ================================================================ */

/** Aktif kategori anahtarı */
let currentCategory = "sicaklik";

/** Kategori sekmelerini oluşturur */
function buildTabs() {
  const container = document.getElementById("fm-tabs");

  container.innerHTML = Object.entries(FM_UNITS).map(([key, cat]) => `
    <button
      class="fm-tab ${key === currentCategory ? "active" : ""}"
      onclick="setCategory('${key}')"
      role="tab"
      aria-selected="${key === currentCategory}"
      aria-controls="main-card"
      id="tab-${key}"
    >
      <span class="icon" aria-hidden="true">${cat.icon}</span>
      ${I18N[FM_LANG].cats[key] || cat.label}
    </button>
  `).join("");
}

/**
 * Aktif kategoriyi değiştirir ve UI'yi günceller.
 * @param {string} catKey
 */
function setCategory(catKey) {
  currentCategory = catKey;

  // Arama kutusunu temizle
  document.getElementById("fm-search").value = "";

  buildTabs();
  buildUnitSelects();
  calculate();
}


/* ================================================================
   6. UI — BİRİM SEÇME VE ARAMA
   ================================================================ */

/**
 * from-unit ve to-unit select'lerini doldurur.
 * @param {string} [filter=""]  — Arama filtresi
 */
function buildUnitSelects(filter = "") {
  const cat     = FM_UNITS[currentCategory];
  const fromSel = document.getElementById("from-unit");
  const toSel   = document.getElementById("to-unit");

  // Mevcut seçimleri hafızaya al
  const prevFrom = fromSel.value;
  const prevTo   = toSel.value;

  // Filtreleme
  const lc       = filter.toLowerCase();
  const filtered = filter
    ? cat.units.filter(u => {
        const uName = I18N[FM_LANG].units[u.id] || u.name;
        return uName.toLowerCase().includes(lc) || u.symbol.toLowerCase().includes(lc);
      })
    : cat.units;

  // Option HTML üretici
  const makeOptions = selectedId =>
    filtered.map(u => {
      const uName = I18N[FM_LANG].units[u.id] || u.name;
      return `<option value="${u.id}" ${u.id === selectedId ? "selected" : ""}>${u.symbol} — ${uName}</option>`;
    }).join("");

  fromSel.innerHTML = makeOptions(prevFrom);
  toSel.innerHTML   = makeOptions(prevTo);

  // Kaynak ve hedef aynı birimse farklı bir hedef seç
  if (!filter && fromSel.value === toSel.value && filtered.length > 1) {
    toSel.value = filtered[1].id;
  }
}


/* ================================================================
   7. HESAPLAMA MOTORU
   ================================================================ */

/** Ana hesaplama fonksiyonu — her girdi değişiminde çağrılır */
function calculate() {
  const fromId = document.getElementById("from-unit").value;
  const toId   = document.getElementById("to-unit").value;
  const rawVal = document.getElementById("from-value").value.replace(",", ".");
  const value  = parseFloat(rawVal);

  const resultValueEl = document.getElementById("result-value");
  const resultUnitEl  = document.getElementById("result-unit");
  const toValueEl     = document.getElementById("to-value");
  const infoEl        = document.getElementById("info-text");

  // Boş girdi — sıfırla
  if (rawVal === "" || rawVal === "-" || rawVal === ".") {
    resultValueEl.textContent = "—";
    resultUnitEl.textContent  = "";
    toValueEl.value           = "";
    infoEl.innerHTML          = t("infoDefault");
    return;
  }

  // Geçersiz karakter
  if (isNaN(value)) {
    shakeInvalidInput();
    return;
  }

  // Hesapla
  const result    = convert(value, fromId, toId, currentCategory);
  const toSym     = FM_UNITS[currentCategory].units.find(u => u.id === toId)?.symbol || "";
  const formatted = formatNumber(result);

  // DOM güncelle
  resultValueEl.textContent = formatted;
  resultUnitEl.textContent  = toSym;
  toValueEl.value           = formatted;

  // Pop animasyonu
  resultValueEl.classList.remove("fm-result-pop");
  void resultValueEl.offsetWidth; // reflow — animasyonu yeniden tetikler
  resultValueEl.classList.add("fm-result-pop");

  // Analitik bilgi
  infoEl.innerHTML = buildAnalytics(result, fromId, toId, currentCategory);
}


/* ================================================================
   8. HATA YÖNETİMİ
   ================================================================ */

/** Geçersiz giriş için shake animasyonu + toast gösterir */
function shakeInvalidInput() {
  const input = document.getElementById("from-value");
  input.classList.remove("fm-shake");
  void input.offsetWidth; // reflow
  input.classList.add("fm-shake");
  showToast(t("toastInvalidNum"), true);
  setTimeout(() => input.classList.remove("fm-shake"), 600);
}


/* ================================================================
   9. TOAST BİLDİRİM SİSTEMİ
   ================================================================ */

/**
 * Kullanıcıya anlık bildirim gösterir.
 * @param {string}  msg      — Mesaj metni
 * @param {boolean} isError  — Hata stili uygular
 */
function showToast(msg, isError = false) {
  const toast = document.getElementById("fm-toast");
  toast.textContent = msg;
  toast.className   = "fm-toast" + (isError ? " error" : "");
  toast.classList.add("show");

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2800);
}


/* ================================================================
   10. OLAY DİNLEYİCİLER
   ================================================================ */

/** Sonucu panoya kopyalar */
document.getElementById("copy-btn").addEventListener("click", () => {
  const val = document.getElementById("result-value").textContent;
  if (!val || val === "—") {
    showToast(t("toastNoCopy"), true);
    return;
  }
  navigator.clipboard
    .writeText(val)
    .then(() => showToast(t("toastCopied")))
    .catch(() => showToast(t("toastCopyFail"), true));
});

/** Mevcut dönüşümü favorilere ekler */
document.getElementById("fav-btn").addEventListener("click", () => {
  const fromId   = document.getElementById("from-unit").value;
  const toId     = document.getElementById("to-unit").value;
  const cat      = FM_UNITS[currentCategory];
  const fromName = cat.units.find(u => u.id === fromId)?.name || fromId;
  const toName   = cat.units.find(u => u.id === toId)?.name   || toId;

  addFavorite({ category: currentCategory, from: fromId, to: toId, fromName, toName });
});

/** Formu sıfırlar */
document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("from-value").value           = "";
  document.getElementById("to-value").value             = "";
  document.getElementById("result-value").textContent   = "—";
  document.getElementById("result-unit").textContent    = "";
  document.getElementById("info-text").innerHTML        = t("infoDefault");
  document.getElementById("fm-search").value            = "";
  buildUnitSelects();
  showToast(t("toastReset"));
});

/** Kaynak ↔ Hedef birimleri yer değiştirir */
document.getElementById("swap-btn").addEventListener("click", () => {
  const fromSel = document.getElementById("from-unit");
  const toSel   = document.getElementById("to-unit");

  const tmp     = fromSel.value;
  fromSel.value = toSel.value;
  toSel.value   = tmp;

  // Mevcut sonuç varsa kaynak alan olarak kullan
  const curResult = document.getElementById("to-value").value;
  if (curResult && curResult !== "—") {
    document.getElementById("from-value").value = curResult;
  }

  calculate();
});

/* Birim seçimi değiştiğinde hesapla */
document.getElementById("from-unit").addEventListener("change", calculate);
document.getElementById("to-unit").addEventListener("change", calculate);

/* Değer girişinde hesapla */
document.getElementById("from-value").addEventListener("input", calculate);

/* Birim arama */
document.getElementById("fm-search").addEventListener("input", function () {
  buildUnitSelects(this.value.trim());
  calculate();
});


/* ================================================================
   11. CANVAS PARTİKÜL SİSTEMİ
   FlowMetric akış temalı parçacık arka planı.
   ================================================================ */
(function initParticleEngine() {
  const canvas = document.getElementById("fm-canvas");
  const ctx    = canvas.getContext("2d");

  /** FlowMetric renk paleti */
  const COLORS = ["#63b3ed", "#4fd1c5", "#f687b3", "#68d391", "#f6d860"];
  const COUNT  = 65;

  /** Canvas boyutunu pencereye eşitler */
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  /** Tek bir akış parçacığı */
  class Particle {
    constructor() {
      this.reset(true);
    }

    /**
     * Parçacığı rastgele özelliklerle sıfırlar.
     * @param {boolean} fromRandom — true ise ekranda rastgele konumlanır
     */
    reset(fromRandom = false) {
      this.x     = Math.random() * canvas.width;
      this.y     = fromRandom ? Math.random() * canvas.height : canvas.height + 10;
      this.size  = Math.random() * 2.4 + 0.4;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.vx    = (Math.random() - 0.5) * 0.35;
      this.vy    = -(Math.random() * 0.45 + 0.12);
      this.life  = 1;
      this.decay = Math.random() * 0.0028 + 0.0009;
      this.alpha = Math.random() * 0.45 + 0.08;
    }

    /** Fizik güncellemesi */
    update() {
      this.x    += this.vx;
      this.y    += this.vy;
      this.life -= this.decay;
      this.alpha = this.life * 0.55;
      if (this.life <= 0) this.reset();
    }

    /** Canvas üzerine çizer */
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle   = this.color;
      ctx.shadowBlur  = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  // Parçacıkları başlat
  const particles = Array.from({ length: COUNT }, () => new Particle());

  /** Ana render döngüsü */
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  resize();
  loop();
})();


/* ================================================================
   12. BAŞLATMA
   ================================================================ */
(function init() {
  // Kaydedilmiş dili uygula (buton durumu + DOM metinleri)
  setLanguage(FM_LANG);
  buildTabs();
  buildUnitSelects();
  renderFavorites();
})();
