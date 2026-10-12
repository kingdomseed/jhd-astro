---
title: "Esquema de Tabela Personalizada"
summary: "Referência unificada da Tabela v3 para tabelas de Significado e Foco de Evento, com exemplos mínimos e downloads."
category: "advanced"
order: 3
icon: "fa-slab fa-regular fa-layer-group"
duration: "Referência"
updated: "2025-09-21"
lang: "pt"
tags: ["schema", "custom-tables", "meaning-tables", "event-focus", "reference"]
keywords:
  - Esquema de Tabela de Significado
  - Esquema de Foco de Evento
  - Tabela Unificada v3
  - JSON
downloads:
  - label: "Esquema de Significado"
    href: "/downloads/meaning_table.schema.json"
    format: "JSON"
  - label: "Esquema de Foco de Evento"
    href: "/downloads/event_focus_table.schema.json"
    format: "JSON"
related:
  - getting-started-with-custom-tables
  - importing-and-exporting-custom-tables
  - linking-and-nesting-tables
---

## Em Português Claro

Nenhuma programação necessária. Esta página lista nomes de campos usados por importações/exportações e por usuários avançados que mantêm JSON diretamente.

## Tabela de Significado (v3)

Chaves obrigatórias: id, categoryId, displayName e entries. Elas não têm valor padrão. Se você omitir as chaves opcionais, schemaVersion assume 3, tableType assume meaning-table, rangeStart assume 1 e rangeEnd assume 100.

Detalhes das chaves
- `id` (string em snake_case)
- `categoryId` (string em kebab-case)
- `displayName` (string)
- `entries` (array)
- `schemaVersion` (int), `tableType` (string)
- `rangeStart` (int), `rangeEnd` (int)

Campos de tabela opcionais
- `description`, `descriptionTranslations`, `displayNameTranslations`
- `defaultLanguage` (string, ex., `"en"`)
- isBuiltIn, isUserCreated (booleanos). Na importação, o app define isBuiltIn como false e isUserCreated como true, independentemente do que o arquivo diga.
- `source` (string), `tags` (array de strings)
- tableRollOn (array de ids de Tabelas de Significado). Qualquer outro id ou nome de lista é ignorado.
- `data` (objeto para extensões)
- `dice` (legado; ignorado pelo app atual)

Campos de entrada
- `range` [início, fim] (obrigatório)
- `result` (string, obrigatório)
- Opcional: `description`, traduções, `tags`, `entryRollOn`, `disabled`, `data`
- weight (inteiro opcional). Se algum item de uma Tabela de Significado tiver weight acima de 1, o app escolhe os resultados por peso em vez de por intervalo, e os vínculos tableRollOn da tabela não são rolados. Tabelas de Foco do Evento ignoram weight.

Regras de validação
- Entradas devem cobrir `[rangeStart..rangeEnd]` exatamente uma vez; sem lacunas/sobreposições
- Entradas desativadas (ou entradas com `[0,0]`) são ignoradas para cobertura

JSON Mínimo

Use um id de categoria que exista no seu app, por exemplo "categoryId": "custom".

```json
{
  "id": "action_basics",
  "schemaVersion": 3,
  "tableType": "meaning-table",
  "rangeStart": 1,
  "rangeEnd": 10,
  "categoryId": "actions",
  "displayName": "Action Basics",
  "entries": [
    { "range": [1, 5], "result": "Common" },
    { "range": [6, 10], "result": "Uncommon" }
  ]
}
```

## Tabela de Foco de Evento (v3)

Chaves obrigatórias
- `id`, `categoryId`, `displayName` (textos não vazios). Na importação, `categoryId` é definido como "event-focus".
- `entries` (uma lista; cada entrada precisa de `range` e `result`)

Chaves opcionais e padrões
- `schemaVersion` (padrão 3), `rangeStart` (padrão 1), `rangeEnd` (padrão 100)
- `tableType`: a importação de arquivo único usa o cartão de Foco de Evento selecionado e define o tipo depois. Em um wrapper `tables`, defina `tableType` = "event-focus" para que a tabela se identifique. Se for omitido, o cartão selecionado decide; um valor desconhecido falha.

Campos de tabela opcionais
- `displayNameTranslations`, `description`, `descriptionTranslations`
- `defaultLanguage`, `isBuiltIn`, `isUserCreated`, `source`, `tags`, `tableRollOn`, `data`

Campos de entrada
- `range` [início, fim], `result`
- Opcional: `description`, traduções, `tags`, `entryRollOn`, `disabled`, `data`, `weight` (ignorado em Tabelas de Foco do Evento)
- action, additionalRolls (armazenados e exportados, não usados na rolagem)

JSON Mínimo

Este é um exemplo reduzido, não a Tabela de Foco do Evento integrada.

```json
{
  "id": "event_focus_core",
  "schemaVersion": 3,
  "tableType": "event-focus",
  "rangeStart": 1,
  "rangeEnd": 20,
  "categoryId": "event-focus",
  "displayName": "Event Focus",
  "entries": [
    { "range": [1, 10], "result": "Remote Event" },
    { "range": [11, 20], "result": "NPC Action" }
  ]
}
```

## Downloads

Veja a seção de Downloads no final desta página para arquivos de esquema. Modelos/Exemplos estão listados em "Começando com Tabelas Personalizadas".

Observação: uma Tabela de Significado em que algum item tenha weight acima de 1 é rolada por peso. Omita weight, ou defina 1 em todos os itens, para rolar por intervalo.

## Relacionado

- Primeiros passos e melhores práticas: "Começando com Tabelas Personalizadas", "Organizando Tabelas Personalizadas"
- Formatos de arquivo e mapeamento Foundry: "Importando e Exportando Tabelas Personalizadas"
