---
title: "v1.4 — Desbloqueio Premium & Qualidade de Vida"
summary: "IAP de desbloqueio Premium, QoL de Tabela de Destino/Significado, UI de Rolador de Dados moderna e configurações simplificadas"
category: "Release Notes"
date: "2024-12-19"
readTime: "6 min de leitura"
isSample: false
lang: "pt"
keywords: ["notas de lançamento", "Apps Mythic GME"]
tags: [
  "pre-release",
  "series:beta-to-first-release",
  "product:apps",
  "v1.4",
  "iap",
  "premium",
  "meaning-tables",
  "fate",
  "settings",
  "dice-roller",
  "scenes",
  "bug-fixes"
]
---

Lançado em 19 de Dezembro de 2024 (v1.4 Planejada)

Este post faz parte da série Beta → Primeiro Lançamento.

# Registro de Mudanças de Lançamento da Versão 1.4 Planejada

## Atualizações Principais

### Recursos Premium / IAP
- Lançado o novo IAP de Desbloqueio de Recursos Premium — desbloqueie todos os recursos premium atuais e novos recursos premium para os próximos 12 meses.
- Primeiro conjunto de recursos com a compra são:
  - 46 Tabelas de Significado adicionais das Mythic Magazines 1–47
  - 12 tabelas de Foco de Evento adicionais das Mythic Magazines 1–47 e Mythic Variations
- Recursos planejados para o Q1 sob esta categoria incluem:
  - Oráculos/Tabelas de Significado Personalizados
  - Tabelas de Foco de Evento Personalizadas
  - Opções de Jogo Híbrido

### Tabelas de Foco de Evento Adicionadas
- Tabela de Foco de Evento de Aventura: Uma tabela de foco de evento para jogos orientados a aventura, enfatizando ação e interações de personagens.
- Tabela de Foco de Evento Épico: Uma tabela de foco de evento para jogos de escala épica, enfatizando desenvolvimentos dramáticos de threads e grandes ações de personagens.
- Tabela de Foco de Evento: A tabela de foco de evento original. Rola em Personagens e Threads.
- Tabela de Foco de Evento de Horror: Uma tabela de foco de evento com tema de horror. MM Compilation 4.
- Tabela de Foco de Evento de Notícias Principais: Uma tabela para determinar o foco de eventos de notícias principais. MM Compilation 6.
- Tabela de Foco de Evento 20% Significativo: Uma tabela de foco de evento significativo com 20% de chance de um evento significativo. MM Compilation 2.
- Tabela de Foco de Evento 25% Significativo: Uma tabela de foco de evento significativo com 25% de chance de um evento significativo. MM Compilation 2.
- Tabela de Foco de Evento 33% Significativo: Uma tabela de foco de evento significativo com 33% de chance de um evento significativo. MM Compilation 2.
- Tabela de Foco de Evento de Notícias Menores: Uma tabela para determinar o foco de eventos de notícias menores. MM Compilation 6.
- Tabela de Foco de Evento de Mistério: Uma tabela de evento focada em mistério. Rola em Personagens e Threads. De MM Compilation 1.
- Tabela de Narrativa Nudges: Uma substituição para foco de evento para tornar o Mythic mais focado narrativamente. MM 43.
- Tabela de Foco de Evento Pessoal: Uma tabela de foco de evento para jogos de escala pessoal, enfatizando interações individuais de personagens e threads pessoais.
- Tabela de Foco de Evento Preparado: Use isso com suas aventuras preparadas. Rola em recursos em vez de threads.
- Tabela de Foco de Evento Social: Uma tabela de foco de evento para jogos orientados socialmente, enfatizando revelações dramáticas e interações de personagens.

### Melhorias de Qualidade de Vida
- Atualizações de tabela de significado:
  - Rolagens de Tabela de Significado agora aparecem no log de Destino
  - Adicionada aba deslizante para Tabelas de Significado na tela de Destino
  - Categorias de Tabela de Significado atualizadas
  - Removida a palavra “personagens” dos botões individuais na categoria Personagens
- Atualizações de Gráfico de Destino / Verificação:
  - Gráfico de Destino e Verificação de Destino agora são uma única tela — alterne entre sistemas em Configurações
  - Tabelas de Foco de Evento selecionáveis com funcionalidade aprimorada
  - Adicionada uma opção gratuita de tabela de Foco de Evento de Aventura Preparada. Selecionar isso faz com que Evento Aleatório e Foco de Evento rolem em Recursos em vez de Threads. Veja o livro de regras Mythic GME 2e (por volta da pág. 158) para detalhes
- Atualizações de configurações:
  - Configurações relevantes agora acessíveis de cada tela via um novo ícone de Configurações na barra do app
  - Interface de Configurações renovada para melhor acessibilidade e organização (visualização por abas por categoria)
  - Gerenciador de Diário removido e substituído por uma nova aba Arquivos em Configurações. Um “Meu Diário” é criado automaticamente no primeiro lançamento
  - Adicionado Sincronização iCloud para dispositivos Apple e seleção de local de armazenamento de arquivo para todos os dispositivos
- Atualizações de menu:
  - Menu de app deslizante reorganizado — sistemas principais Mythic GME 2e sob Core
  - Ferramentas inclui Rolador de Dados (e futuras Notas)
  - O sistema agrupa Configurações e Suporte. Suporte e Sobre Nós combinados. Recursos premium podem ser comprados em Suporte
- Rolador de Dados (atualização extensa):
  - Nova interface moderna permite construir fórmulas usando ícones de dados e botões (não apenas digitação)
  - Último resultado exibido no topo; histórico vive em uma aba separada
  - Resultados mostrados como chips para clareza
  - Fórmulas salvas aparecem em um menu deslizante
  - Fórmulas salvas sincronizam com iCloud (se ativado) e são armazenadas como JSON para importação/exportação/compartilhamento
  - Um modelo está disponível no site para pré-construção e importação de fórmulas
- Atualizações de Cenas:
  - Editor de resumo de cena maior
  - Editor de resumo suporta Markdown (GitHub Flavored Markdown): https://github.github.com/gfm/
  - Ao navegar para longe de Cenas com uma cena aberta, a cena agora salva

## Correções de Bugs
- Resolvidas múltiplas exceções no Rolador de Dados e ativação de teclado
- Link do Discord atualizado e definido para “Não Expirar”
- Corrigidas condições de corrida durante navegação e transições de visualização
- Corrigidas condições de corrida durante salvamento e carregamento de arquivo
- Abordadas exceções de armazenamento e problemas de acesso a arquivo
- Importação/exportação de diário corrigida
- Corrigidos problemas com Tabelas de Significado durante reconstruções de widget
- Corrigidos problemas de construção de tooltip causando travamentos em modos desktop
- Numerosas outras correções de bugs de relatórios de falha
- Rolagens em Personagens não acontecem mais para “Novo NPC”
