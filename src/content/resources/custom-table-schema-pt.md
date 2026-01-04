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

## Português Claro

Nenhuma programação necessária. Esta página lista nomes de campos usados por importações/exportações e por usuários avançados que mantêm JSON diretamente.

## Tabela de Significado (v3)

Chaves obrigatórias
- `id` (string em snake_case)
- `schemaVersion` = 3
- `tableType` = "meaning-table"
- `rangeStart` (int), `rangeEnd` (int)
- `categoryId` (string em kebab-case)
- `displayName` (string)
- `entries` (array)

Campos de tabela opcionais
- `description`, `descriptionTranslations`, `displayNameTranslations`
- `defaultLanguage` (string, ex., `"en"`)
- `isBuiltIn`, `isUserCreated` (buleanos)
- `source` (string), `tags` (array de strings)
- `tableRollOn` (array de alvos de tabela/lista)
- `data` (objeto para extensões)
- `dice` (legado; ignorado pelo app atual)

Campos de entrada
- `range` [início, fim] (obrigatório)
- `result` (string, obrigatório)
- Opcional: `description`, traduções, `tags`, `entryRollOn`, `disabled`, `data`, `weight` (presente no esquema, não usado pelo app ainda)

Regras de validação
- Entradas devem cobrir `[rangeStart..rangeEnd]` exatamente uma vez; sem lacunas/sobreposições
- Entradas desativadas (ou entradas com `[0,0]`) são ignoradas para cobertura

JSON Mínimo
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
- `id`, `schemaVersion` = 3
- `tableType` = "event-focus"
- `rangeStart`, `rangeEnd`
- `categoryId` = "event-focus"
- `displayName`, `entries`

Campos de tabela opcionais
- `displayNameTranslations`, `description`, `descriptionTranslations`
- `defaultLanguage`, `isBuiltIn`, `isUserCreated`, `source`, `tags`, `tableRollOn`, `data`

Campos de entrada
- `range` [início, fim], `result`
- Opcional: `description`, traduções, `tags`, `entryRollOn`, `action`, `additionalRolls`, `disabled`, `data`, `weight` (presente no esquema, não usado ainda)

JSON Mínimo
```json
{
  "id": "event_focus_core",
  "schemaVersion": 3,
  "tableType": "event-focus",
  "rangeStart": 1,
  "rangeEnd": 100,
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

Nota: Tabelas com peso aparecem no esquema para compatibilidade futura, mas o app não usa pesos ainda.

## Relacionado

- Primeiros passos e melhores práticas: "Começando com Tabelas Personalizadas", "Organizando Tabelas Personalizadas"
- Formatos de arquivo e mapeamento Foundry: "Importando & Exportando Tabelas Personalizadas"
