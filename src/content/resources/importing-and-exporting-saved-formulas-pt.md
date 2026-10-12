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
  - Desktop: botões "Salvar Fórmula" e "Gerenciar Fórmulas" no painel do Estúdio de Dados.
  - Abra o Estúdio de Dados. No celular, Salvar Fórmula e Gerenciar Fórmulas são botões abaixo do campo da fórmula; em um tablet ou computador, ficam acima dele.

## Importar

- Toque em "Gerenciar Fórmulas" → Importar e escolha um arquivo JSON.
- Importar adiciona todos os itens do arquivo ao final da sua lista. Não há opção de substituir nem verificação de duplicatas.
- Nomes de arquivo: A importação não exige um nome de arquivo específico. Nos apps nativos, o arquivo precisa terminar em .json (com letras maiúsculas ou minúsculas). Na web, o seletor pede arquivos .json, mas o app não confere a extensão separadamente. O nome do arquivo não garante que o conteúdo seja válido. Se você colocar um arquivo manualmente em vez de importar, ele deve ser nomeado `saved_formulas.json`.

Formatos suportados
- Arquivo envolvido canônico (recomendado):
```json
{
  "formulas": [
    { "formula": "2d20kh+5", "name": "Advantage +5", "description": "D&D 5e attack check" }
  ],
  "version": "1.0",
  "schemaVersion": "1"
}
```
- Um arquivo exportado tem "version": "1.0" e "schemaVersion": "1", ambos como texto. Importar ignora os dois campos.
- Compatibilidade: o app também aceita um array de nível superior com objetos de fórmula. Um único objeto de fórmula sozinho é rejeitado, então coloque-o dentro de um array. Exportar sempre grava o formato envolvido.

## Exportar

- Toque em "Gerenciar Fórmulas" → Exportar para baixar um arquivo JSON que você pode fazer backup ou compartilhar.
- Colocação manual: Se você colocar um arquivo manualmente, nomeie-o saved_formulas.json e coloque-o na pasta formulas dentro da pasta de armazenamento do app. Esse arquivo é sua lista inteira. Se o app não conseguir lê-lo, pode carregar em seu lugar uma cópia de backup legível, quando houver, e carregar essa cópia não altera seu arquivo.

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
- Exporte antes de uma importação grande para guardar uma cópia da sua lista. Importar essa cópia de volta na mesma lista adiciona todas as fórmulas de novo como itens separados, porque Importar só adiciona itens e não pula duplicatas.
- Prefira o formato envolvido canônico para compartilhamento (inclui `formulas` e `schemaVersion`).

> ##### Motor de sintaxe e docs
> O rolador usa o mythic_dice_parser 8.1.0, uma versão própria do app derivada do dart_dice_parser da Adventuresmith. Para a gramática original e exemplos adicionais, veja: https://pub.dev/packages/dart_dice_parser (essa documentação pode não corresponder exatamente à gramática atual do app).

## Guias relacionados

Veja a seção de Guias Relacionados no final desta página.
- Salvar, carregar, importar, exportar (passo a passo da UI): "Salvando e Gerenciando Fórmulas de Dados"
- Referência de estrutura de arquivo (esquema JSON): "Esquema de Fórmulas"
