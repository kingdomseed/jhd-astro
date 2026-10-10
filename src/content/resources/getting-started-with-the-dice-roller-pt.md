---
title: "Começando com o Rolador de Dados"
summary: "Crie rolagens para vários sistemas e salve fórmulas que você usa durante o jogo."
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

O Estúdio de Dados é onde você monta e testa fórmulas de dados. No celular, abra a gaveta e toque em ESTÚDIO DE DADOS. Este guia rápido mostra o básico para que você possa rolar com confiança imediatamente.

> ##### Motor de sintaxe e documentação
> O rolador usa a versão própria do app do dart_dice_parser, do Adventuresmith. A página no pub.dev descreve o pacote original, então teste uma fórmula no app antes de confiar nela. Para a gramática completa e exemplos adicionais, veja: https://pub.dev/packages/dart_dice_parser

## O layout em resumo
- Campo de Fórmula + Botão Rolar: Digite uma fórmula (ex: `1d20+5`) e toque em Rolar.
- Botões de adição rápida: Ações de um toque para inserir dados, modificadores comuns e operadores (`+`, `-`, `*`, parênteses) no campo de fórmula. Os botões de dados são d4, d6, d8, d10, d12, d20, D100, 1D66, d2 e 4dF. Os botões de modificador são Vantagem, Desvantagem, Manter alto, Manter o mais baixo, Dados Explosivos, Composto, Rerrolar Uns, Rolar novamente ≤2, Contagem de Críticos, Limite em X e Piso em X. Digite você mesmo descartar (-H, -L), rolar de novo uma vez (ro) e contar (#).
  - Bônus numéricos são digitados por você após inserir o operador `+` ou `-` (por exemplo: `+2`).
- Feed de rolagens: cada linha mostra a fórmula, os valores finais dos dados e as contagens de sucessos e críticos quando a fórmula os marca. Ela mostra o total, a menos que você desative Mostrar total dos dados, e não lista os dados descartados. As entradas são fáceis de visualizar.

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
- Salvar Fórmula: Salva a expressão atual e permite nomeá-la/descrevê-la.
  - Desktop: botões aparecem acima do campo de fórmula.
  - Salvar Fórmula salva a fórmula atual e permite dar a ela um nome e uma descrição. No celular, os botões Salvar Fórmula e Gerenciar Fórmulas ficam abaixo do campo da fórmula; em um tablet ou computador, ficam acima dele.
- Gerenciar Fórmulas: Importar/Exportar, reordenar, renomear e excluir.
  - Importar adiciona todas as fórmulas do arquivo ao final da sua lista de Fórmulas Salvas. Não há verificação de duplicatas.
  - Se você colocar um arquivo manualmente, nomeie-o saved_formulas.json e coloque-o na pasta formulas dentro da pasta de armazenamento do app. Esse arquivo passa a ser sua lista inteira.

## Resultados e legibilidade
- A lista de resultados destaca o total e detalhes importantes (dados mantidos, contagens) para que você não precise analisar paredes de texto. Dados descartados não são listados, e os valores mantidos gerados por explosões continuam aparecendo como números comuns, sem destaque específico de explosão.
- Nomes curtos e modificadores simples mantêm as fórmulas legíveis; adicione contexto na descrição da entrada Salva quando salvar.

## Guias relacionados
Veja a seção de Guias Relacionados na parte inferior desta página.
