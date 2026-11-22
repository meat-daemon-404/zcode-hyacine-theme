# ZCode & Codex Hyacine Theme · 风堇「晨昏之眼」主题套件

[![License: MIT](https://img.shields.io/badge/License-MIT-e88ca5.svg)](LICENSE)
[![Target: ZCode & Codex](https://img.shields.io/badge/Target-ZCode_%7C_Codex_CLI_%7C_Windows_Terminal-7bdcb5)](https://github.com/meat-daemon-404/zcode-hyacine-theme)

[简体中文](README.md) | [English](README.en.md)

> 以《崩坏：星穹铁道》角色**风堇（Hyacine · 晨昏之眼）**与小伊卡（Little Ica）为视觉灵感打造的 **ZCode 桌面端 + Codex CLI + Windows Terminal 全栈沉浸式主题套件**。融合晨曦樱粉（`#F4A7B9`）、天空薄荷青（`#7BDCB5`）、暮光金（`#F6D365`）与深邃夜空底色，兼顾长时间编码的低眩光高对比度与二次元呼吸感动效。

## 组件清单与目录结构

```text
zcode-hyacine-theme/
├── zcode/                    # ZCode 桌面端 CDP 注入主题（毛玻璃侧栏、流光边框、风堇配色与壁纸轮播）
│   ├── inject.js             # Electron / CDP 自动注入脚本
│   └── hyacine.css           # 核心视觉样式表与 CSS 变量定义
├── codex/                    # Codex CLI 语法高亮与终端配色方案
│   ├── hyacine-dusklight.tmTheme
│   └── windows-terminal.json # Windows Terminal 配色 Profile
├── icon/
│   └── hyacine.ico           # 高清多尺寸桌面快捷方式图标
└── wallpapers/               # 精选风堇与小伊卡高清壁纸集
```

## 快速安装

### 1. ZCode 桌面端主题注入

1. 启动 ZCode 时附加远程调试端口（或在快捷方式目标末尾追加 `--remote-debugging-port=9229`）。
2. 运行注入脚本：
   ```bash
   node zcode/inject.js
   ```
3. 也可以在 ZCode 开发者工具控制台中直接粘贴加载 `zcode/hyacine.css`，并可将桌面快捷方式图标替换为 `icon/hyacine.ico`。

### 2. Codex CLI 与 Windows Terminal 配色

- 将 `codex/hyacine-dusklight.tmTheme` 放入 Codex 主题目录并在配置中指定 `theme = "hyacine-dusklight"`。
- 将 `codex/windows-terminal.json` 中的 `schemes` 片段合入 Windows Terminal 的 `settings.json`。

## 许可证

本项目代码与配色方案基于 [MIT License](LICENSE) 开源；角色美术设定版权归米哈游（HoYoverse）所有，仅作非商业个人桌面美化分享。
