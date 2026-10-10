---
title: "Começando com Tabelas Personalizadas"
summary: "Crie Tabelas de Significado e tabelas de Foco de Evento, adicione traduções e links, e importe modelos prontos."
category: "custom-tables"
order: 1
icon: "fa-slab fa-regular fa-newspaper"
duration: "9 min de leitura"
updated: "2025-09-21"
lang: "pt"
tags: ["custom-tables", "getting-started", "meaning-tables", "event-focus", "categories"]
keywords:
  - Tabelas personalizadas
  - Tabelas de Significado
  - Foco de Evento
  - Categorias
  - Começando
downloads:
  - label: "Modelo de Significado (JSON)"
    href: "/downloads/meaning_table_template.json"
    format: "JSON"
  - label: "Exemplo de Significado (JSON)"
    href: "/downloads/meaning_table_sample.json"
    format: "JSON"
  - label: "Modelo de Significado (CSV)"
    href: "/downloads/meaning_table_template.csv"
    format: "CSV"
  - label: "Exemplo de Significado (CSV)"
    href: "/downloads/meaning_table_example.csv"
    format: "CSV"
  - label: "Modelo de Significado (TXT)"
    href: "/downloads/meaning_table_template.txt"
    format: "TXT"
  - label: "Modelo de Significado (PSV)"
    href: "/downloads/meaning_table_template.psv"
    format: "PSV"
  - label: "Modelo de Foco de Evento (JSON)"
    href: "/downloads/event_focus_template.json"
    format: "JSON"
  - label: "Exemplo de Foco de Evento (JSON)"
    href: "/downloads/event_focus_sample.json"
    format: "JSON"
  - label: "Modelo de Foco de Evento (CSV)"
    href: "/downloads/event_focus_template.csv"
    format: "CSV"
  - label: "Exemplo de Foco de Evento (CSV)"
    href: "/downloads/event_focus_example.csv"
    format: "CSV"
  - label: "Modelo de Foco de Evento (TXT)"
    href: "/downloads/event_focus_template.txt"
    format: "TXT"
  - label: "Modelo de Foco de Evento (PSV)"
    href: "/downloads/event_focus_template.psv"
    format: "PSV"
  - label: "Modelo de Categorias (JSON)"
    href: "/downloads/categories_template.json"
    format: "JSON"
  - label: "Exemplo de Categorias (JSON)"
    href: "/downloads/categories_sample.json"
    format: "JSON"
related:
  - custom-table-schema
  - categories-schema
  - importing-and-exporting-custom-tables
---

## Onde encontrar Tabelas Personalizadas

No celular, abra a gaveta de navegação e toque em EDITOR DE TABELAS, em Ferramentas. Em um tablet ou computador, selecione Tabelas Personalizadas no trilho de navegação ou, no Layout clássico de 6 painéis (Desktop), clique no botão de ícone Tabelas Personalizadas no canto inferior direito.

> ### Como Desbloquear
> - Google Play, Amazon e Apple App Store: requer uma compra no aplicativo para desbloquear Tabelas Personalizadas.
> - Itch.io e Microsoft Store (Windows): incluído na compra única do app desktop.

## Faça sua primeira tabela de Significado

1) No celular, abra a aba Oráculo e toque no botão + para iniciar o assistente Criar Tabela. Em um tablet ou computador, selecione o primeiro ícone da barra lateral esquerda (Tabelas de Significado) e clique no botão + abaixo dos ícones.
2) Dê um nome e escolha uma categoria na lista. Para adicionar uma categoria sua, crie-a antes com o botão + na aba Categoria.
3) Defina o intervalo (para uma primeira tabela, tente 1–10 ou 1–20)
4) Adicione seus itens. No assistente do celular, o app os distribui igualmente pelo intervalo para você.
5) Opcional: descrição, tags, traduções. Só as tabelas de Foco do Evento e as categorias têm ícone próprio.
6) Salve e teste rolando

> ### Dicas
> - Comece pequeno (1d6/1d10) e expanda mais tarde para 1d100
> - Mantenha intervalos contínuos (sem lacunas/sobreposições). O app valida isso para você
> - Use Links de entrada em um item para rolar em outra tabela, em uma Lista de Aventura (Personagens, Tramas ou Aspectos) ou em uma Lista Personalizada quando esse item sair.

## Faça uma tabela de Foco de Evento

1) No celular, abra a aba Evento e toque no botão +. Em um tablet ou computador, selecione o segundo ícone da barra lateral esquerda (Foco do Evento) e clique no botão + abaixo dos ícones.
2) O intervalo é tipicamente 1–100 (percentual), mas intervalos menores funcionam também
3) Adicione itens que descrevam que tipo de evento acontece (por exemplo, Ação de PNJ ou Avançar em Direção a uma Trama).
4) Salve e tente algumas rolagens de teste

> ### Dica
> Depois de criar uma tabela, abra-a e use Tabelas vinculadas na aba Controles para rolar outras Tabelas de Significado sempre que esta tabela for rolada. Use Links de entrada para vincular um único item a uma tabela ou lista.

## Traduções e metadados

- Você pode adicionar traduções por tabela e por entrada conforme avança. O idioma padrão é `en`.
- Adicione tags para ajudar na busca e agrupamento.
- Ícones são configurados via categorias; você pode escolher um ícone por categoria uma vez e reutilizá-lo.

## Downloads iniciais

Use estes modelos e exemplos como pontos de partida. Importe-as pela aba Arquivos em Tabelas Personalizadas (o ícone Importação/Exportação em um tablet ou computador). Toque em Tabelas Oracle para um arquivo de Tabela de Significado ou em Tabelas de Foco de Evento para um arquivo de Foco do Evento. Veja a seção de Downloads abaixo para arquivos.

## O que não é suportado ainda

- Ainda não é possível montar manualmente uma tabela com pesos. A opção Ponderado no editor está marcada como Em breve. Você pode importar um CSV de Tabela de Significado com as colunas result e weight, com até 100 linhas. Para montar uma tabela manualmente, use tabelas baseadas em intervalo (1..N).

## Próximos passos

- Detalhes de importar/exportar: veja "Importando e Exportando Tabelas Personalizadas"
- Organizar categorias e ícones: veja "Organizando Tabelas Personalizadas"
- Campos JSON completos: veja "Esquema de Tabela Personalizada" e "Esquema de Categorias"
