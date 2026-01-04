---
title: "v1.4.5 — Português & Sincronização iCloud"
summary: "Português completo, sincronização iCloud reconstruída, conteúdo da MM49, acessibilidade e estabilidade em todas as plataformas"
category: "Release Notes"
date: "2025-03-03"
readTime: "7 min de leitura"
isSample: false
lang: "pt"
keywords: ["notas de lançamento", "Apps Mythic GME"]
tags: [
  "release",
  "v1.4.5",
  "product:apps",
  "localization",
  "portuguese",
  "icloud",
  "android",
  "windows",
  "linux",
  "macos",
  "amazon",
  "accessibility",
  "performance"
]
---

Lançado em 3 de Março de 2025

# Mythic GME Mobile 1.4.5

## Status
- iOS / macOS Apple App Store — Lançado / Lançado
- Android Google Play — Lançado
- Amazon AppStore — Lançado
- Microsoft Store — Lançado
- Itch.io Windows — Lançado
- Itch.io Linux — Lançado
- Itch.io macOS — **Atrasado**

## Destaques
- **Suporte Completo a Português**: Tradução completa de todas as tabelas, elementos de interface e conteúdo de jogo
- **Novo Suporte a Idioma**: Suporte inicial para Espanhol, Francês e Italiano (SOMENTE UI — definido pelo SO)
- **Sincronização iCloud Melhorada**: Sincronização completamente reconstruída com backups automáticos e melhor confiabilidade
- **Novo Conteúdo**: Tabela de Atos Malignos e conteúdo da Mythic Magazine 49 (descritores de cultura, história, produção, crescimento da sociedade)
- **Acessibilidade Aprimorada**: Suporte a leitor de tela melhorado com cabeçalhos semânticos adequados
- **Bugs Críticos Corrigidos**: Problemas resolvidos em todas as plataformas
- **Melhorias de Desempenho**: Melhor eficiência de reconstrução de widget e manipulação de operação de arquivo

## Melhorias Específicas de Plataforma

### iOS e macOS
- Sincronização iCloud reescrita usando APIs FileManager nativas
- Adicionado manuseio adequado de URL de container de ubiquidade
- Implementados bookmarks com escopo de segurança para iOS
- Corrigida codificação de URL para caracteres especiais
- Adicionada tentativa automática para operações falhas
- Resiliência a erro aprimorada em operações de arquivo
- Corrigida persistência de configurações entre lançamentos

### Android
- Corrigido bug crítico de exclusão de diário no serviço de log
- Eficiência de reconstrução de widget aprimorada
- Melhor tratamento de erro de operação de arquivo
- Adicionado relatório de status de sincronização em tempo real
- Corrigida ordem reversa de log de exibição
- Desempenho de visualização de diário otimizado

### Linux
- Adicionado pacote RPM com dependências adequadas
- Criado AppImage para uso portátil
- Configurações de pacote DEB atualizadas
- Caminhos de entrada de desktop corrigidos
- Integração de sistema de arquivos aprimorada
- Configurações de build melhoradas

### Windows
- Corrigidos problemas de verificação nula de ScaffoldMessenger
- Responsividade de UI de modo desktop aprimorada
- Sistema de gerenciamento de foco melhorado
- Adicionada estrutura semântica adequada
- Corrigido manuseio de mensagem entre painéis

## Suporte a Idioma
- **Português (Brasil)**: Concluída tradução completa de todas as tabelas, elementos de interface e conteúdo de jogo
- **Espanhol, Francês, Italiano**: Adicionado suporte inicial com elementos de interface principais traduzidos (somente UI, não selecionável)
- **Infraestrutura de Localização**: Sistema de localização melhorado para suportar troca dinâmica de idioma

## Adições de Conteúdo
- **Tabela de Atos Malignos**: Nova tabela para gerar atos malignos em suas aventuras
- **Conteúdo da Mythic Magazine 49**: Adicionadas novas tabelas incluindo:
  - Descritores de Cultura
  - História
  - Produção
  - Crescimento da Sociedade
- **Todo novo conteúdo disponível em Português**: Novas tabelas totalmente traduzidas

## Correções de Bugs
- Corrigido bug crítico que poderia causar exclusão de entrada de log
- Corrigida ordem reversa de log de exibição
- Corrigidos problemas de verificação nula de ScaffoldMessenger
- Resolvidos problemas de ciclo de vida de contexto de build
- Corrigidos bugs na visualização de Destino
- Tabulação melhorada no modo desktop para melhor navegação por teclado
- Corrigidos problemas de layout na folha inferior de ajuda de dados
- Resolvidos problemas de carregamento de listas de aventura
- Corrigida funcionalidade de restauração de compra

## Melhorias Técnicas
- Migrado para GetIt para injeção de dependência
- Relatório de erro aprimorado com Sentry
- Adicionados testes de widget abrangentes
- Corrigidos problemas de ciclo de vida de contexto de build
- Eficiência de reconstrução de widget melhorada
- Tratamento de erro de operação de arquivo aprimorado
- Adicionada estrutura semântica adequada para acessibilidade
- Desempenho de visualização de diário otimizado
- Sistema de gerenciamento de foco melhorado
