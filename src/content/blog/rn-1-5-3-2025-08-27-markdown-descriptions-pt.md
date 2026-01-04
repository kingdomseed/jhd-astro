---
title: "v1.5.2–v1.5.3 — Markdown & Descrições"
summary: "Descrições de entrada nos resultados, Markdown em logs, tabelas personalizadas mais inteligentes, atualizações de localização, recuperação de armazenamento"
category: "Release Notes"
date: "2025-08-27"
readTime: "8 min de leitura"
isSample: false
lang: "pt"
keywords: ["notas de lançamento", "Apps Mythic GME"]
tags: [
  "release",
  "v1.5.3",
  "v1.5.2",
  "product:apps",
  "custom-tables",
  "markdown",
  "localization",
  "storage",
  "analytics",
  "accessibility",
  "performance"
]
---

Notas de Lançamento Mythic GME 2e v1.5.2-1.5.3

*Lançado em Agosto de 2025*

### O Que Há de Novo

#### Experiência de Jogo Aprimorada
- **Descrições de Entradas**: Tabelas de Significado e Foco de Evento agora suportam um campo opcional `description` (schema v3.1) que aparece abaixo dos resultados na interface de rolagem e no Log do Jogo
- **Suporte Markdown**: O Log de Aventura agora renderiza formatação Markdown para Tabelas de Significado, Foco de Evento e Listas - use **negrito**, *itálico*, `código` e quebras de linha em suas entradas de tabela

- **Melhor Exibição de Resultados**: Resultados de rolagem agora mostram descrições inline abaixo de cada resultado, com formatação adequada preservada de suas entradas de tabela

> **Nota sobre Suporte Markdown**: O aplicativo suporta múltiplos níveis de sintaxe Markdown através do pacote `flutter_markdown_plus`. Para referência, existem três especificações principais de Markdown: sintaxe original de John Gruber, CommonMark (que esclarece casos ambíguos), e GitHub Flavored Markdown (um superconjunto estrito do CommonMark). O aplicativo suporta níveis de sintaxe básico, CommonMark, GitHub Flavored e GitHub Web.

#### Tabelas Personalizadas Mais Inteligentes
- **Entradas Multilinhas**: O editor de tabelas personalizadas agora suporta quebras de linha adequadas e entrada de texto multilinha usando TextField com suporte multilinha
- **Auto-Expansão**: Tabelas expandem automaticamente seu intervalo de 1-20 para 1-100 quando você adiciona entradas além do intervalo atual, com funcionalidade de desfazer e opção "não auto-expandir novamente"

- **Importação/Exportação Aprimorada**: CSV: Agora inclui coluna `description` quando presente
- PSV: Suporta formato `endpoint|result|description`

- TXT: Suporta formato `result|description`
- JSON: Suporte completo ao campo description via serializers

- Foundry VTT JSON: Mapeia campo `result.description`

#### Idioma e Localização
- **Alemão Adicionado**: Suporte completo ao idioma alemão em Tabelas Personalizadas, Configurações, interface do editor, mensagens de erro, rótulos de acessibilidade e dicas premium
- **Espanhol Dividido**: Opções de locale separadas `es_ES` (Espanha) e `es_MX` (México) com formatação regional adequada

- **Grupos de Idioma**: Configurações agora mostram "Oficial" (Inglês, Português) vs "Não Oficial" (traduções apenas de UI) com rotulagem clara
#### Armazenamento e Recuperação
- **Porta de Recuperação Desktop**: Windows/macOS/Linux agora bloqueia explicitamente a inicialização quando a pasta Documentos não está disponível (redirecionada/ausente) e solicita seleção de pasta
- **Integração de Armazenamento Personalizado**: Fluxo de recuperação reutiliza preferências existentes `useCustomStorage`, `customStoragePath` e `securityBookmark`

- **Melhor Backup**: Funcionalidade de backup e restauração aprimorada com operações de diário mais seguras
#### Melhorias de Plataforma
- **iOS/macOS**: Diálogo de consentimento de analytics na primeira execução (opt-in por padrão)
- Verificação de recibo de compra mais confiável

- Chave de conformidade de exportação de criptografia não isenta adicionada
- **Android**: Melhor relatório de crashes, inicialização mais suave, detecção de loja mais segura

- **Windows/Linux**: Seleção explícita de pasta quando Documentos não está disponível, sem fallbacks silenciosos
#### Interface e Acessibilidade
- **Tematização Consistente**: Seletor de Links de Entrada, blocos de ajuda do Assistente de Criação e dicas de tradução agora usam esquema de cor `onPrimary` para melhor contraste
- **Migração Flutter 3.35**: Atualizado para nova API `RadioGroup` em Configurações → Tema e Idioma

- **Acessibilidade**: Rótulos aprimorados e melhor suporte para leitores de tela em todos os novos recursos
#### Analytics e Privacidade
- **Rastreamento de Tela Centralizado**: Observador PostHog rastreia transições de rota sem reconstruções de widget
- **Porta de Consentimento**: Único toggle `analyticsEnabled` controla tanto PostHog quanto Firebase

- **Cobertura de Plataforma**: PostHog habilitado em Web/iOS/Android/macOS, no-op limpo no Windows/Linux
### O Que Foi Corrigido
- **Tabelas de Significado**: Tratamento mais robusto de tabelas personalizadas preserva comportamento esperado de rolagem
- Menos erros de valor único e melhor validação de intervalo

- Ícone de copiar agora reseta adequadamente após rolagens subsequentes no iPad
- **Tabelas Personalizadas**: Campo description agora persiste de ponta a ponta através de notifiers, repositório e armazenamento

- Sem mais intervalos de largura zero causando erros de cálculo
- Recálculo mais seguro e melhor tratamento de tabelas inválidas

- **Detecção de Loja**: Verificações de recibo de compra mais confiáveis no iOS e macOS com melhor tratamento de erros
- **Problemas de Layout**: Menos instabilidade de layout, posição de rolagem estável, animações mais suaves

- **Suporte iPad**: "Editar Nova Cena Automaticamente" agora funciona consistentemente
- **Importação/Exportação**: Melhor tratamento de arquivos CSV/PSV/TXT malformados com relatório de erro adequado

- **Importação de Diário**: Perguntas de Destino agora restauram adequadamente após importação iOS → Android/Boox
### Começando

#### Descrições de Entrada
- Abra qualquer Tabela de Significado ou Foco de Evento
- Toque no botão de editar

- Adicione descrições às suas entradas (suporta formatação Markdown)
- Salve e aproveite resultados mais ricos com descrições exibidas abaixo de cada rolagem
#### Suporte Multilinha de Tabelas Personalizadas
- Crie ou edite uma Tabela Personalizada
- Use o campo de texto multilinha para entradas mais longas

- Adicione quebras de linha e formatação Markdown básica
- Importação/exportação agora preserva toda a formatação
### Problemas Conhecidos
- Algumas tabelas de usuário malformadas podem permanecer em quarentena; corrija o JSON ou re-importe
- Descrições de entrada requerem o novo schema v3.1; tabelas mais antigas não as mostrarão até serem atualizadas

- Formatos de tabela muito antigos podem precisar de re-importação para acessar novos recursos

Obrigado pelo seu contínuo apoio! Estamos sempre trabalhando para tornar o Mythic GME 2e o melhor companheiro de jogo solo possível.
