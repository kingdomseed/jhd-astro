---
fullArticleAvailable: true
title: "Compartilhar Diários de aventura"
summary: "Você pode salvar um Diário como arquivo, enviar esse arquivo para alguém e trazer um arquivo de Diário para o app."
category: "adventure-journals"
order: 1
icon: "fa-slab fa-regular fa-share-nodes"
duration: "7 min de leitura"
updated: "2026-10-09"
lang: "pt"
tags: ["journals", "sharing", "export", "import"]
keywords:
  - Compartilhar diários
  - Exportar
  - Importar
  - JSON
related:
  - guide-to-the-mythic-journals
  - writing-and-organizing-scenes
---

Você pode salvar um Diário como arquivo, enviar esse arquivo para alguém e trazer um arquivo de Diário para o app. Tudo isso fica em **Configurações**, na aba **Arquivos**, em **Exportar Diário** e **Importar Diário**.

## Exportar um Diário

A exportação vale para o Diário que está aberto.

- **Exportar diário como JSON** salva o Diário inteiro. É a única exportação que o app consegue ler de volta. O app guarda cópias de backup ao mover o armazenamento ou fazer uma restauração, não em um salvamento comum; a exceção é um Diário salvo no iCloud com versões em conflito, em que salvar pode fazer o app tentar copiar as outras versões para arquivos de backup separados.
- **Exportar diário como Markdown** salva uma cópia para leitura. Ela traz o Fator de Caos, suas cenas, seus Personagens, suas Tramas e seus Aspectos com as anotações, e todas as entradas do registro. Ela deixa de fora as Listas personalizadas, as Trilhas de Progresso de fio e as Cenas-Chave. Um arquivo Markdown não pode ser importado.

O arquivo recebe o nome do Diário. No iOS e no Android, abre o menu de compartilhamento. No Windows, no macOS e no Linux, abre uma janela para salvar o arquivo.

## Importar um Diário

1. Selecione **Importar diário por arquivo** e escolha um arquivo `.json`.
2. A tela **Revise a Importação do Diário** abre. Ela mostra os detalhes do Diário e, quando houver, **Problemas encontrados** e **Notas**.
3. Selecione **Importar Diário**. O Diário importado passa a ser o Diário aberto.

O nome do Diário vem de dentro do arquivo, não do nome do arquivo.

### Se o nome já estiver em uso

A tela mostra **Conflito de nome do diário** com duas opções.

- **Renomear diário importado** já vem selecionada. O app sugere o mesmo nome com "copy" no final. Selecione **Renomear e importar**.
- **Sobrescrever diário existente** substitui o Diário que já está no app. Marque **Entendo que isso sobrescreverá o diário existente** e selecione **Sobrescrever e importar**. O app não guarda cópia do Diário substituído, então exporte esse Diário antes se você puder querer recuperá-lo.

### Se o arquivo não puder ser importado

- **Não Foi Possível Importar o Diário** significa que falta em um arquivo de Diário único algo de que o app precisa: um nome de Diário, um Fator de Caos de 1 a 9, ou a lista de cenas, Personagens, Tramas ou Aspectos. A tela informa o que está faltando. Arquivos no formato antigo com campaignName não precisam da lista de Aspectos. Uma lista presente, mas vazia ou nula, gera um aviso em vez desse erro; um valor que não é uma lista é um erro. Um arquivo com vários Diários é importado por outro caminho, sem essa tela.
- **Atualização necessária: atualize o Mythic GME para abrir este diário.** significa que o arquivo foi salvo por uma versão mais nova do app. Atualize o app e importe de novo.

Um arquivo no formato antigo do app ainda pode ser importado. O app faz a conversão.

### Um arquivo com vários Diários

Um arquivo com uma lista de Diários é importado de uma vez, sem revisão. Se um nome já estiver em uso, o app acrescenta um número ao nome do Diário importado, como " (1)", então uma lista nunca substitui um Diário. O app lê todos os itens do arquivo antes de salvar qualquer um deles. Se algum item não puder ser lido como um Diário, como um item salvo em um formato mais recente que esta versão do app não consegue ler, nada do arquivo é importado, mas um item em que faltam apenas alguns dados ainda pode ser importado com valores padrão. Se um Diário falhar durante o salvamento, o app o ignora, importa os demais e informa quantos falharam.

## Restaurar de arquivo não é importação

**Restaurar de arquivo** fica no menu **Mais opções** de um Diário. Depois que você confirma, ele substitui esse Diário pelo conteúdo de um arquivo `.json` e mantém o nome de arquivo do Diário. Nos apps para iOS, Android, Windows, macOS e Linux, o app guarda uma cópia de backup do Diário substituído. Na demonstração web, nenhuma cópia é guardada, então exporte o Diário antes se você puder querer recuperá-lo.

## Linux e a demonstração web

No Linux, importar e exportar exigem o xdg-desktop-portal e um backend de portal.

Na demonstração web, os Diários ficam salvos no navegador. Exporte em JSON para fazer backup ou levá-los para outro lugar.
