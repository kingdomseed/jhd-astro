---
title: "Notas de Lançamento Beta — Build 39"
summary: "Correções de registro de jogabilidade principal, UI de Destino refinada e controles acessíveis"
category: "Release Notes"
date: "2024-11-09"
readTime: "4 min de leitura"
isSample: false
lang: "pt"
keywords: ["beta", "notas de lançamento", "Apps Mythic GME"]
tags: ["beta", "series:beta-to-first-release", "product:apps", "build-39", "accessibility", "logging", "dice-roller", "ui"]
---

Lançado em 9 de novembro de 2024.

Este post faz parte da série Beta → Primeiro Lançamento.

## 🎯 Melhorias de Jogabilidade Principal
- “Definir Probabilidades” renomeado para “Destino” com rotulagem atualizada da Roda de Probabilidades
- Corrigida exibição e rastreamento de eventos de destino sem rolagem no log
- Registro de eventos aprimorado para:
  - Verificações de cena
  - Eventos aleatórios
  - Verificações de destino
  - Ajustes de cena

## 🎨 Atualizações de Interface
- Exibições refinadas de Fator Caos e Destino
  - Espaçamento e margens melhorados
  - Melhor escala de texto com FittedBox
  - Ritmo vertical mais consistente com layouts flexíveis
- Margens consistentes via definições de recursos compartilhados
- Ícones melhorados

## ⚡ Aprimoramentos de Acessibilidade
- Controle de roda do Seletor de Probabilidades unificado com suporte a leitor de tela
- Adicionados rótulos semânticos e navegação para:
  - Painéis de expansão de Tabelas de Significado
  - Controles do Rolador de Dados e fórmulas salvas
  - Navegação por abas
- Feedback de tecnologia assistiva melhorado

## 📱 Recursos de Usabilidade — Rolador de Dados
- Gerenciar fórmulas: editar, reordenar e excluir
- Organização e navegação de abas melhorada

## 💾 Gerenciamento de Dados & Estado
- Melhor manuseio de entrada de log
  - Exibição adequada de eventos de destino sem rolagem
  - Entradas de log sincronizadas entre diário e tela
  - Rastreamento de ajuste de cena melhorado

## 🐛 Correções de Bugs
- Restauradas entradas de log ausentes para:
  - Eventos de destino sem rolagem
  - Resultados de foco de evento
  - Eventos aleatórios
  - Ajustes de cena
- Sincronização corrigida entre diário e log visível

Nota: Esta build aborda principalmente problemas de exibição de log e acessibilidade enquanto adiciona novos recursos de gerenciamento de fórmulas do rolador de dados.
