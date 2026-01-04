---
title: "v1.5 — Rolador de Dados 2.0 & Tabelas Personalizadas"
summary: "Reformulação de Eventos Aleatórios, Rolador de Dados 2.0, Construtor de Tabelas Personalizadas, atualizações de a11y, estabilidade, localização"
category: "Release Notes"
date: "2025-08-11"
readTime: "2 min de leitura"
isSample: false
lang: "pt"
keywords: ["notas de lançamento", "Apps Mythic GME"]
tags: ["release", "v1.5", "product:apps", "dice-roller", "custom-tables", "accessibility", "localization", "stability"]
---

**Visão Geral**
v1.5 é nossa maior atualização até agora. Este lançamento foca em Eventos Aleatórios mais inteligentes, um Construtor de Tabelas Personalizadas & Oráculo totalmente desbloqueado (para builds do Itch), um rolador de dados reconstruído, grandes atualizações de acessibilidade e estabilidade em plataformas desktop.

## Destaques
- **Eventos Aleatórios reformulados:** Sem rolagem automática padrão em Tabelas de Significado. Escolha tabelas manualmente via painel deslizante para controle narrativo mais rígido.
- **Faça uma Pergunta:** Adicione um aviso breve antes de uma rolagem de Destino para ancorar resultados no contexto da história.
- **Rolador de Dados 2.0:** Motor reescrito com fórmulas complexas, parênteses, re-rolagens, dados explosivos, layout de arrastar para reordenar, e importação/exportação de fórmulas salvas.
- **Construtor de Tabelas Personalizadas & Oráculo:** Crie, edite, vincule e organize Tabelas de Significado, Foco de Evento e Ajustes de Cena. Importe/Exporte *CSV, JSON, PSV, TXT, Foundry VTT*; 3.000+ ícones incluídos (de FontAwesome!).
- **Buscar / Curtir / Filtrar Tabelas de Significado:** Busca em tempo real, favoritos e filtros de tag para pesquisas mais rápidas.
- **Pasta de Tabelas de Usuário (incluída):** Solte *JSON* formatado adequadamente em `user_tables/` e ele carrega no próximo lançamento do app. Importação também disponível no app.
- **Layout Tablet/Desktop:** Painéis arrastáveis e visualizações divididas em telas principais para melhores fluxos de trabalho de múltiplos painéis.
- **Acessibilidade & UI:** Semântica melhorada, navegação por teclado, suporte a leitor de tela, escala de texto maior e opções de contraste mais alto.
- **Novos idiomas de UI:** Interface localizada em *Alemão, Italiano, Francês e Espanhol*. (Tabelas oficiais são enviadas em Inglês e Português do Brasil; você pode importar/compartilhar tabelas em qualquer idioma suportado.)
- **Estabilidade:** Correções significativas no Windows, macOS e Linux para desempenho mais suave e manuseio de arquivo mais confiável.

## Correções & Melhorias
- **Rolador de Dados:** Resolvidos casos extremos de analisador; eliminados loops/vazamentos de memória; UI esclarecida; fórmulas salvas estabilizadas; contagens de crítico corretas (Fudge/D66/%).
- **Tabelas de Significado & Eventos Aleatórios:** Ordenação de log adequada e descrições completas; atualizações instantâneas de busca/filtro de tag; emparelhamento de múltiplas tabelas suportado quando vinculado.
- **Diários & Armazenamento:** Salvamentos/carregamentos mais seguros; locais de arquivo mais claros; sincronização mais confiável em plataformas suportadas.
- **Cenas & Listas:** Salvamento automático ao navegar; notas Markdown para listas; opcional “nunca rolar *Escolher* se a lista tem entradas.”
- **Correções de plataforma:** Melhor manuseio de caminho de arquivo no Windows; melhor comportamento de build no Linux; caminho de sincronização iCloud reformulado para builds do ecossistema Apple (somente App Store).

## Notas para builds do Itch.io
- **Sem IAP no Itch.io:** Todos os recursos estão incluídos e desbloqueados.
- **macOS:** Sincronização iCloud não está disponível na build do Itch; você pode selecionar qualquer local de salvamento personalizado (incluindo uma pasta do iCloud Drive).
- **Hardware mínimo macOS:** Apple Silicon M1 com 8 GB RAM recomendado; Intel macOS 10.15+ suportado (não testado).
- **Linha de base Linux:** Atualizações chegando para a build Linux em breve
- **macOS e Linux**: Essas builds estão pendentes de lançamento para a versão 1.5. Fique ligado!

Se você tiver feedback ou encontrar problemas, entre em contato aqui ou via Discord do Mythic. Aproveite a atualização!
