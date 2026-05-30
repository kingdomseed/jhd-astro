---
title: "v1.5.2-v1.5.3 — Markdown e Descrições"
summary: "Descrições de entrada, Markdown no Diário de Aventura, Tabelas Personalizadas mais inteligentes, localização, recuperação de armazenamento e ajustes de privacidade."
category: "Release Notes"
date: "2025-08-27"
readTime: "6 min de leitura"
isSample: false
lang: "pt"
keywords: ["notas de lançamento", "Apps Mythic GME"]
tags: [
  "release",
  "v1.5.3",
  "v1.5.2",
  "product:apps",
  "custom-tables",
  "markdown",
  "localization",
  "storage",
  "analytics",
  "accessibility",
  "performance"
]
---

Lançado em 27 de agosto de 2025.

As versões v1.5.2-v1.5.3 focaram em resultados de tabela mais ricos, Tabelas
Personalizadas mais confiáveis e um caminho de recuperação mais seguro para
armazenamento no desktop. A atualização também refinou localização,
acessibilidade, verificação de compra e consentimento de analytics no app.

## Destaques

- Tabelas de Significado e Foco de Evento podem mostrar descrições opcionais
  abaixo de cada resultado.
- Entradas no Diário de Aventura podem renderizar Markdown vindo de Tabelas de
  Significado, Foco de Evento e Listas.
- Tabelas Personalizadas ganharam entradas multilinha, intervalos que se
  expandem automaticamente e importação/exportação mais forte.
- Versões desktop receberam um caminho de recuperação mais seguro quando a
  pasta Documentos está ausente ou indisponível.

## Adicionado

- Campos opcionais `description` para entradas de Tabelas de Significado e Foco
  de Evento, exibidos nos resultados de rolagem e no Diário de Aventura.
- Renderização de Markdown para resultados de tabelas e listas no Diário de
  Aventura.
- Suporte ao alemão em Tabelas Personalizadas, Configurações, editor, mensagens
  de erro, rótulos de acessibilidade e dicas de Recursos Expandidos.
- Opções separadas `es_ES` e `es_MX` para espanhol da Espanha e do México.
- Consentimento de analytics na primeira execução no iOS e macOS.

## Alterado

- A edição de Tabelas Personalizadas agora aceita quebras de linha e texto em
  múltiplas linhas.
- Tabelas podem expandir de 1-20 para 1-100 quando novas entradas passam do
  intervalo atual, com suporte para desfazer e opção de não expandir
  automaticamente de novo.
- Importação/exportação em CSV, PSV, TXT, JSON e Foundry VTT preserva
  descrições de entrada quando elas existem.
- Configurações de idioma agora separam traduções oficiais de traduções apenas
  de interface.
- Windows, macOS e Linux agora bloqueiam a inicialização quando a pasta
  Documentos está indisponível e pedem para o jogador escolher uma pasta, em vez
  de usar um fallback silencioso.
- Verificações de recibo de compra ficaram mais confiáveis no iOS e macOS.
- Rastreamento de telas e consentimento de analytics foram ajustados para manter
  o rastreamento atrás da configuração de analytics.

## Corrigido

- Tabelas de Significado e Tabelas Personalizadas ficaram mais resistentes a
  intervalos de valor único, intervalos de largura zero, recálculo e dados
  inválidos.
- O ícone de copiar reseta corretamente após novas rolagens no iPad.
- Descrições de Tabelas Personalizadas agora persistem pelo app, pelo
  armazenamento e pelo caminho de restauração.
- "Editar Nova Cena Automaticamente" abre o editor de forma mais consistente no
  iPad.
- Importações em CSV, PSV e TXT relatam arquivos malformados com mais clareza.
- Perguntas de Destino restauram com mais confiabilidade ao importar diários do
  iOS para Android ou Boox.

## Problemas Conhecidos

- Algumas tabelas de usuário malformadas podem continuar em quarentena até que
  o JSON seja corrigido ou a tabela seja reimportada.
- Descrições de entrada exigem o schema de tabela mais recente; tabelas antigas
  podem precisar ser atualizadas antes que as descrições apareçam.
