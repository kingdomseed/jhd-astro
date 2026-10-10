---
title: Esquema de Diário
summary: Referência campo-a-campo para o formato JSON do Diário Mythic com um exemplo mínimo e downloads locais.
category: advanced
order: 1
icon: fa-slab fa-regular fa-link
duration: Referência
updated: 2025-02-01
lang: pt
tags: ["schema", "journals", "reference", "download"]
keywords:
  - Esquema de Diário
  - JSON
  - Download
  - Diário Mythic
downloads:
  - label: "Esquema de Diário (JSON)"
    href: "/downloads/journal.schema.json"
    format: "JSON"
  - label: "Modelo Vazio"
    href: "/downloads/journal_template.json"
    format: "JSON"
  - label: "Exemplo Preenchido"
    href: "/downloads/journal_sample.json"
    format: "JSON"
related:
  - guide-to-the-mythic-journals
  - sharing-adventure-journals
---
## Visão Geral

Esta página documenta as chaves canônicas para o formato de exportação do Diário Mythic e como cada campo é usado. Se você está construindo ferramentas ou validando exportações, comece aqui. Para um passo a passo prático de criação e gerenciamento de diários, veja [Guia dos Diários Mythic](/pt/resources/guide-to-the-mythic-journals-pt/).

Em Português Claro: Você não precisa saber código para usar diários. "JSON" é apenas um arquivo de texto estruturado que o app lê e escreve, e o "esquema" abaixo é um livro de regras para ferramentas validarem esses arquivos. Se você não está construindo ferramentas, pode pular os detalhes aqui com segurança.

## Downloads

Veja a seção de Downloads no final desta página para arquivos.

Dica: Após baixar o modelo vazio, faça uma cópia e renomeie de `journal_template.json` para um nome significativo (por exemplo: `minha-aventura-2025.json`). Mantenha a extensão `.json`. O modelo é um arquivo legado do esquema 1 com chaves em PascalCase, então o nome do Diário vem do campo `JournalName` dentro do arquivo, não do nome do arquivo. Defina `JournalName` antes de importar. Os arquivos que o app exporta hoje usam chaves em camelCase, como `journalName`.

## Referência de campo (chaves de exportação canônicas)

O app grava os campos de nível superior declarados do diário em camelCase, por exemplo journalName, chaosFactor, scenes e logEntries. Chaves antigas conhecidas, como JournalName em PascalCase, ainda são lidas de arquivos antigos e convertidas para os nomes atuais. Quando um arquivo importado vem de uma versão de esquema mais nova e compatível, seus campos de nível superior desconhecidos podem ser gravados de volta com a grafia original. Isso vale só para campos de nível superior, não para campos desconhecidos dentro de cenas ou entradas do registro.

- `journalName` (string): Seu nome de diário/campanha.
- `chaosFactor` (int 1–9): FC atual usado para verificações e probabilidades de evento.
- `scenes` (array de objetos): Cada cena tem:
  - `title` (string): Título opcional.
  - `sceneSummary` (string): Breve descrição.
  - `sceneChaosFactor` (int 1–9, padrão 5): FC no início da cena (instantâneo).
  - `sceneAdjustments` (array de objetos): Registros estruturados de ajuste com `range`, `description`, `result`, `additionalAdjustments` e `droppedAdjustment`.
  - O app salva uma rolagem de Ajuste de Cena como uma entrada própria do registro, com rollType Scene Adjustment e um objeto sceneAdjustment. Ele grava uma lista sceneAdjustments vazia em toda cena que cria, e essa lista não é lugar para texto livre.
  - `createdAt` (string ISO8601): Quando a cena foi criada.
- characters (array): nomes usados quando um resultado de Foco do Evento, como Ação de PNJ, pede um Personagem. A exportação usa strings, e um espaço vazio é uma string vazia. Formas de objeto legadas (`Character` ou `character`) são aceitas na importação. Em arquivos com schemaVersion 0–2, um marcador Choose vira uma string vazia; a partir do esquema 3, Choose é lido como um nome real.
- `threads` (array<string>): Lista de Tramas usadas para resultados do Mythic como "Fechar uma Trama" ou "Mover em Direção a uma Trama". Um espaço vazio é uma string vazia; formas de objeto legadas usam `Thread` ou `thread`.
- `features` (array<string>): Locais, objetos e conceitos que dão cor e contexto aos eventos. Um espaço vazio é uma string vazia; formas de objeto legadas usam `Feature` ou `feature`.
- `activatedThreadSections` / `activatedCharacterSections` / `activatedFeatureSections` (int, padrão 1): Quantas seções de 5 itens estão ativas em cada lista. O app mostra de 1 a 5 seções, então até 25 itens por lista ficam visíveis e entram nas rolagens. Esse número de 25 é a capacidade de exibição e de rolagem, não um limite de importação documentado. Arquivos antigos usam os nomes em PascalCase, como `ActivatedThreadSections`.
- `logEntries` (array de objetos): Histórico do oráculo. Campos comuns:
  - rollType é um texto livre, não uma lista fechada de valores. Exemplos produzidos pelo app atual: Fate Chart, Fate Check, Scene Check, Scene Adjustment, Random Event, Event Focus, Meaning Table, Narrative, Keyed Scene, Discovery Fate Question e General dice roll. Se rollType estiver ausente, ele é lido como Unknown.
  - question (string): o texto digitado para uma pergunta de Destino. Uma entrada de Teste de Cena guarda aqui o texto fixo Scene Check, e seu outcome contém o rótulo da cena no idioma do app, por exemplo Expected Scene em inglês.
  - `odds` (string): Probabilidade (ex., Provável, 50/50).
  - `chaosFactor` (int): FC no momento da rolagem.
  - `rollResult` (int): d100 para Tabela de Destino; total para Verificação de Destino.
  - `outcome` (string, padrão Unknown): O texto do resultado, por exemplo Yes ou Exceptional No em inglês para uma pergunta de Destino. Em uma Verificação de Cena, contém o rótulo da cena no idioma do app. O esquema não limita esse campo a uma lista fixa de valores.
  - `isSceneCheck` (bool): Verdadeiro quando a entrada é um resultado de Verificação de Cena.
  - `timestamp` (string ISO8601): Quando aconteceu. Omitido quando não tem valor.
  - Opcional: `individualDieResults`, `modifierValue`, `modifiedTotal` (detalhes da Verificação de Destino),
    `randomEvent`, `eventFocus`, `sceneAdjustment`, `sceneAdjustmentRoll`.
  - `randomEvent` (objeto): `eventFocus`, `meanings` (um mapa de rótulos em string para valores em string), `meaningDescriptions` e `linkedResults`, além dos vínculos opcionais `characterResult`, `threadResult` e `featureResult` e de um `eventFocusRoll` opcional.
  - Outros campos opcionais do registro são eventFocusRoll, sceneCheckResult, meaningTableName, discoveryExplanation, diceFormula e diceResults. meaningDescriptions e discoverySubRolls são sempre gravados como listas e podem estar vazios. diceSuccessCount, diceFailureCount, diceCriticalSuccessCount e diceCriticalFailureCount também são opcionais. Campos opcionais do registro são omitidos quando não têm valor.
- listNotes (object): anotações livres por lista, em characterNotes, threadNotes e featureNotes. É opcional em um arquivo que você importa, e a exportação o omite quando não tem valor.
- schemaVersion (int, atual = 5): a versão do esquema de dados, usada na migração. As exportações também gravam minReaderVersion (int), e o app recusa um arquivo cujo minReaderVersion seja maior que 5. Uma exportação comum grava schemaVersion 5. Um arquivo de uma versão de esquema mais nova e compatível pode manter seu schemaVersion maior ao ser gravado de volta, enquanto minReaderVersion continua 5.
- As exportações também contêm customLists, threadProgressTracks, keyedScenes, rev, base e minReaderVersion. lastCharacterRoll, lastThreadRoll e lastFeatureRoll só aparecem quando têm valor.

### Notas sobre alinhamento com Mythic

- Tipo de cena é derivado do log: a cena não tem campo de resultado. Uma entrada de log de `Scene Check` tem `isSceneCheck` verdadeiro e guarda o rótulo da cena em `outcome` e `sceneCheckResult`, no idioma do app (por exemplo Expected Scene em inglês).
- Eventos Aleatórios: Use `randomEvent.eventFocus`, `meanings`, e vínculos opcionais (`characterResult`, `threadResult`, `featureResult`).
- Mudanças de Fator Caos: Quando o FC muda para uma cena, defina `sceneChaosFactor` na cena e registre a justificativa em uma entrada de log, não em `sceneAdjustments`.
- Listas como inspiração: Listas de Aventura conduzem conexões de eventos; expanda com os campos `activated*Sections` conforme necessário (até 25 itens visíveis por lista).

## Esqueleto mínimo

Este é um exemplo mínimo com os nomes de chave atuais do esquema 5. Não é uma exportação completa: um arquivo exportado pelo app contém mais campos. Ele também é diferente do `journal_template.json` para download, que é um arquivo legado do esquema 1 com chaves em PascalCase.
```json
{
  "journalName": "My Adventure",
  "chaosFactor": 5,
  "scenes": [],
  "characters": [],
  "threads": [],
  "features": [],
  "logEntries": [],
  "schemaVersion": 5,
  "minReaderVersion": 5
}
```

Para importar um Diário, o arquivo precisa de uma chave reconhecida de nome do Diário (`journalName`, ou `JournalName` em arquivos antigos) e de uma chave de Fator Caos (`chaosFactor` ou `ChaosFactor`). Muitos outros campos têm valores padrão no formato de dados, mas a tela de importação faz suas próprias verificações, que podem ser diferentes desses padrões.
