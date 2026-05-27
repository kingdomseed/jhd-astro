---
title: "Importando e Exportando Fórmulas Salvas"
summary: "Importe fórmulas de outros jogadores e faça backup das suas."
category: "dice-roller"
order: 3
icon: "fa-slab fa-regular fa-exchange"
duration: "5 min de leitura"
updated: "2025-09-21"
lang: "pt"
tags: ["dice", "formulas", "import", "export"]
keywords:
  - Fórmulas Salvas
  - Importar
  - Exportar
  - JSON
related:
  - saving-and-managing-dice-formulas
  - formula-schema
---

Esta página reúne o essencial para trazer Fórmulas Salvas para o app e exportar as suas para segurança ou compartilhamento. Se você quer aprender a construir fórmulas ou gerenciar a lista, veja os guias relacionados abaixo.

## Onde encontrar

- Abra o Rolador de Dados.
- Use os controles na tela:
  - Desktop: botões "Salvar Fórmulas" e "Gerenciar Fórmulas" no painel do Rolador de Dados.
  - Celular: botões "Salvar Fórmulas" e "Gerenciar Fórmulas" abaixo do rolador.

## Importar

- Toque em "Gerenciar Fórmulas" → Importar e escolha um arquivo JSON.
- A importação mescla entradas em sua lista existente (se uma opção de substituição for oferecida, escolha com cuidado; mesclar é mais seguro).
- Nomes de arquivo: A importação aceita qualquer nome de arquivo. Se você colocar um arquivo manualmente em vez de importar, ele deve ser nomeado `saved_formulas.json`.

Formatos suportados
- Arquivo envolvido canônico (recomendado):
```json
{
  "formulas": [
    { "formula": "2d20kh+5", "name": "Advantage +5", "description": "D&D 5e attack check" }
  ],
  "schemaVersion": 1
}
```
- Compatibilidade: O app aceita um array de nível superior ou um único objeto de fórmula na importação e normaliza para o formato envolvido ao exportar.

## Exportar

- Toque em "Gerenciar Fórmulas" → Exportar para baixar um arquivo JSON que você pode fazer backup ou compartilhar.
- Colocação manual: Se você não usar Importar/Exportar e soltar um arquivo à mão, mantenha o nome de arquivo exato `saved_formulas.json` para que o app possa encontrá-lo.

## Downloads iniciais

Conjuntos de fórmulas prontos para importar para sistemas populares (amigáveis para mesclagem):

- D&D 5e: [Baixar](/downloads/formulas_dnd5e.json)
- Pathfinder 2e: [Baixar](/downloads/formulas_pf2.json)
- Shadowrun: [Baixar](/downloads/formulas_shadowrun.json)
- Blades in the Dark: [Baixar](/downloads/formulas_blades.json)
- Savage Worlds: [Baixar](/downloads/formulas_savage_worlds.json)
- Year Zero Engine (parcial): [Baixar](/downloads/formulas_year_zero.json)
- Vampire V5: [Baixar](/downloads/formulas_vampire_v5.json)
- PbtA: [Baixar](/downloads/formulas_pbta.json)
- Fate Core: [Baixar](/downloads/formulas_fate.json)
- Call of Cthulhu 7e: [Baixar](/downloads/formulas_coc7e.json)
- Cypher: [Baixar](/downloads/formulas_cypher.json)
- Warhammer (pools de d6): [Baixar](/downloads/formulas_warhammer_d6.json)
- Lancer: [Baixar](/downloads/formulas_lancer.json)
- Ironsworn: [Baixar](/downloads/formulas_ironsworn.json)
- Starforged: [Baixar](/downloads/formulas_starforged.json)
- Dungeon Crawl Classics: [Baixar](/downloads/formulas_dcc.json)
- The One Ring (aproximação): [Baixar](/downloads/formulas_one_ring.json)

Dica: Use Importar para mesclar estes em sua lista atual. A colocação manual requer o nome de arquivo `saved_formulas.json`.

## Melhores práticas

- Mantenha nomes curtos e descritivos; adicione contexto nas descrições.
- Faça backup antes de grandes importações para que você possa reverter facilmente.
- Prefira o formato envolvido canônico para compartilhamento (inclui `formulas` e `schemaVersion`).

> ##### Motor de sintaxe e docs
> O rolando é alimentado pelo dart_dice_parser da Adventuresmith. Para a gramática completa e exemplos adicionais, veja: https://pub.dev/packages/dart_dice_parser

## Guias relacionados

Veja a seção de Guias Relacionados no final desta página.
- Salvar, carregar, importar, exportar (passo a passo da UI): "Salvando e Gerenciando Fórmulas de Dados"
- Referência de estrutura de arquivo (esquema JSON): "Esquema de Fórmulas"
