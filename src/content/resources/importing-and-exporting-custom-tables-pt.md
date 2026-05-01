---
title: "Importando & Exportando Tabelas Personalizadas"
summary: "Prepare tabelas em CSV, TXT, PSV e JSON para importação, então exporte pacotes limpos para compartilhamento."
category: "custom-tables"
order: 4
icon: "fa-slab fa-regular fa-exchange"
duration: "7 min de leitura"
updated: "2026-05-01"
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

## Importando dentro do editor de tabela

Ao editar uma tabela existente, a aba Importar do editor de tabela tem dois caminhos:

- **Substituir todas as entradas:** cole conteúdo TXT, PSV ou CSV na caixa de texto e escolha Substituir todas as entradas.
- **Importar de arquivo:** escolha um arquivo de tabela `.json`, `.csv`, `.txt` ou `.psv`.
- Arquivos JSON podem ser mesclados quando o ID da tabela importada corresponde à tabela que você está editando. Se os IDs não coincidirem, escolha Substituir tudo para sobrescrever a tabela.
- Arquivos CSV, TXT e PSV substituem as entradas atuais no editor. A alteração fica preparada até você escolher Criar ou Atualizar.

Essa caixa de colagem serve para substituir entradas em uma tabela que você já está editando. Para criar uma nova tabela a partir de um arquivo, use a tela de importação/exportação de Tabelas Personalizadas e escolha a opção de importar Tabelas Oracle ou Tabelas de Foco de Evento.

## Regras rápidas (TL;DR)

- Codificação de arquivo: UTF‑8 (quebras de linha CRLF ou LF são OK)
- Tipos de tabela: `meaning-table` ou `event-focus`
- Cobertura de intervalo: Suas entradas devem cobrir totalmente o intervalo da tabela sem lacunas/sobreposições; os modelos começam em 1
- Formatos:
  - CSV: tabelas por intervalo usam `range_start, range_end, result`; tabelas de significado também podem usar `result, weight`
  - TXT: uma entrada por linha (+ linha opcional table_type)
  - PSV: `endpoint|result` com extremidades que produzem intervalos 1..N
  - JSON v3: esquema de fidelidade total, incluindo traduções e links
- CSV com pesos: suportado para tabelas de significado; use intervalos explícitos para tabelas de foco de evento

## Formato CSV

CSV por intervalo:
- As três primeiras colunas devem ser `range_start`, `range_end`, `result`

CSV com pesos para tabelas de significado:
- Use `result`, `weight`

Colunas opcionais:
- `description`, `tags` (separadas por ponto e vírgula), `entryRollOn`, `table_description`, `table_type`
- CSV por intervalo para tabelas de significado também aceita `id`

Notas
- Nomes de cabeçalho são insensíveis a maiúsculas/minúsculas
- `table_type` é opcional; se usado, apenas a primeira linha de dados deve conter um valor
- Na caixa de colagem do editor, o CSV deve ser colado como CSV com a linha de cabeçalho; ele não deve ser inserido como linhas TXT simples
- Valores conflitantes ou inválidos são rejeitados com uma mensagem de erro clara

Amostras
- Modelo de Significado (CSV): [Download](/downloads/meaning_table_template.csv)
- Exemplo de Significado (CSV): [Download](/downloads/meaning_table_example.csv)
- Modelo de Significado com Pesos (CSV): [Download](/downloads/meaning_table_weighted_template.csv)
- Modelo de Foco de Evento (CSV): [Download](/downloads/event_focus_template.csv)
- Exemplo de Foco de Evento (CSV): [Download](/downloads/event_focus_example.csv)

## Formato TXT (um por linha)

- Uma entrada por linha. Simples e rápido para listas curtas.
- Linha opcional `table_type: meaning-table` (ou `event-focus`) pode aparecer na primeira ou última linha não vazia.
- A caixa de colagem do editor também aceita listas curtas separadas por vírgula, como `Self, Allies, Foes`.

Amostras
- Modelo de Significado (TXT): [Download](/downloads/meaning_table_template.txt)
- Modelo de Foco de Evento (TXT): [Download](/downloads/event_focus_template.txt)

## Formato PSV (extremidades separadas por pipe)

- Cada linha: `endpoint|result`; descrições opcionais usam `endpoint|result|description`
- Mantenha as extremidades únicas e em ordem crescente para facilitar a leitura; a primeira faixa começa em 1 e a maior extremidade torna-se o rangeEnd da tabela
- Linha opcional table_type pode aparecer no início ou no fim

Amostras
- Modelo de Significado (PSV): [Download](/downloads/meaning_table_template.psv)
- Modelo de Foco de Evento (PSV): [Download](/downloads/event_focus_template.psv)

## JSON (Tabela Unificada v3)

- Campos de fidelidade total (traduções, `tags`, `data`, `tableRollOn`, `entryRollOn`)
- `tableType` é parte do JSON; valores válidos: `meaning-table` ou `event-focus`
- IDs de tabela gerados pelo app usam snake_case; IDs de categoria gerados pelo app usam kebab-case

Amostras
- Modelo de Significado (JSON): [Download](/downloads/meaning_table_template.json)
- Exemplo de Significado (JSON): [Download](/downloads/meaning_table_sample.json)
- Modelo de Foco de Evento (JSON): [Download](/downloads/event_focus_template.json)
- Exemplo de Foco de Evento (JSON): [Download](/downloads/event_focus_sample.json)

## Foundry VTT JSON (mapeamento automático)

Detectado automaticamente quando um JSON inclui `name` e um array `results` cujas entradas contêm `text`. Arrays `range` são usados quando presentes.

Destaques do mapeamento
- `name` → `displayName`
- `description` → `description`
- `results[].text` → `entries[].result`
- `results[].range` → `entries[].range` (ex., `[min, max]`)
- Metadados do Foundry são preservados sob `data.foundry`
- Importações de Foco de Evento forçam `categoryId = "event-focus"`

Amostras
- Exemplo de Significado Foundry (JSON): [Download](/downloads/foundry_meaning_sample.json)
- Exemplo de Foco de Evento Foundry (JSON): [Download](/downloads/foundry_event_focus_sample.json)

## Validação & solução de problemas

- Cobertura de intervalo: intervalo completo da tabela sem lacunas ou sobreposições
- Cabeçalhos escritos corretamente (insensível a maiúsculas/minúsculas)
- Sem campos obrigatórios em branco (`result`, etc.)
- Se um arquivo for inválido, o app mostra um erro e recusa salvar, então seus dados ficam seguros

## Próximos passos

- Oriente-se e crie suas primeiras tabelas: veja "Começando com Tabelas Personalizadas"
- Organize categorias, ícones e links: veja "Organizando Tabelas Personalizadas"
- Referência de campo JSON: veja "Esquema de Tabela Personalizada" e "Esquema de Categorias"
