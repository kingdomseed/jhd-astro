---
title: "Um Guia para os Diários Mythic"
summary: "Crie, importe e exporte diários; entenda como Fator Caos, Cenas, Listas e Entradas de Log mapeiam para Mythic."
category: "adventure-journals"
order: 0
icon: "fa-slab fa-regular fa-book-open"
duration: "6 min de leitura"
updated: "2025-09-21"
lang: "pt"
tags: ["journals", "getting-started", "import", "export"]
keywords:
  - Diários
  - Começando
  - Importar
  - Exportar
  - Mythic
downloads:
  - label: "Modelo Vazio"
    href: "/downloads/journal_template.json"
    format: "JSON"
  - label: "Exemplo Preenchido"
    href: "/downloads/journal_sample.json"
    format: "JSON"
  - label: "Esquema JSON"
    href: "/downloads/journal.schema.json"
    format: "JSON"
related:
  - writing-and-organizing-scenes
  - sharing-adventure-journals
  - saving-and-managing-dice-formulas
---

# O que é um diário de aventura
O diário de aventura é seu jogo salvo — um lugar único onde você registra o que aconteceu, por que aconteceu e o que mudou. No app, é armazenado como JSON; você pode exportá-lo como JSON (para ida e volta) ou Markdown (para leitura e compartilhamento junto com suas anotações).

## O que ele contém (resumo)

- Linha do tempo do Fator Caos: o mostrador (1–9) em momentos chave; capture no início de cada cena
- Cenas: títulos curtos + resumos que marcam os ritmos de jogo
- Log do Oráculo: Perguntas do Destino (probabilidades, rolagem, resultado) e resultados da Tabela de Significados (Palavras de Descrição) com sua interpretação
- Listas de Aventura: Personagens, Tramas e Características que você referencia e atualiza entre cenas
- Contabilidade: ajustes de fim de cena (FC para cima/baixo) e quaisquer mudanças de lista

## Use-o fora do app

O app armazena seu diário como JSON. Para leitura e compartilhamento fora do app, exporte para Markdown e cole em sua ferramenta de notas (Apple Notes, Obsidian, Notion, Google Docs). Para edição/importação de volta para o app, use a exportação JSON. Mantenha um arquivo por campanha.

- Antes da sessão
  - Crie/abra seu documento de diário
  - Defina Nome do Diário e Fator Caos atual
  - Semeie algumas Tramas e Personagens que você espera ver
- Durante o jogo (cada cena)
  - Cabeçalho de cena: número, título e FC no início da cena
  - Expectativa: Esperada, Alterada ou Interrompida (da Verificação de Cena)
  - Perguntas do Destino: escreva a pergunta, escolha probabilidades, registre rolagem + resultado, adicione uma interpretação de uma linha
  - Eventos Aleatórios: registre Foco do Evento + Palavras de Descrição e o que significam no contexto; anote quaisquer vínculos (Personagem/Trama/Característica)
  - Notas: algumas frases sobre o que aconteceu (não escreva um romance a menos que queira)
- Entre cenas (contabilidade)
  - Ajuste FC: para baixo se você estava no controle; para cima se as coisas saíram do controle
  - Atualize Listas: adicione/remova/promova Personagens/Tramas/Características conforme a história muda

> Dica
> Exporte Markdown para manter um log de campanha legível no seu app de notas, e use exportações/importações JSON quando precisar de fidelidade de ida e volta com o app. Consistência supera complexidade.

## Um modelo de cena simples (copiar/colar)

```markdown
### Cena N: Título (FC: X no início)

- Expectativa: Esperada | Alterada | Interrompida
- Pergunta do Destino: … (Probabilidade: Provável/50–50/… → Rolagem: 43 → Resultado: Sim) — Interpretação: …
- Evento Aleatório (se houver): Foco: … • Palavras de Descrição: Ação=…, Assunto=… — Interpretação: …
- Notas: 2–4 frases sobre o que realmente aconteceu

Contabilidade de fim de cena
- Ajuste de FC: −1 | +1 (motivo)
- Mudanças de Listas: +Personagem …, +Trama …, −Característica …
```

## Organização de arquivos & backups

- Um arquivo por campanha ou aventura
- Nomes que você pode escanear: `minha-aventura-2025-09.md` ou `diario-elderspire.md`
- Backups: o app cria backups automaticamente; você também pode exportar para seu local de backup preferido.
- Exportações: use app → Configurações → Arquivos para exportar JSON (ida e volta) ou Markdown (compartilhável)

## Nenhuma programação necessária

- Se palavras como "JSON" ou "esquema" soam técnicas—não se preocupe. Você não precisa aprender programação para usar diários.
- JSON é simplesmente um arquivo de texto estruturado. O app cria, abre e exporta para você. Pense nisso como um documento formatado ordenadamente que o app entende.
- Um "esquema" é apenas um livro de regras que ajuda ferramentas a verificar "este arquivo parece certo?". É opcional e voltado para usuários avançados ou ferramentas de terceiros. Você pode ignorá-lo.

## Gerencie diários no app

- Crie, importe e exporte diários da seção Configurações → Arquivos.
- Cada diário é independente: mantém seu próprio Fator Caos, Cenas, Listas de Aventura (Personagens/Tramas/Características), Notas de Lista e Entradas de Log.
- Use múltiplos diários para manter diferentes campanhas/sessões separadas; trocar diários não mistura suas listas ou logs.

## Como mapeia para Mythic

- Diário: Seu contêiner de campanha/sessão. Guarda o Fator Caos, Cenas, Listas de Aventura (Personagens/Tramas/Características) e o Log do jogo.
- Fator Caos (FC): Mostrador central do Mythic (1–9) controlando imprevisibilidade. Atualizado ao longo do tempo (tipicamente cena a cena) e afeta Verificações de Cena e oráculos.
- Cenas: Segmentos narrativos. Tipo de cena (Esperada/Alterada/Interrompida) é capturado como uma Entrada de Log de uma Verificação de Cena, não armazenado na cena em si.
- Listas de Aventura: As três listas usadas pelo Mythic para inspiração e eventos:
  - Personagens: NPCs, facções, personas que podem aparecer em eventos.
  - Tramas: Lista de Tramas/objetivos que podem ser avançados/fechados ou referenciados por eventos.
  - Características: Lugares, objetos ou conceitos que dão cor e contexto aos eventos.
- Entradas de Log: Registro ordenado por tempo de oráculos e verificações: Respostas da Tabela de Destino/Verificação, Verificações de Cena, Eventos Aleatórios (Foco do Evento + Palavras de Descrição), etc.

## Fluxo de trabalho básico

1) Comece com o modelo vazio linkado acima. Faça uma cópia e renomeie de `journal_template.json` para algo significativo (por exemplo: `minha-aventura-2025.json`).
   - Mantenha a extensão `.json`—isso ajuda o app e seu sistema a reconhecer o arquivo.
   - Dica: Adicione uma data ou nome de campanha para evitar sobrescrever backups antigos.
2) Preencha `JournalName`, mantenha `ChaosFactor` em 1–9, e adicione Cenas/Listas conforme joga.
3) Adicione Entradas de Log conforme faz rolagens de Tabela de Destino/Verificação, Verificações de Cena e Eventos Aleatórios.
4) Quando uma cena começa, capture o FC atual em `SceneChaosFactor`. Registre resultados de tipo de cena (Esperada/Alterada/Interrompida) via uma entrada de log de Verificação de Cena.
5) Exporte seu diário atual de Configurações → Arquivos (JSON para ida e volta, Markdown para compartilhamento/leitura).

## Dicas

- Cada diário tipicamente representa uma única aventura.
- Cada arquivo de diário inclui suas próprias Listas, Cenas e dados de log.
- Compartilhar no celular abre uma folha de Compartilhamento que facilita enviar para seu local preferido ou compartilhar com amigos.
- Diários podem ser exportados como Markdown para uso em outros apps.

### Reafirmação para não-técnicos

- Você não vai quebrar nada tentando. Se um arquivo não parecer certo, o app dirá a você antes de importar.
- Você nunca precisa editar JSON à mão—use o app para criar e exportar.
- Se você espiar dentro de um arquivo JSON, é apenas texto legível. Feche sem salvar se não tiver certeza.
