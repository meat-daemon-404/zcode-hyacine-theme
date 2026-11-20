# zcode-hyacine-theme 🌸🌙 (English Guide)

> **Hyacine Dusklight (昏光庭院)** — A complete desktop UI theme for **ZCode** and **Codex CLI / Windows Terminal**, inspired by **Hyacine (Hyacinthia / 风堇)** from *Honkai: Star Rail*.

[简体中文文档](./README.md) · [Changelog](./CHANGELOG.md)

---

## 1. Overview & Components

| Component | Path | Description |
| :--- | :--- | :--- |
| **ZCode Desktop Theme** | `zcode/` | CDP-injected translucent dusk-indigo UI theme with Hyacine voice greetings & MutationObserver string overrides |
| **Codex CLI & WT Theme** | `codex/` | Sublimetext/bat-compatible `.tmTheme` syntax highlighter, Windows Terminal color scheme + profile installer, and launch helper |
| **App Icon** | `icon/hyacine.ico` | Rounded dusk-violet icon badge + generator script for desktop/Start Menu shortcut customization |
| **4K Static Wallpaper** | `wallpapers/hyacine-static.jpg` | `2560×1440` Dusklight Courtyard backdrop |

---

## 2. Color Palette Semantics

- **Brand (`#FFB1C9` · Hyacinth Pink)**: Hyacine's hair & hyacinth blossoms — primary accents, active focus rings, and interactive highlights.
- **Accent (`#8ED4CF` · Sky Cyan)**: Breeze & sky — file nodes, command badges, and secondary telemetry indicators.
- **Warning (`#F0A24E` · Dusklight Gold)**: Aquila's twilight glow — warnings, usage heatmaps, and attention badges.
- **Surfaces & Typography**: Four-tier lavender-white text hierarchy over deep translucent dusk-indigo glass surfaces.

---

## 3. Quick Start

### A. ZCode Desktop Client
Follow the step-by-step CDP injection and shortcut setup in [`README.md`](./README.md) to launch ZCode with the `zcode/` theme script and custom `icon/hyacine.ico`.

### B. Codex CLI & Windows Terminal
1. Run the installer script under `codex/` to register the **Hyacine Dusklight** color scheme and Windows Terminal profile.
2. Add `tui.theme` in your Codex `config.toml` pointing to the bundled `.tmTheme` file.

---

## 4. License

Released under the [MIT License](./LICENSE). Fan-made non-commercial project; character intellectual property belongs to HoYoverse / miHoYo.
