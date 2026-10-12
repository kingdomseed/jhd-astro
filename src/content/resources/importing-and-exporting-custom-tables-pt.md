---
title: "Importando e Exportando Tabelas Personalizadas"
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
- Para importar uma tabela nova, use a aba **Arquivos** em Tabelas Personalizadas.
- No computador e no tablet, é o quarto ícone da barra lateral esquerda, com a dica Importação/Exportação. No celular, é a aba Arquivos, a quarta na barra de abas inferior.
- Para compartilhar ou fazer backup de tabelas, exporte uma tabela pelo menu dela ou use uma opção de exportação na aba Arquivos e escolha Arquivo JSON único. Você pode importar qualquer um desses arquivos pela aba Arquivos, mas uma exportação ZIP precisa ser descompactada e seus arquivos importados um por vez.
- Nota de desbloqueio: no Google Play, Amazon e Apple App Store, Tabelas Personalizadas fazem parte do desbloqueio único de Recursos Expandidos. No itch.io e na Microsoft Store, elas fazem parte da compra única do app desktop.

![Aba Arquivos de Tabelas Personalizadas com opções para importar Tabelas Oráculo e Tabelas de Foco de Evento](/images/resources/custom-tables/custom-tables-files-tab.png)

## Importando uma nova tabela de um arquivo

Use este fluxo quando quiser adicionar uma nova tabela personalizada a partir de CSV, TXT, PSV, JSON ou JSON do Foundry.

1. Abra **Tabelas Personalizadas**.
2. Escolha a aba **Arquivos**.
3. Escolha **Tabelas Oracle** para uma tabela de significado, ou **Tabelas de Foco de Evento** para uma tabela de foco de evento.
4. Selecione um arquivo `.csv`, `.txt`, `.psv` ou `.json`.
5. O app salva a tabela importada e a abre no editor de tabela para revisão.

A aba Arquivos importa arquivos. Ela não tem uma caixa de colagem para texto bruto. A caixa de colagem fica no fluxo de edição de uma tabela existente abaixo.

## Substituindo entradas dentro do editor de tabela

Ao editar uma tabela existente, a aba Importar do editor de tabela tem dois caminhos:

- **Substituir todas as entradas:** cole conteúdo TXT, PSV ou CSV na caixa de texto e escolha Substituir todas as entradas.
- **Importar de arquivo:** escolha um arquivo de tabela `.json`, `.csv`, `.txt` ou `.psv`.
- Arquivos JSON podem ser mesclados quando o ID da tabela importada corresponde à tabela que você está editando. Se os IDs não coincidirem, escolha Substituir tudo para sobrescrever a tabela. Salve suas alterações antes de importar um arquivo JSON aqui. Uma mesclagem ou Substituir Tudo parte da tabela salva, então as edições não salvas são descartadas.
- Arquivos CSV, TXT e PSV substituem as entradas atuais no editor. A alteração fica preparada até você escolher Criar ou Atualizar.

![Aba Importar do editor de tabela existente com a caixa de colagem Substituir todas as entradas](/images/resources/custom-tables/editor-files-paste.png)

Essa caixa de colagem serve para substituir entradas em uma tabela que você já está editando. Ela não é o fluxo de importação de uma tabela nova.

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
- Na caixa de colar do editor, cole um CSV com a linha de cabeçalho ou linhas que começam com dois números e um resultado.
- Se uma tabela única não puder ser lida ou importada, a aba Arquivos mostra um erro. De um arquivo com várias tabelas, o app importa as que consegue e pula as outras, depois mostra quantas foram importadas do total e nomeia as que não foram. Ele pode não dizer qual linha ou valor causou o problema.

Amostras
- Modelo de Significado (CSV): [Baixar](/downloads/meaning_table_template.csv)
- Exemplo de Significado (CSV): [Baixar](/downloads/meaning_table_example.csv)
- Modelo de Significado com Pesos (CSV): [Baixar](/downloads/meaning_table_weighted_template.csv)
- Modelo de Foco de Evento (CSV): [Baixar](/downloads/event_focus_template.csv)
- Exemplo de Foco de Evento (CSV): [Baixar](/downloads/event_focus_example.csv)

## Formato TXT (um por linha)

- Uma entrada por linha. Simples e rápido para listas curtas.
- Linha opcional `table_type: meaning-table` (ou `event-focus`) pode aparecer na primeira ou última linha não vazia.
- A caixa de colagem do editor também aceita listas curtas separadas por vírgula, como `Self, Allies, Foes`.

Amostras
- Modelo de Significado (TXT): [Baixar](/downloads/meaning_table_template.txt)
- Modelo de Foco de Evento (TXT): [Baixar](/downloads/event_focus_template.txt)

## Formato PSV (extremidades separadas por pipe)

- Cada linha: `endpoint|result`; descrições opcionais usam `endpoint|result|description`
- Mantenha as extremidades únicas e em ordem crescente para facilitar a leitura; a primeira faixa começa em 1 e a maior extremidade torna-se o rangeEnd da tabela
- Linha opcional table_type pode aparecer no início ou no fim

Amostras
- Modelo de Significado (PSV): [Baixar](/downloads/meaning_table_template.psv)
- Modelo de Foco de Evento (PSV): [Baixar](/downloads/event_focus_template.psv)

## Formato JSON

- Use JSON quando quiser mover uma tabela completa entre instalações do app ou compartilhar uma tabela pronta para o app com outra pessoa.
- JSON preserva mais da tabela do que os formatos de texto curtos, incluindo traduções, tags e links para outras tabelas.
- Um arquivo JSON pode definir `tableType` como `meaning-table` ou `event-focus`. Para uma tabela única, o cartão que você toca na aba Arquivos define o tipo da tabela. Em uma exportação Arquivo JSON único com várias tabelas, cada tabela mantém seu próprio tableType, uma tabela sem esse valor recebe o tipo do cartão e uma tabela com tableType inválido não é aceita.
- Para escrever uma tabela simples manualmente, CSV, TXT ou PSV costuma ser mais fácil.

Amostras
- Modelo de Significado (JSON): [Baixar](/downloads/meaning_table_template.json)
- Exemplo de Significado (JSON): [Baixar](/downloads/meaning_table_sample.json)
- Modelo de Foco de Evento (JSON): [Baixar](/downloads/event_focus_template.json)
- Exemplo de Foco de Evento (JSON): [Baixar](/downloads/event_focus_sample.json)

## Foundry VTT JSON (mapeamento automático)

Com o cartão Tabelas Oracle, um arquivo JSON é tratado como Foundry VTT quando tem um nome e um array results cujos itens contêm texto. Com o cartão Tabelas de Foco de Evento, o nome também precisa conter event, focus ou plot, ou um resultado precisa conter PC, NPC ou Thread. Arrays `range` são usados quando presentes.

Destaques do mapeamento
- `name` → `displayName`
- `description` → `description`
- `results[].text` → `entries[].result`
- `results[].range` → `entries[].range` (ex., `[min, max]`)
- Os metadados do Foundry são preservados em data.foundry quando você importa por Tabelas Oracle. Uma importação por Tabelas de Foco de Evento não os mantém.
- Importações de Foco de Evento forçam `categoryId = "event-focus"`

Amostras
- Exemplo de Significado Foundry (JSON): [Baixar](/downloads/foundry_meaning_sample.json)
- Exemplo de Foco de Evento Foundry (JSON): [Baixar](/downloads/foundry_event_focus_sample.json)

## Validação e solução de problemas

- Cobertura de intervalo: intervalo completo da tabela sem lacunas ou sobreposições
- Cabeçalhos escritos corretamente (insensível a maiúsculas/minúsculas)
- Preencha result em todas as linhas. Um CSV de Tabela de Significado com intervalos importa um result em branco como item vazio, e um CSV de Foco do Evento descarta a linha.
- Se uma tabela única não puder ser lida ou importada, a aba Arquivos mostra um erro. De um arquivo com várias tabelas, o app importa as que consegue e pula as outras, depois mostra quantas foram importadas do total e nomeia as que não foram. Ele pode não dizer qual linha ou valor causou o problema.

## Próximos passos

- Oriente-se e crie suas primeiras tabelas: veja "Começando com Tabelas Personalizadas"
- Organize categorias, ícones e links: veja "Organizando Tabelas Personalizadas"
- Referência de campo JSON: veja "Esquema de Tabela Personalizada" e "Esquema de Categorias"
