---
title: "Salvando e Gerenciando Fórmulas de Dados"
summary: "Salve, carregue, importe e exporte Fórmulas Salvas sem escrever código."
category: "dice-roller"
order: 2
icon: "fa-slab fa-regular fa-floppy-disk"
duration: "5 min de leitura"
updated: "2025-09-21"
lang: "pt"
tags: ["dice", "formulas", "saved-formulas", "import", "export"]
keywords:
  - Fórmulas Salvas
  - Fórmulas de dados
  - Importar
  - Exportar
  - JSON
downloads:
  - label: "Modelo Vazio"
    href: "/downloads/saved_formulas_template.json"
    format: "JSON"
  - label: "Exemplo Preenchido"
    href: "/downloads/saved_formulas_sample.json"
    format: "JSON"
  - label: "Esquema de Fórmulas Salvas"
    href: "/downloads/saved_formulas.schema.json"
    format: "JSON"
related:
  - formula-schema
  - dice-formulas-and-customization
---

## Onde encontrar

- Abra o Rolador de Dados.
- Use os controles na tela:
  - Desktop: botões "Salvar Fórmula" e "Gerenciar Fórmulas" no painel do Estúdio de Dados.
  - Abra o Estúdio de Dados. No celular, Salvar Fórmula e Gerenciar Fórmulas são botões abaixo do campo da fórmula; em um tablet ou computador, ficam acima dele.

## O que você usará

- Modelo vazio, exemplo preenchido e esquema opcional (encontre-os na seção de Downloads abaixo)

### Nenhuma programação necessária

- "JSON" é apenas um arquivo de texto estruturado. O app cria, abre e exporta para você.
- Um "esquema" é um livro de regras para ferramentas verificarem um arquivo. Você pode ignorá-lo.
- Você nunca precisa editar JSON à mão—use os botões do app.

## Ações principais

1) Salve sua(s) fórmula(s) atual(is)
   - Toque em "Salvar Fórmula" para adicionar a fórmula atual à sua lista Salva. Dê um nome curto e reconhecível.

2) Gerencie a lista
   - Toque em "Gerenciar Fórmulas" para reordenar ou remover entradas.
   - Fórmulas são globais (não por diário), então estão disponíveis entre sessões.

3) Exportar
   - Toque em "Gerenciar Fórmulas" → Exportar para baixar um arquivo JSON que você pode fazer backup ou compartilhar.
   - Você pode renomear o arquivo exportado. Importar não exige um nome de arquivo específico. Nos apps nativos, o arquivo precisa terminar em .json (com letras maiúsculas ou minúsculas). Na web, o seletor pede arquivos .json, mas o app não confere a extensão separadamente. O nome do arquivo não garante que o conteúdo seja válido.

4) Importar
   - Toque em "Gerenciar Fórmulas" → Importar e escolha um arquivo JSON.
   - Importar não pergunta nada. Adiciona todas as fórmulas do arquivo ao final da sua lista, inclusive as que você já tem.

## Dicas

- Mantenha nomes curtos; adicione qualquer contexto extra na descrição.
- Você pode organizar favoritos em arquivos separados. Importar adiciona à sua lista e nunca a substitui, então importar um segundo conjunto deixa os dois conjuntos na lista. Importar um conjunto que já está na sua lista adiciona uma segunda cópia de cada fórmula. Cada fórmula importada recebe um id novo, então Editar e Excluir em uma cópia afetam só essa cópia.
- Exporte para guardar uma cópia da sua lista. O app não consegue restaurar essa cópia por cima da lista atual, porque Importar só adiciona itens.

## Usuários avançados

- Importar aceita dois formatos: um objeto com uma lista formulas ou um array de nível superior com objetos de fórmula. Exportar sempre grava o primeiro.
- Veja o [Esquema de Fórmulas](/pt/resources/formula-schema-pt/) para nomes de campos e um exemplo mínimo.

> ##### Motor de sintaxe e docs
> O rolador usa a versão própria do app do dart_dice_parser, do Adventuresmith. A página no pub.dev descreve o pacote original, então teste uma fórmula no app antes de confiar nela. Para a gramática completa e exemplos adicionais, veja: https://pub.dev/packages/dart_dice_parser

## Guias relacionados

- Construa expressões mais complexas e veja exemplos por sistema: [Fórmulas de Dados e Personalização](/pt/resources/dice-formulas-and-customization-pt/)
- Campos de referência e forma JSON: [Esquema de Fórmulas](/pt/resources/formula-schema-pt/)
