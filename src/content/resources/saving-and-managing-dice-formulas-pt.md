---
title: "Salvando e Gerenciando Fórmulas de Dados"
summary: "Salve, carregue, importe e exporte seu arquivo de Fórmulas Salvas—nenhuma codificação necessária."
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
  - Desktop: botões "Salvar Fórmulas" e "Gerenciar Fórmulas" no painel do Rolador de Dados.
  - Celular: botões "Salvar Fórmulas" e "Gerenciar Fórmulas" abaixo do rolador.

## O que você usará

- Modelo vazio, exemplo preenchido e esquema opcional (encontre-os na seção de Downloads abaixo)

### Nenhuma programação necessária

- "JSON" é apenas um arquivo de texto estruturado. O app cria, abre e exporta para você.
- Um "esquema" é um livro de regras para ferramentas verificarem um arquivo. Você pode ignorá-lo.
- Você nunca precisa editar JSON à mão—use os botões do app.

## Ações principais

1) Salve sua(s) fórmula(s) atual(is)
   - Toque em "Salvar Fórmulas" para adicionar a fórmula atual à sua lista Salva. Dê um nome curto e reconhecível.

2) Gerencie a lista
   - Toque em "Gerenciar Fórmulas" para reordenar ou remover entradas.
   - Fórmulas são globais (não por diário), então estão disponíveis entre sessões.

3) Exportar
   - Toque em "Gerenciar Fórmulas" → Exportar para baixar um arquivo JSON que você pode fazer backup ou compartilhar.
   - Importante: Não renomeie o arquivo; mantenha-o como `saved_formulas.json`. (Nomes personalizados serão suportados mais tarde com Sacos de Dados.)

4) Importar
   - Toque em "Gerenciar Fórmulas" → Importar e escolha um arquivo JSON.
   - Se você importar uma lista que se sobrepõe às suas entradas existentes, escolha se deseja mesclar ou substituir.

## Dicas

- Mantenha nomes curtos; adicione qualquer contexto extra na descrição.
- Você pode organizar favoritos em arquivos separados—exporte um conjunto, depois importe outro conjunto quando necessário.
- Se em dúvida, exporte primeiro para criar um backup.

## Usuários avançados

- O app entende algumas formas compatíveis na importação e exporta um formato envolvido canônico.
- Veja o [Esquema de Fórmulas](/resources/formula-schema/) para nomes de campos e um exemplo mínimo.

> ##### Motor de sintaxe e docs
> O rolando é alimentado pelo dart_dice_parser da Adventuresmith. Para a gramática completa e exemplos adicionais, veja: https://pub.dev/packages/dart_dice_parser

## Guias relacionados

- Construa expressões mais complexas e veja iniciais por sistema: [Fórmulas de Dados & Personalização](/resources/dice-formulas-and-customization/)
- Campos de referência e forma JSON: [Esquema de Fórmulas](/resources/formula-schema/)
