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

Esta página documenta as chaves canônicas para o formato de exportação do Diário Mythic e como cada campo é usado. Se você está construindo ferramentas ou validando exportações, comece aqui. Para um passo a passo prático de criação e gerenciamento de diários, veja [Um Guia para os Diários Mythic](/resources/guide-to-the-mythic-journals/).

Em Português Claro: Você não precisa saber código para usar diários. "JSON" é apenas um arquivo de texto estruturado que o app lê e escreve, e o "esquema" abaixo é um livro de regras para ferramentas validarem esses arquivos. Se você não está construindo ferramentas, pode pular os detalhes aqui com segurança.

## Downloads

Veja a seção de Downloads no final desta página para arquivos.

Dica: Após baixar o modelo vazio, faça uma cópia e renomeie de `journal_template.json` para um nome significativo (por exemplo: `minha-aventura-2025.json`). Mantenha a extensão `.json`.

## Referência de campo (chaves de exportação canônicas)
- `JournalName` (string): Seu nome de diário/campanha.
- `ChaosFactor` (int 1–9): FC atual usado para verificações e probabilidades de evento.
- `Scenes` (array de objetos): Cada cena tem:
  - `Title` (string): Título opcional.
  - `SceneSummary` (string): Breve descrição.
  - `SceneChaosFactor` (int 1–9): FC no início da cena (instantâneo).
  - `SceneAdjustments` (array): Resultados de rolagens de Ajuste de Cena Mythic; cada item tem `result`, `range` [min,max], `description` (e ajustes aninhados opcionais).
  - `CreatedAt` (string ISO8601): Quando a cena foi criada.
- `Characters` (array<string>): Nomes usados para vínculos de eventos (ex., Ação de NPC, Introduzir NPC). Exportação é strings; formas de objeto legadas são aceitas na importação.
- `Threads` (array<string>): Lista de Tramas usadas para resultados do Mythic como "Fechar uma Trama" ou "Mover em Direção a uma Trama".
- `Features` (array<string>): Locais, objetos e conceitos que dão cor e contexto aos eventos.
- `ActivatedThreadSections` / `ActivatedCharacterSections` / `ActivatedFeatureSections` (int 1–5): Quantas seções de 5 itens estão ativas em cada lista (máx 25 itens por lista).
- `LogEntries` (array de objetos): Histórico do oráculo. Campos comuns:
  - `rollType` ("Fate Chart" | "Fate Check" | "Scene Check" | "Random Event" | etc.)
  - `question` (string): A Pergunta do Destino (não usada para Verificação de Cena).
  - `odds` (string): Probabilidade (ex., Provável, 50/50).
  - `chaosFactor` (int): FC no momento da rolagem.
  - `rollResult` (int): d100 para Tabela de Destino; total para Verificação de Destino.
  - `outcome` (string): Sim/Não/Sim Excepcional/Não Excepcional, ou resultado de cena para Verificação de Cena.
  - `isSceneCheck` (bool): Verdadeiro quando a entrada é um resultado de Verificação de Cena.
  - `timestamp` (string ISO8601): Quando aconteceu.
  - Opcional: `individualDieResults`, `modifierValue`, `modifiedTotal` (detalhes da Verificação de Destino),
    `randomEvent` (Foco do Evento + Palavras de Descrição e vínculos), `eventFocus`, `sceneAdjustment`, `sceneAdjustmentRoll`, `meaningDescriptions`.
- `ListNotes` (objeto, opcional): Notas de forma livre por lista: `CharacterNotes`, `ThreadNotes`, `FeatureNotes`.
- `SchemaVersion` (int, atual = 1): Versão do esquema de dados para migração.

### Notas sobre alinhamento com Mythic

- Tipo de cena é derivado do log: Registre "Cena Esperada, Alterada ou Interrompida" via `outcome` de uma entrada de log de `Scene Check` em vez de no objeto de cena.
- Eventos Aleatórios: Use `randomEvent.eventFocus`, `meanings`, e vínculos opcionais (`characterResult`, `threadResult`, `featureResult`).
- Mudanças de Fator Caos: Quando o FC muda para uma cena, defina `SceneChaosFactor` na cena e capture a justificativa em `SceneAdjustments` ou uma entrada de log.
- Listas como inspiração: Listas de Aventura conduzem conexões de eventos; expanda com `Activated*Sections` conforme necessário (máx 25 itens por lista).

## Esqueleto mínimo
```json
{
  "JournalName": "Minha Aventura",
  "ChaosFactor": 5,
  "Scenes": [],
  "Characters": [],
  "Threads": [],
  "Features": [],
  "ActivatedThreadSections": 1,
  "ActivatedCharacterSections": 1,
  "ActivatedFeatureSections": 1,
  "LogEntries": [],
  "SchemaVersion": 1
}
```
