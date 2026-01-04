---
title: "Começando com o Rolador de Dados"
summary: "Role mais rápido com o rolador de dados agnóstico de sistema."
category: "dice-roller"
order: 1
icon: "fa-slab fa-regular fa-star"
duration: "5 min de leitura"
updated: "2025-02-01"
lang: pt
tags: ["dice", "getting-started"]
keywords:
  - Rolador de dados
  - Começando
  - Rolar dados
related:
  - dice-formulas-and-customization
  - saving-and-managing-dice-formulas
---

O Rolador de Dados ajuda você a criar expressões rapidamente e ver resultados claros e legíveis. Este guia rápido mostra o básico para que você possa rolar com confiança imediatamente.

> ##### Motor de sintaxe e documentação
> O rolador usa o `dart_dice_parser` da Adventuresmith. Para a gramática completa e exemplos adicionais, veja: https://pub.dev/packages/dart_dice_parser

## O layout em resumo
- Campo de Fórmula + Botão Rolar: Digite uma fórmula (ex: `1d20+5`) e toque em Rolar.
- Botões de adição rápida: Ações de um toque para inserir dados (`d2`, `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, `d%`, `dF`), modificadores comuns (vantagem/desvantagem `kh/kl`, manter/descartar `kh/kl/-H/-L`, explodir/compor `!/!!`, rolar novamente `r/ro`, contagem `#`), e operadores (`+`, `-`, `*`, parênteses) no campo de fórmula.
  - Bônus numéricos são digitados por você após inserir o operador `+` ou `-` (por exemplo: `+2`).
- Lista de resultados: Mostra seu total e os detalhes importantes (dados mantidos, descartes, explosões, contagens). As entradas são fáceis de visualizar.

## Construa suas primeiras rolagens
1) Toque em um botão de dado (ex: `d20`) e adicione um modificador (ex: `+5`).
2) Ou digite diretamente: `1d20+5`
3) Pressione Rolar — o total aparece no topo do resultado, com um detalhamento útil abaixo.

### Exemplos comuns
- D20 + bônus: `1d20+3`
- Vantagem/Desvantagem: `2d20kh+5` (manter o mais alto) ou `2d20kl+5` (manter o mais baixo)
- Dados de dano: `2d6+3`
- Porcentagem: `1d%` (o mesmo que `1d100`)
- Dados Fudge/Fate: `4dF`

### Básico útil para tentar depois
- Manter/Descartar: `3d20kh2` (manter os 2 mais altos) ou `4d6-L` (descartar o mais baixo)
- Explodir/Compor: `4d6!` (explodir) ou `5d6!!` (compor); adicione `o` para uma vez (`!o`, `!!o`)
- Rolar novamente: `4d6r1` (rolar novamente 1s), `4d6ro<2` (rolar novamente uma vez resultados abaixo de 2)
- Contar sucessos: `6d6#>=5` (quantos 5+)
- D66 (maiúsculo): `1D66` (minúsculo `d66` é um dado de 66 lados)

Dica: Use parênteses para clareza ao misturar pools, ex: `(1d8!!+1d6!!) kh` (Traço Savage Worlds + selvagem, manter o mais alto).

## Salvando e gerenciando fórmulas
- Salvar Fórmulas: Salva a expressão atual e permite nomeá-la/descrevê-la.
  - Desktop: botões aparecem acima do campo de fórmula.
  - Mobile: botões aparecem abaixo do rolador.
- Gerenciar Fórmulas: Importar/Exportar, reordenar, renomear e excluir.
  - Importar mescla um arquivo JSON em sua lista Salva.
  - Colocação manual requer o nome de arquivo exato `saved_formulas.json`.

## Resultados e legibilidade
- A lista de resultados destaca o total e detalhes importantes (dados mantidos, dados descartados, explosões, contagens) para que você não precise analisar paredes de texto.
- Nomes curtos e modificadores simples mantêm as fórmulas legíveis; adicione contexto na descrição da entrada Salva quando salvar.

## Guias relacionados
Veja a seção de Guias Relacionados na parte inferior desta página.
