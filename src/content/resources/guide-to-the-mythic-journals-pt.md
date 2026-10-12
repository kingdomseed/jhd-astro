---
title: "Guia dos Diários Mythic"
summary: "Crie, importe e exporte Diários; entenda como Fator de Caos, Cenas, Listas e entradas do Diário de Aventura se conectam."
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
Um Diário é o registro salvo do app para uma aventura ou campanha: um único lugar onde você anota o que aconteceu, por que aconteceu e o que mudou. No app, é armazenado como JSON; você pode exportá-lo como JSON (para ida e volta) ou Markdown (para leitura e compartilhamento junto com suas anotações). A exportação em Markdown serve só para leitura. Ela deixa de fora Listas Personalizadas, Trilhas de Progresso de Trama e Cenas-Chave, e o app não consegue importá-la.

## O que ele contém (resumo)

- Linha do tempo do Fator Caos: o mostrador (1–9) em momentos chave. O app salva o Fator de Caos atual do Diário em cada nova cena. Editar uma cena anterior não muda o Fator de Caos do Diário; só a sua cena mais recente o define.
- Cenas: títulos curtos + resumos que marcam os ritmos de jogo
- Registro de Aventura: perguntas de Destino (chances, rolagem, resultado) e resultados de Tabelas de Significado. Para adicionar sua própria interpretação, toque no botão de adicionar no cabeçalho do Registro de Aventura, escreva-a na folha Adicionar Narrativa e toque em Adicionar ao Registro.
- Listas de Aventura: Personagens, Tramas e Aspectos que você referencia e atualiza entre cenas
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
  - Eventos Aleatórios: registre Foco do Evento + Palavras de Descrição e o que significam no contexto; anote quaisquer vínculos (Personagem/Trama/Aspecto)
  - Notas: algumas frases sobre o que aconteceu (não escreva um romance a menos que queira)
- Entre cenas (contabilidade)
  - Ajuste FC: para baixo se você estava no controle; para cima se as coisas saíram do controle
  - Atualize Listas: adicione/remova/promova Personagens/Tramas/Aspectos conforme a história muda

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
- Mudanças de Listas: +Personagem …, +Trama …, −Aspecto …
```

## Organização de arquivos e backups

- Um arquivo por campanha ou aventura
- Nomes que você pode escanear: `minha-aventura-2025-09.md` ou `diario-elderspire.md`
- Backups: Salvar um Diário não cria um backup separado dele, então vá em Configurações, depois Arquivos, e use Exportar diário como JSON para guardar sua própria cópia. O app também tenta guardar uma cópia de backup quando move seus Diários para outro local de armazenamento ou para dentro ou fora do iCloud, e, nos apps para iOS, Android, Windows, macOS e Linux, quando uma restauração substitui um Diário. Na versão web, uma restauração não guarda cópia. Exceção: quando um salvamento bem-sucedido no iCloud encontra versões em conflito não resolvidas de um Diário, o app tenta copiar essas versões para backups antes de marcá-las como resolvidas. Um salvamento comum, sem conflito, não cria backup.
- Exportações: use app → Configurações → Arquivos para exportar JSON (ida e volta) ou Markdown (compartilhável)

## Nenhuma programação necessária

- Se palavras como "JSON" ou "esquema" soam técnicas—não se preocupe. Você não precisa aprender programação para usar diários.
- JSON é simplesmente um arquivo de texto estruturado. O app cria, abre e exporta para você. Pense nisso como um documento formatado ordenadamente que o app entende.
- Um "esquema" é apenas um livro de regras que ajuda ferramentas a verificar "este arquivo parece certo?". É opcional e voltado para usuários avançados ou ferramentas de terceiros. Você pode ignorá-lo.

## Gerencie diários no app

- Crie, importe e exporte diários da seção Configurações → Arquivos.
- Cada diário é independente: mantém seu próprio Fator Caos, Cenas, Listas de Aventura (Personagens/Tramas/Aspectos), Notas de Lista e entradas do Diário de Aventura.
- Use múltiplos diários para manter diferentes campanhas/sessões separadas; trocar diários não mistura suas listas ou logs.

## Como mapeia para Mythic

- Diário: Seu contêiner de campanha/sessão. Guarda o Fator Caos, Cenas, Listas de Aventura (Personagens/Tramas/Aspectos) e o Log do jogo. Um Diário também guarda suas Listas Personalizadas, Trilhas de Progresso de Trama e Cenas-Chave.
- Fator Caos (FC): Mostrador central do Mythic (1–9) controlando imprevisibilidade. Atualizado ao longo do tempo (tipicamente cena a cena) e afeta Verificações de Cena e oráculos.
- Cenas: Segmentos narrativos. Tipo de cena (Esperada/Alterada/Interrompida) é capturado como uma Entrada de Log de uma Verificação de Cena, não armazenado na cena em si.
- Listas da Aventura: Personagens, Tramas e Aspectos. Tramas e Personagens são as duas Listas das regras básicas de Mythic, e Aspectos é a terceira Lista que as regras acrescentam para jogar uma Aventura Preparada.
  - Personagens: NPCs, facções, personas que podem aparecer em eventos.
  - Tramas: Lista de Tramas/objetivos que podem ser avançados/fechados ou referenciados por eventos.
  - Aspectos: Lugares, objetos ou conceitos que dão cor e contexto aos eventos.
- Entradas do Diário de Aventura: registro ordenado por tempo de oráculos e verificações, incluindo respostas da Tabela de Destino/Verificação, Verificações de Cena, Eventos Aleatórios (Foco do Evento + Palavras de Descrição) e outros resultados.

## Fluxo de trabalho básico

1) No jogo normal, você não precisa do modelo. Vá em Configurações, depois Arquivos, toque em Criar Novo Diário e digite um nome. Se o nome já estiver em uso, o app não substitui esse Diário a menos que você confirme separadamente a substituição. Se confirmar, ele cria um Diário vazio com esse nome e o conteúdo do Diário existente é substituído. Conforme joga, você adiciona Cenas e Listas no app, e o app registra suas rolagens no Registro de Aventura.
2) O app salva o Fator de Caos atual do Diário em cada nova cena. Editar uma cena anterior não muda o Fator de Caos do Diário; só a sua cena mais recente o define. As rolagens de Destino, os Testes de Cena e os Eventos Aleatórios são salvos automaticamente no Registro de Aventura, então você não precisa registrá-los.
3) Edição manual de JSON (opcional): o modelo vazio linkado acima, `journal_template.json`, usa o formato de importação antigo, com chaves em PascalCase. O app consegue importá-lo, mas ele não é um exemplo da exportação atual do app, que usa outros nomes de chave. Faça uma cópia e renomeie-a para algo significativo (por exemplo: `minha-aventura-2025.json`).
   - Mantenha a extensão `.json`—isso ajuda o app e seu sistema a reconhecer o arquivo.
   - Dica: Adicione uma data ou nome de campanha para evitar sobrescrever backups antigos.
   - Preencha `JournalName` e mantenha `ChaosFactor` em 1–9. A importação exige os dois.
   - Se adicionar Cenas à mão, defina você mesmo o `SceneChaosFactor` de cada Cena.
4) Exporte seu diário atual em Configurações → Arquivos: JSON para uma cópia legível por máquina, Markdown para compartilhamento/leitura.

## Dicas

- Cada diário tipicamente representa uma única aventura.
- Cada arquivo de diário inclui suas próprias Listas, Cenas e dados de log.
- No iOS e no Android, exportar abre a folha de compartilhamento para você enviar o arquivo para onde quiser. No Windows, no macOS e no Linux, abre uma janela para salvar o arquivo.
- Diários podem ser exportados como Markdown para uso em outros apps.

### Reafirmação para não-técnicos

- Quando você importa um arquivo com um só Diário, o app mostra antes uma folha de revisão e lista os problemas em Problemas encontrados. Um arquivo com uma lista de Diários é importado de uma vez, sem revisão, e um Diário cujo nome já está em uso recebe um número no nome.
- Sobrescrever diário existente é uma escolha que você faz na importação. Ela substitui o Diário que já está no app, e essa importação não guarda cópia dele, então exporte esse Diário antes se quiser recuperá-lo depois.
- Você nunca precisa editar JSON à mão—use o app para criar e exportar.
- Se você espiar dentro de um arquivo JSON, é apenas texto legível. Feche sem salvar se não tiver certeza.
