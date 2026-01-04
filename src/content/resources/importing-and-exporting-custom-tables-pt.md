---
title: "Importando & Exportando Tabelas Personalizadas"
summary: "Prepare tabelas em CSV, TXT, PSV e JSON para importação—apenas baseadas em intervalo por enquanto—então exporte pacotes limpos para compartilhamento."
category: "custom-tables"
order: 4
icon: "fa-slab fa-regular fa-exchange"
duration: "7 min de leitura"
updated: "2025-09-21"
lang: "pt"
tags: ["custom-tables", "import", "export", "csv", "json", "foundry"]
keywords:
  - Importar tabelas personalizadas
  - Exportar tabelas personalizadas
  - CSV
  - JSON
  - Foundry VTT
  - PSV
  - TXT
related:
  - getting-started-with-custom-tables
  - custom-table-schema
  - linking-and-nesting-tables
---

## Onde importar/exportar

- Abra a funcionalidade Tabelas Personalizadas no app (não em Configurações).
- Use Importar para adicionar tabelas de arquivos; use Exportar para salvar suas tabelas para compartilhamento/backups.
- Nota de desbloqueio: no Google Play, Amazon e na Apple App Store, Tabelas Personalizadas requerem uma IAP; Itch.io e Microsoft Store incluem isso com uma compra de preço maior.

## Regras rápidas (TL;DR)

- Codificação de arquivo: UTF‑8 (quebras de linha CRLF ou LF são OK)
- Tipos de tabela: `meaning-table` ou `event-focus`
- Cobertura de intervalo: Suas entradas devem cobrir totalmente 1 → N sem lacunas/sobreposições
- Formatos:
  - CSV: requer `range_start, range_end, result` (apenas baseado em intervalo por enquanto)
  - TXT: uma entrada por linha (+ linha opcional table_type)
  - PSV: `endpoint|result` com extremidades que produzem intervalos 1..N
  - JSON v3: esquema de fidelidade total, incluindo traduções e links
- Tabelas com peso: Não suportado ainda. Use intervalos explícitos em vez disso

## Formato CSV (baseado em intervalo)

Colunas obrigatórias:
- `range_start`, `range_end`, `result`

Colunas opcionais (ordem não importa):
- `description`, `tags` (separadas por ponto e vírgula), `entryRollOn`, `id`, `table_description`, `table_type`

Notas
- Nomes de cabeçalho são insensíveis a maiúsculas/minúsculas
- `table_type` é opcional; se usado, apenas a primeira linha de dados deve conter um valor
- Valores conflitantes ou inválidos são rejeitados com uma mensagem de erro clara

Amostras
- Modelo de Significado (CSV): [Download](/downloads/meaning_table_template.csv)
- Exemplo de Significado (CSV): [Download](/downloads/meaning_table_example.csv)
- Modelo de Foco de Evento (CSV): [Download](/downloads/event_focus_template.csv)
- Exemplo de Foco de Evento (CSV): [Download](/downloads/event_focus_example.csv)

## Formato TXT (um por linha)

- Uma entrada por linha. Simples e rápido para listas curtas.
- Linha opcional `table_type: meaning-table` (ou `event-focus`) pode aparecer na primeira ou última linha não vazia.

Amostras
- Modelo de Significado (TXT): [Download](/downloads/meaning_table_template.txt)
- Modelo de Foco de Evento (TXT): [Download](/downloads/event_focus_template.txt)

## Formato PSV (extremidades separadas por pipe)

- Cada linha: `endpoint|result`
- Extremidades devem ascender; primeira faixa começa em 1; última extremidade torna-se o rangeEnd da tabela
- Linha opcional table_type pode aparecer no início ou no fim

Amostras
- Modelo de Significado (PSV): [Download](/downloads/meaning_table_template.psv)
- Modelo de Foco de Evento (PSV): [Download](/downloads/event_focus_template.psv)

## JSON (Tabela Unificada v3)

- Campos de fidelidade total (traduções, `tags`, `data`, `tableRollOn`, `entryRollOn`)
- `tableType` é parte do JSON; valores válidos: `meaning-table` ou `event-focus`
- IDs: IDs de tabela são snake_case; IDs de categoria são kebab-case

Amostras
- Modelo de Significado (JSON): [Download](/downloads/meaning_table_template.json)
- Exemplo de Significado (JSON): [Download](/downloads/meaning_table_sample.json)
- Modelo de Foco de Evento (JSON): [Download](/downloads/event_focus_template.json)
- Exemplo de Foco de Evento (JSON): [Download](/downloads/event_focus_sample.json)

## Foundry VTT JSON (mapeamento automático)

Detectado automaticamente quando um JSON inclui um array `results` com entradas que contêm `_id`, `text`, e um array `range`.

Destaques do mapeamento
- `name` → `displayName`
- `description` → `description`
- `results[].text` → `entries[].result`
- `results[].range` → `entries[].range` (ex., `[min, max]`)
- Desconhecidos preservados sob `data.foundry`
- Importações de Foco de Evento forçam `categoryId = "event-focus"`

Amostras
- Exemplo de Significado Foundry (JSON): [Download](/downloads/foundry_meaning_sample.json)
- Exemplo de Foco de Evento Foundry (JSON): [Download](/downloads/foundry_event_focus_sample.json)

## Validação & solução de problemas

- Cobertura de intervalo: 1 → N sem lacunas ou sobreposições
- Cabeçalhos escritos corretamente (insensível a maiúsculas/minúsculas)
- Sem campos obrigatórios em branco (`result`, etc.)
- Se um arquivo for inválido, o app mostra um erro exato e recusa salvar, então seus dados ficam seguros

## Próximos passos

- Oriente-se e crie suas primeiras tabelas: veja "Começando com Tabelas Personalizadas"
- Organize categorias, ícones e links: veja "Organizando Tabelas Personalizadas"
- Referência de campo JSON: veja "Esquema de Tabela Personalizada" e "Esquema de Categorias"
