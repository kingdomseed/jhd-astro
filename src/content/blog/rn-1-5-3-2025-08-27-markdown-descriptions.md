---
title: "Release Notes — v1.5.2–v1.5.3"
summary: "Entry descriptions in results, Markdown in logs, smarter custom tables, localization updates, storage recovery"
category: "Release Notes"
date: "2025-08-27"
readTime: "8 min read"
isSample: false
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

Mythic GME 2e v1.5.2-1.5.3 Release Notes

*Released August 2025*

### 🌍 Available in English and Portuguese / Disponível em Inglês e Português

Scroll down for both languages / Role para baixo para ambos os idiomas

## 🇺🇸 English

### What's New

#### Enhanced Game Experience
- **Entry Descriptions**: Meaning Tables and Event Focus entries now support an optional `description` field that appears beneath results in the roll UI and in your Game Log
- **Markdown Support**: Adventure Log now renders Markdown formatting for Meaning Tables, Event Focus, and Lists - use **bold**, *italic*, `code`, and line breaks in your table entries and more

- **Better Results Display**: Roll results now show descriptions inline beneath each result, with proper formatting preserved from your table entries

> **Note on Markdown Support**: The app supports multiple levels of Markdown syntax through the `flutter_markdown_plus` package. For reference, there are three main Markdown specifications: John Gruber's original syntax , CommonMark (which clarifies ambiguous cases), and GitHub Flavored Markdown (a strict superset of CommonMark). The app supports basic, CommonMark, GitHub Flavored, and GitHub Web syntax levels.

#### Custom Tables Get Smarter
- **Multiline Entries**: Custom table editor now supports proper line breaks and multiline text input using TextField with multiline support
- **Auto-Expand**: Tables automatically expand their range from 1-20 to 1-100 when you add entries beyond the current range, with undo functionality and "don't auto-expand again" option

- **Enhanced Import/Export**: CSV: Now includes `description` column when present
- PSV: Supports `endpoint|result|description` format

- TXT: Supports `result|description` format
- JSON: Full description field support via serializers

- Foundry VTT JSON: Maps `result.description` field

#### Language & Localization
- **German Added**: Complete German language support across Custom Tables, Settings, editor UI, error messages, accessibility labels, and premium hints
- **Spanish Split**: Separate `es_ES` (Spain) and `es_MX` (Mexico) locale options with proper regional formatting

- **Language Groups**: Settings now shows "Official" (English, Portuguese) vs "Unofficial" (UI-only) translations with clear labeling
#### Storage & Recovery
- **Desktop Recovery Gate**: Windows/macOS/Linux now explicitly blocks startup when Documents folder is unavailable (redirected/missing) and prompts for folder selection
- **Custom Storage Integration**: Recovery flow reuses existing `useCustomStorage`, `customStoragePath`, and `securityBookmark` preferences

- **Better Backup**: Improved backup and restore functionality with safer journal operations
#### Platform Improvements
- **iOS/macOS**: Analytics consent dialog on first run (opt-in by default)
- More reliable purchase receipt verification

- Non-exempt encryption export compliance key added
- **Android**: Better crash reporting, smoother startup, safer store detection

- **Windows/Linux**: Explicit folder selection when Documents unavailable, no silent fallbacks
#### UI & Accessibility
- **Consistent Theming**: Entry Links selector, Creation Wizard help blocks, and translation hints now use `onPrimary` color scheme for better contrast
- **Flutter 3.35 Migration**: Updated to new `RadioGroup` API in Settings → Theme & Language

- **Accessibility**: Enhanced labels and screen reader support across all new features
#### Analytics & Privacy
- **Centralized Screen Tracking**: PostHog navigator observer tracks route transitions without widget rebuilds
- **Consent Gating**: Single `analyticsEnabled` toggle controls both PostHog and Firebase

- **Platform Coverage**: PostHog enabled on Web/iOS/Android/macOS, clean no-op on Windows/Linux
### What's Fixed
- **Meaning Tables**: Sturdier custom table handling preserves expected roll behavior
- Fewer single-value errors and better range validation

- Copy icon now resets properly after subsequent rolls on iPad
- **Custom Tables**: Description field now persists end-to-end through notifiers, repository, and storage

- No more zero-width ranges causing calculation errors
- Safer recalculation and better invalid table handling

- **Store Detection**: More reliable purchase receipt checks on iOS and macOS with better error handling
- **Layout Issues**: Less layout jitter, stable scroll position, smoother animations

- **iPad Support**: "Auto-edit New Scene" now consistently opens the editor
- **Import/Export**: Better handling of malformed CSV/PSV/TXT files with proper error reporting

- **Journal Import**: Fate Questions now restore properly after iOS → Android/Boox import
### Getting Started

#### Entry Descriptions
- Open any Meaning Table or Event Focus table
- Tap the edit button

- Add descriptions to your entries (supports Markdown formatting)
- Save and enjoy richer results with descriptions displayed beneath each roll
#### Custom Table Multiline Support
- Create or edit a Custom Table
- Use the multiline text field for longer entries

- Add line breaks and basic Markdown formatting
- Import/export now preserves all formatting
### Known Issues
- Some malformed user tables may remain quarantined; fix the JSON or re-import
- Entry descriptions require the new schema v3.1; older tables won't show them until updated

- Very old table formats might need re-importing to access new features

## 🇧🇷 Português

### O Que Há de Novo

#### Experiência de Jogo Aprimorada
- **Descrições de Entradas**: Tabelas de Significado e Foco de Evento agora suportam um campo opcional `description` (schema v3.1) que aparece abaixo dos resultados na interface de rolagem e no Log do Jogo
- **Suporte Markdown**: O Log de Aventura agora renderiza formatação Markdown para Tabelas de Significado, Foco de Evento e Listas - use **negrito**, *itálico*, `código` e quebras de linha em suas entradas de tabela

- **Melhor Exibição de Resultados**: Resultados de rolagem agora mostram descrições inline abaixo de cada resultado, com formatação adequada preservada de suas entradas de tabela

> **Nota sobre Suporte Markdown**: O aplicativo suporta múltiplos níveis de sintaxe Markdown através do pacote `flutter_markdown_plus`. Para referência, existem três especificações principais de Markdown: sintaxe original de John Gruber , CommonMark (que esclarece casos ambíguos), e GitHub Flavored Markdown (um superconjunto estrito do CommonMark). O aplicativo suporta níveis de sintaxe básico, CommonMark, GitHub Flavored e GitHub Web.

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

Thank you for your continued support! We're always working to make Mythic GME 2e the best solo gaming companion possible.

Obrigado pelo seu contínuo apoio! Estamos sempre trabalhando para tornar o Mythic GME 2e o melhor companheiro de jogo solo possível.
