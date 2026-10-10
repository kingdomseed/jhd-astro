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
- iconKey (string). O arquivo incluído usa chaves como dice, user, map, book e question. Uma chave que o app não conhece mostra um ícone de ponto de interrogação.
- sortOrder (inteiro, números menores primeiro). As categorias criadas no app recebem 900, e você só pode mudar a ordem editando este arquivo.
- `isBuiltIn` (booleano)
- Opcional: `description` (string), `displayNameTranslations` (objeto)

Todo item precisa de id, displayName, iconKey, sortOrder e isBuiltIn. Se algum estiver faltando ou tiver o tipo errado, o app não consegue carregar nenhuma categoria do arquivo e tenta salvar uma cópia chamada invalidated-categories com data e hora.

## Ciclo de vida no app

- Cópia da base: com premium, o app pode copiar um `categories.json` base para seu local de armazenamento atual (meaning_tables/categories.json), que pode ser a pasta do próprio app, uma pasta personalizada ou o iCloud. Normalmente ele mantém um arquivo existente em vez de sobrescrevê-lo.
- As categorias embutidas podem ser restauradas com Redefinir categorias para os padrões em Configurações de tabelas. Categorias cujo isBuiltIn é false são mantidas.
- Defina isBuiltIn como false nas suas próprias categorias. O app se guia por essa marcação, não pelo array, e move cada item para o array correspondente na próxima vez que salvar.

## Downloads

Veja a seção de Downloads no final desta página para os arquivos.

## Relacionado

- Dicas de organização e primeiros passos: "Começando com Tabelas Personalizadas", "Organizando Tabelas Personalizadas"
- Esquemas de tabelas: "Esquema de Tabela Personalizada"
