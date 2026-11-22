# ZCode & Codex Hyacine Theme ("Eye of Twilight" Suite)

[![License: MIT](https://img.shields.io/badge/License-MIT-e88ca5.svg)](LICENSE)
[![Target: ZCode & Codex](https://img.shields.io/badge/Target-ZCode_%7C_Codex_CLI_%7C_Windows_Terminal-7bdcb5)](https://github.com/meat-daemon-404/zcode-hyacine-theme)

[简体中文](README.md) | [English](README.en.md)

> A cohesive developer theme suite inspired by **Hyacine (Eye of Twilight)** & Little Ica from *Honkai: Star Rail*, designed for **ZCode Desktop**, **Codex CLI**, and **Windows Terminal**. Combines blossom pink (`#F4A7B9`), celadon mint (`#7BDCB5`), twilight gold (`#F6D365`), and deep night slate for high-contrast, low-fatigue coding sessions.

## Repository Structure

```text
zcode-hyacine-theme/
├── zcode/                    # ZCode Desktop CDP theme injector & glassmorphism stylesheet
│   ├── inject.js             # Automated Chrome DevTools Protocol (CDP) injector
│   └── hyacine.css           # Core theme variables, animations & backdrop styling
├── codex/                    # Codex CLI & terminal color profiles
│   ├── hyacine-dusklight.tmTheme
│   └── windows-terminal.json # Windows Terminal color scheme
├── icon/
│   └── hyacine.ico           # Multi-resolution Windows shortcut icon
└── wallpapers/               # Curated HD wallpapers for ZCode & terminal backdrops
```

## Quick Start

1. **ZCode Desktop**: Launch ZCode with `--remote-debugging-port=9229` and run `node zcode/inject.js` to apply the theme and wallpaper overlay.
2. **Codex CLI**: Copy `codex/hyacine-dusklight.tmTheme` into your Codex theme directory and set `theme = "hyacine-dusklight"`.
3. **Windows Terminal**: Merge the color scheme from `codex/windows-terminal.json` into your Windows Terminal `settings.json`.

## License

Theme code and color palettes are released under the [MIT License](LICENSE). Character artwork and IP belong to HoYoverse and are shared strictly for non-commercial fan customization.
