---
title: "Esquema de Fórmulas"
summary: "Referência para o formato JSON de Fórmulas Salvas com um exemplo mínimo e downloads locais."
category: "advanced"
order: 2
icon: "fa-slab fa-regular fa-map"
duration: "Referência"
updated: "2025-02-01"
lang: "pt"
tags: ["schema", "formulas", "reference", "download"]
keywords:
  - Esquema
  - Fórmulas salvas
  - JSON
  - Download
downloads:
  - label: "Esquema de Fórmulas Salvas"
    href: "/downloads/saved_formulas.schema.json"
    format: "JSON"
  - label: "Modelo Vazio"
    href: "/downloads/saved_formulas_template.json"
    format: "JSON"
  - label: "Exemplo Preenchido"
    href: "/downloads/saved_formulas_sample.json"
    format: "JSON"
related:
  - saving-and-managing-dice-formulas
  - dice-formulas-and-customization
---

## Visão Geral

Esta página documenta o formato JSON para Fórmulas Salvas para que seus arquivos possam ser validados e compartilhados entre dispositivos ou ferramentas. Para um passo a passo prático de salvar, carregar, importar e exportar fórmulas da UI, veja [Salvando e Gerenciando Fórmulas de Dados](/pt/resources/saving-and-managing-dice-formulas/).

Português Claro: Você não precisa saber código para usar isso. "JSON" é apenas um arquivo de texto estruturado que o app lê e escreve, e o "esquema" é um livro de regras para ferramentas verificarem se um arquivo parece correto. A maioria dos jogadores pode ignorar os detalhes abaixo.

## Downloads

Veja a seção de Downloads no final desta página para arquivos.

Importante: Por enquanto, não renomeie o arquivo. O app espera que o nome do arquivo seja `saved_formulas.json`. (Sacos de Dados permitirão nomes personalizados mais tarde.)

## Formato (canônico)

Fórmulas Salvas são armazenadas como um objeto envolvido:

- `formulas` (array): A lista de fórmulas salvas.
- `version` (string, opcional): Versão do arquivo que você mantém para seu próprio rastreamento.
- `schemaVersion` (número): Versão do formato usada pelo app (ex., 1).

### Campos do objeto de fórmula

- `formula` (string obrigatória): Expressão de dados, não vazia.
- `name` (string opcional): Rótulo de exibição; padroniza para `formula` se ausente.
- `description` (string opcional): Contexto extra.
- `dateAdded` (string ISO8601 opcional): Carimbo de data/hora de quando criado.
- `id` (string opcional): Identificador único (geralmente gerado pelo app).

### Esqueleto mínimo

```json
{
  "formulas": [
    { "formula": "2d6+3", "name": "Sword attack" }
  ],
  "schemaVersion": 1
}
```

### Compatibilidade

- Importações aceitam formas mais antigas (um array de nível superior ou um único objeto de fórmula). O app normaliza para o formato envolvido mostrado acima ao exportar.
