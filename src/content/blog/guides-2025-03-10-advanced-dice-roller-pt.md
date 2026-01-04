---
title: "Rolador de Dados Avançado — Notação & Dicas"
summary: "Notação de dados para usuários avançados para Apps Mythic GME, com fórmulas salvas e operações avançadas"
category: "Guides"
date: "2025-03-10"
readTime: "7 min de leitura"
isSample: false
lang: "pt"
keywords: ["guia", "rolador de dados", "referência", "Apps Mythic GME"]
tags: ["guide", "product:apps", "dice-roller", "notation", "reference", "advanced"]
---

Em 10 de Março de 2025 — O Rolador de Dados incluído nos apps é bastante avançado, especialmente se você investir algum tempo para digitar e salvar fórmulas que são específicas para seu jogo. Esta é uma implementação do Dart Dice Parser e o texto abaixo é adaptado da página de suporte deles para conveniência.

> Dica: Salve fórmulas comuns no app para que estejam a um toque de distância durante o jogo.

## Notação de dados

### Exemplos

- `2d20 #cf #cs` — rola 2d20, resultado incluirá contagens de sucessos críticos (20) e falhas (1)
- Vantagem
  - `2d20-L` — descarta o menor
  - `2d20k`, `2d20kh` — mantém o maior
- Desvantagem
  - `2d20-H` — descarta o maior
  - `2d20-kl` — mantém o menor
- `(2d10+3d20)-L3` — rola 2d10 e 3d20, combina as duas listas de resultados e descarta os 3 menores resultados
- `20d10-<3->8#` — rola 20 d10, descarta qualquer menor que 3 ou maior que 8 e conta o número de dados restantes

### Notação suportada

- `2d6` — rola 2 dados de 6 lados
- Variações especiais de dados:
  - `4dF` — rola 4 dados fudge (lados: `[-1, -1, 0, 0, 1, 1]`)
  - `1d%` — dados percentuais (equivalente a `1d100`)
  - `1D66` — D66 (`1d6*10 + 1d6`) — use maiúsculo `D66`
  - `2d[2,3,5,7]` — valores de face personalizados

#### Dados explosivos
- `4d6!` — explode no máximo (6)
- `4d6!=5` ou `4d6!5` — explode no 5
- `4d6 !>=4` / `!<=2` / `!>5` / `!<2`
- Apenas uma explosão: `!o` (ex., `4d6 !o<5`)

#### Dados compostos
Como explosivos, mas rolagens adicionais são somadas como um único resultado.
- `5d6 !!` — composto
- `5d6!!=5` ou `5d6!!5`
- `5d6 !!>=4` / `!!<=4` / `!!>5` / `!!<3`
- Apenas uma vez: `!!o` (ex., `5d6 !!o<2`)

#### Re-rolando dados
- `4d4 r2` — re-rola qualquer resultado `=2`
- `4d4 r=2`, `r<=2`, `r>=3`, `r<2`, `r>3`
- Re-rola uma vez: `ro` (ex., `4d4 ro<2`)

#### Mantendo / Descartando dados
- Mantendo: `3d20 k2`, `kh2`, `kl2`
- Descartando: `4d6 -H`, `-L`, `-H2`, `-L2`, `->5`, `-<2`, `->=5`, `-<=2`, `-=1`

Notas:
- Operadores de descartar têm precedência maior que aritmética: `4d10-L2+2` == `(4d10-L2)+2`
- Descartar não é subtração. `4d6 - 3` subtrai 3; `4d6 -L` descarta o menor.

#### Cap / Clamp (Limitar)
- `4d20 C<5` — muda qualquer valor `<5` para 5
- `4d20 C>15` — muda qualquer valor `>15` para 15

#### Pontuando rolagens de dados
- Contagem: `4d6 #>3`, `#<3`, `#>=5`, `#<=2`, `#=5`
- Sucessos/Falhas sem descartar dados:
  - `6d6 #f<=2 #s>=5 #cs6 #cf1`
  - Retorna metadados com sucessos/falhas e criticos

A ordem importa. Exemplo: `2d20 kh #cf #cs` descarta o 1 antes de contar; mova contagens para antes se necessário (ex., `2d20 #cf #cs kh`).

#### Aritmética
- Parênteses para ordem de operações.
- Adição pode somar inteiros ou agregar resultados de rolagem: `(5d6+5d10)-L2`.
- `*` multiplicar; `-` subtrair; divisão não é suportada.

## Dicas de fórmulas salvas
- Organize rolagens comuns por atividade (combate, viagem, exploração).
- Use rótulos curtos para que caibam e sejam escaneáveis.
- Agrupe por sistema de jogo se você joga múltiplos sistemas.

## Referências
- Projeto Dart Dice Parser: https://pub.dev/packages/dart_dice_parser
- Repositório GitHub: https://github.com/greymour/dart_dice_parser
