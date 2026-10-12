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

Esta página documenta o formato JSON para Fórmulas Salvas para que seus arquivos possam ser validados e compartilhados entre dispositivos ou ferramentas. Para um passo a passo prático de salvar, carregar, importar e exportar fórmulas da UI, veja [Salvando e Gerenciando Fórmulas de Dados](/pt/resources/saving-and-managing-dice-formulas-pt/).

Em Português Claro: Você não precisa saber código para usar isso. "JSON" é apenas um arquivo de texto estruturado que o app lê e escreve, e o "esquema" é um livro de regras para ferramentas verificarem se um arquivo parece correto. A maioria dos jogadores pode ignorar os detalhes abaixo.

## Downloads

Veja a seção de Downloads no final desta página para arquivos.

Importante: Importar não exige um nome de arquivo específico. Nos apps nativos, o arquivo precisa terminar em .json (com letras maiúsculas ou minúsculas). Na web, o seletor pede arquivos .json, mas o app não confere a extensão separadamente. O nome do arquivo não garante que o conteúdo seja válido. Só o arquivo de armazenamento do próprio app precisa se chamar saved_formulas.json.

## Formato (canônico)

Um arquivo exportado é um objeto envolvente. O arquivo de armazenamento do próprio app é um array simples de objetos de fórmula.

Arquivos exportados contêm estes campos:

- `formulas` (array): A lista de fórmulas salvas.
- version (string): Exportar sempre grava "1.0". Importar ignora este campo.
- schemaVersion (string): Exportar grava "1". Importar ignora este campo.

### Campos do objeto de fórmula

- formula (string obrigatória): não pode ser vazia e precisa ser uma notação de dados válida. Se qualquer item do arquivo falhar, nada do arquivo é importado.
- `name` (string opcional): Rótulo de exibição; padroniza para `formula` se ausente.
- `description` (string opcional): Contexto extra.
- dateAdded (string ISO 8601 opcional): quando a fórmula foi criada. Na importação, um valor ausente ou ilegível passa a ser o horário da importação.
- id (string opcional): Exportar grava um id para cada fórmula, mas Importar o ignora e dá um id novo a cada fórmula importada. Importar o mesmo arquivo duas vezes adiciona dois itens separados.

### Exemplo mínimo de importação

Este é um modelo mínimo de importação, não uma exportação completa capturada. Uma exportação também inclui `description`, `dateAdded` e `id` em cada fórmula. Na importação, o `id` é ignorado e um novo é atribuído.

```json
{
  "version": "1.0",
  "schemaVersion": "1",
  "formulas": [
    { "formula": "2d6+3", "name": "Sword attack" }
  ]
}
```

### Compatibilidade

- Importar aceita o objeto envolvente mostrado acima ou um array de nível superior com objetos de fórmula. Um único objeto de fórmula sozinho é rejeitado.
