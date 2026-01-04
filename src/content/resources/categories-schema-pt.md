---
title: "Esquema de Categorias"
summary: "Defina e estenda o registro de categorias para Tabelas Personalizadas (ícones, rótulos, ordem)."
category: "advanced"
order: 4
icon: "fa-slab fa-regular fa-sort"
duration: "Referência"
updated: "2025-09-21"
lang: "pt"
tags: ["schema", "categories", "custom-tables", "reference"]
keywords:
  - Esquema de categorias
  - JSON
  - Tabelas personalizadas
downloads:
  - label: "Esquema de Categorias"
    href: "/downloads/categories.schema.json"
    format: "JSON"
  - label: "Modelo de Categorias"
    href: "/downloads/categories_template.json"
    format: "JSON"
  - label: "Exemplo de Categorias"
    href: "/downloads/categories_sample.json"
    format: "JSON"
related:
  - organizing-custom-tables
  - getting-started-with-custom-tables
---

## Em Português Claro

Categorias fornecem nomes e ícones para grupos de tabelas. O app vem com itens integrados; você adiciona os seus ao lado deles.

## Estrutura Raiz

```json
{
  "defaultCategories": [ /* integrados */ ],
  "categories": [ /* suas categorias personalizadas */ ]
}
```

- `defaultCategories`: lista integrada empacotada com o app; você tipicamente não edita estes
- `categories`: suas adições personalizadas; adicione, renomeie ou remova aqui sem tocar nos integrados

## Campos TableCategoryInfo

- `id` (string em kebab-case)
- `displayName` (string)
- `iconKey` (string; chave de registro de ícone do app)
- `sortOrder` (inteiro)
- `isBuiltIn` (booleano)
- Opcional: `description` (string), `displayNameTranslations` (objeto)

## Ciclo de vida no app

- Primeira execução: o app copia um `categories.json` base para seus Documentos (meaning_tables/categories.json)
- Integrados vivem em `defaultCategories` e podem ser restaurados com "Restaurar padrões"
- Adicione suas próprias categorias apenas ao array `categories`

## Downloads

Veja a seção de Downloads no final desta página para os arquivos.

## Relacionado

- Dicas de organização e primeiros passos: "Começando com Tabelas Personalizadas", "Organizando Tabelas Personalizadas"
- Esquemas de tabelas: "Esquema de Tabela Personalizada"
