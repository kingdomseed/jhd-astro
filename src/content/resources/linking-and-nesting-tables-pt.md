---
fullArticleAvailable: true
title: "Vincular e aninhar tabelas"
summary: "Um vínculo faz uma rolagem levar a outra."
category: "custom-tables"
order: 3
icon: "fa-slab fa-regular fa-link"
duration: "11 min de leitura"
updated: "2026-10-09"
lang: "pt"
tags: ["custom-tables", "linking", "advanced"]
keywords:
  - Vinculando tabelas
  - Aninhando tabelas
  - entryRollOn
  - tableRollOn
related:
  - custom-table-schema
  - importing-and-exporting-custom-tables
---

Um vínculo faz uma rolagem levar a outra. Quando uma tabela com vínculo é rolada, o app também pode rolar a tabela ou lista vinculada.

## Dois tipos de vínculo

- **Links de entrada** pertencem a uma entrada. O app os segue quando essa entrada é o resultado.
- **Tabelas vinculadas** pertencem à tabela inteira. Quando a tabela é rolada, o app segue as Tabelas de Significado nelas, a menos que a tabela use pesos.

## Vincular uma entrada

Em uma entrada, **Adicionar links** abre **Selecionar links de entrada**. A tela tem duas abas.

- **Tabelas** lista as Tabelas de Significado e as tabelas de Foco do Evento.
- **Listas de aventuras** lista Personagens, Tramas, Aspectos e cada lista personalizada do Diário aberto, pelo nome.

A aba Listas de aventuras também lista NPCs do PC e Tramas do PC. Um vínculo com uma delas rola a lista personalizada correspondente no Diário aberto. Se o Diário não tiver essa lista, o vínculo é ignorado. Se a lista existir mas estiver vazia, o vínculo a rola mesmo assim e mostra o resultado Choose.

No celular, o assistente de criação mantém todos os vínculos que você marcar para uma entrada. O editor de tabelas mantém todos eles.

## Vincular uma tabela inteira

**Tabelas vinculadas** fica na aba **Controles** do editor de tabelas. **Selecionar tabelas** abre **Selecionar tabelas emparelhadas**, que oferece Tabelas de Significado para adicionar. Ela também lista as tabelas de Foco do Evento que já estão vinculadas, para que você possa removê-las, mas não oferece outras tabelas de Foco do Evento.

- Escolha Tabelas de Significado. Uma tabela de Foco do Evento vinculada é ignorada quando a tabela é rolada.
- Ao rolar uma Tabela de Significado, o app não rola esses vínculos se a tabela usa pesos, ou seja, se alguma entrada tem peso acima de 1.
- No celular, o assistente de criação não consegue definir esses vínculos. Defina-os depois que a tabela for criada.

## O que acontece quando você rola

- O app segue os vínculos da entrada que saiu. Ele rola uma Tabela de significados vinculada e depois segue os vínculos dessa tabela. Ele rola uma tabela de Foco do Evento vinculada uma vez. Ele rola uma lista vinculada uma vez.
- Quando uma tabela está configurada para rolar duas vezes, o app segue só os vínculos do primeiro resultado.
- O app também rola uma vez cada Tabela de significados em **Tabelas vinculadas**, a menos que a tabela rolada use pesos.
- Uma cadeia pode descer 10 níveis abaixo da tabela que você rolou. Além disso, o resultado mostra "Max Depth Exceeded".
- Se o destino de um vínculo não for encontrado, o app o ignora e não mostra mensagem.

## Vínculos em um Evento Aleatório

Em um Evento Aleatório, o app rola cada Tabela de significados vinculada à tabela de Foco do Evento. Ele também segue os vínculos da entrada de Foco do Evento que saiu, o que pode rolar Tabelas de Significado ou listas. Um vínculo de uma entrada de Foco do Evento com outra tabela de Foco do Evento rola essa tabela e mostra o resultado junto com o Evento Aleatório.

## Vínculos em um arquivo

Em um arquivo CSV, coloque os vínculos de entrada em uma coluna `entryRollOn` e separe vários destinos com ponto e vírgula. Em JSON, os vínculos de entrada são o array `entryRollOn` de uma entrada, e os vínculos de tabela são o array `tableRollOn` da tabela.

Um vínculo guarda o id de uma tabela ou o nome de uma lista. Um vínculo com uma lista personalizada é encontrado pelo nome da lista.
