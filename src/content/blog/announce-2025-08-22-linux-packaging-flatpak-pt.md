---
title: "Mudanças no Empacotamento Linux — Flatpak Daqui para Frente"
summary: "Flatpak torna-se primário; AppImage descontinuado; DEB/RPM descontinuados"
category: "Announcement"
date: "2025-08-22"
readTime: "4 min de leitura"
isSample: false
lang: "pt"
tags: [
  "announcement",
  "product:digital",
  "linux",
  "flatpak",
  "steam",
  "steamdeck",
  "appimage",
  "deb",
  "rpm",
  "packaging",
  "sticky"
]
keywords: ["anúncio", "Flatpak", "Linux", "empacotamento", "Steam", "Steam Deck", "AppImage", "DEB", "RPM"]
---

> Atualização rápida sobre o suporte Linux para Mythic GME Digital.

## TL;DR
- **AppImage:** Descontinuado.
- **DEB/RPM:** Descontinuados.
- **Flatpak:** Maneira primária de instalar no Linux daqui para frente.

## O que está mudando
- **AppImage foi descartado.** Builds recentes têm sido não confiáveis. v1.4.7 permanecerá disponível como uma opção legada por um tempo, mas novas atualizações não terão AppImage como alvo.
- **DEB e RPM foram descartados.** Esses formatos frequentemente quebram entre versões de distro e levam tempo extra para manter.
- **Flatpak é o foco.** Ele roda no Ubuntu/Debian, Fedora/openSUSE/RHEL, Arch e SteamOS com menos problemas de dependência.

## Steam
Quando o jogo chegar no Steam, ele será enviado como uma **build nativa de Linux**. O Steam o executará em seu runtime Linux para que funcione de forma limpa no SteamOS/Deck.

## Se você é novo no Flatpak
Algumas distros já incluem Flatpak. Em outras (como Ubuntu), há uma configuração simples de uma única vez. Manterei passos de instalação claros na página do jogo.

### Guia de Instalação Flatpak (Linux)
Siga os passos para sua distro, então instale o arquivo `.flatpak` (ex., `mythicgmedigital.flatpak`).

#### Ubuntu 22.04 / 24.04 / Debian 12 / 11
```bash
sudo apt update 
sudo apt install -y flatpak 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

#### Arch Linux / Manjaro / EndeavourOS
```bash
sudo pacman -S --noconfirm flatpak 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

#### openSUSE Leap / Tumbleweed
```bash
sudo zypper install -y flatpak 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

#### Fedora 40 / 41 / 42
```bash
sudo dnf install -y flatpak 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

#### RHEL 9 / CentOS Stream 9 / Rocky 9 / AlmaLinux 9
```bash
sudo dnf install -y flatpak 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

### Instale o arquivo `.flatpak` (todas as distros)
Assume que você baixou `mythicgmedigital.flatpak` para sua pasta atual. O nome do arquivo pode diferir.
```bash
# Instalar para seu usuário (recomendado)
flatpak install --user ./mythicgmedigital.flatpak
# O Flatpak buscará o runtime necessário do Flathub se necessário.
```

### Execute o app
```bash
# Opção A: do menu do seu desktop (após instalação)
# Opção B: do terminal
# Encontre o ID do app (substitua "mythic" por parte do nome do app se necessário)
flatpak list --app | grep -i mythic
# Então execute-o (substitua <APP_ID> pelo ID exato mostrado acima)
flatpak run <APP_ID>
```

### Atualizar / Desinstalar (opcional)
```bash
# Atualizar todos os apps e runtimes Flatpak
flatpak update
# Desinstalar o app (substitua <APP_ID> como acima)
flatpak uninstall <APP_ID>
# Remover runtimes não usados
flatpak uninstall --unused
```

### Verificações rápidas (solução de problemas)
```bash
# Confirmar que o Flatpak está instalado
flatpak --version
# Confirmar que o Flathub foi adicionado
flatpak remotes
```

### Links de referência
- Configuração do Flatpak por distro: https://flatpak.org/setup/
- Instalando aplicações: https://docs.flatpak.org/en/latest/using-flatpak.html#installing-applications
- Flathub (catálogo de apps): https://flathub.org/
- Arch Wiki — Flatpak: https://wiki.archlinux.org/title/Flatpak
- openSUSE — Portal Flatpak: https://en.opensuse.org/Portal:Flatpak
- Fedora — Configuração Flatpak: https://flathub.org/setup/Fedora
- Linux Mint — Configuração Flatpak: https://flathub.org/setup/Linux%20Mint

## Eu quero sua opinião
Se você depende de `.deb` ou `.rpm`, por favor responda com:
- Sua distro + versão
- Qual formato você usa
- Por que o Flatpak não funcionaria para você

Essa mudança deve reduzir quebras estranhas e permitir que atualizações sejam lançadas mais rápido. Obrigado por todo o teste e feedback no Linux — continuem mandando!
