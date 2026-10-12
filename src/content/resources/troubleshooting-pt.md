---
title: "Solução de Problemas"
summary: "Resolva problemas comuns e saiba o que enviar quando precisar relatar um bug."
category: "adventure-journals"
order: 2
icon: "fa-slab fa-regular fa-life-ring"
duration: "Checklist rápida"
updated: "2026-10-09"
lang: "pt"
tags: ["troubleshooting", "support"]
keywords:
  - Solução de Problemas
  - Suporte
  - Ajuda
---

## Preciso de um backup do meu Diário

O app não faz backup de um Diário em um salvamento comum. Para manter seu próprio backup, abra o Diário, vá em **Configurações**, depois em **Arquivos**, e selecione **Exportar diário como JSON**.

O app guarda uma cópia de backup quando move seus Diários para outro local de armazenamento ou para dentro ou fora do iCloud, e quando uma restauração substitui um Diário no app para iOS, Android, Windows, macOS ou Linux; se um Diário salvo no iCloud tiver versões em conflito, o app também pode tentar copiar as outras versões para arquivos de backup separados ao salvar esse Diário. Uma restauração na demonstração web não guarda cópia.

## A lista Restaurar do backup está vazia

Isso é normal. O app guarda cópias de backup ao mover o armazenamento ou fazer uma restauração, não em um salvamento comum; a exceção é um Diário salvo no iCloud com versões em conflito, em que salvar pode fazer o app tentar copiar as outras versões para arquivos de backup separados. Quando houver cópias na lista, confira a data de uma cópia antes de restaurá-la.

No armazenamento em pasta, o app pode apagar cópias de backup com mais de 7 dias quando o aparelho está com pouca memória. Ele não apaga as cópias que guarda quando uma restauração substitui um Diário. O app não apaga cópias de backup guardadas no iCloud.

## Restaurar um Diário

**Restaurar do backup** e **Restaurar de arquivo** ficam no menu **Mais opções** de cada Diário, em **Configurações**, **Arquivos**. Os dois substituem o Diário depois que você confirma. Nos apps para iOS, Android, Windows, macOS e Linux, o app guarda uma cópia de backup do Diário substituído. Restaurar do backup não existe na demonstração web. Restaurar de arquivo existe, e lá não guarda cópia do Diário substituído.

## Criei um Diário e um mais antigo sumiu

Se você criar um Diário com um nome que já está em uso, marcar a caixa e confirmar, o novo Diário vazio substitui o existente. O conteúdo do Diário antigo é apagado, e o app não faz cópia de backup dele. Isso não remove cópias de backup que o app fez antes. Letras maiúsculas e minúsculas não tornam um nome diferente.

## Mensagens sobre Diários

- **Atualização necessária: atualize o Mythic GME para abrir este diário.** Uma versão mais nova do app salvou este Diário. Atualize o app.
- **Você não pode excluir seu único diário. Crie outro diário primeiro.** O app sempre mantém um Diário. Crie outro Diário e depois apague este.
- **Não foi possível importar o diário.** Quando uma importação falha, o app mostra essa mensagem ou uma mais específica, como **Selecione um arquivo de diário .json.** ou **Este arquivo não é JSON válido.** O arquivo precisa ser um arquivo `.json`, ter JSON válido e conter um Diário.
- **Não Foi Possível Importar o Diário**. A tela lista o que falta no arquivo em **Problemas encontrados**.

## Acesso ao armazenamento necessário

Uma tela inteira com este título significa que o armazenamento do app não está pronto. Selecione **Selecionar a pasta de armazenamento**, ou selecione **Usar documentos de aplicativos** para usar a pasta do próprio app.

Um aviso sobre uma pasta que você escolheu antes significa que o app não conseguiu abrir essa pasta e mudou para a própria pasta padrão. O app continua na pasta padrão, mesmo depois de reiniciar, até você alterá-la. **Reconectar pasta anterior** só volta para essa pasta se o app conseguir abri-la. Até lá, o que você jogar é salvo na pasta padrão. Selecione **Reconectar pasta anterior**, **Escolher pasta** ou **Usar padrão do app**.

## Apareceu um Diário chamado "(Conflicted copy ...)"

Isso acontece no armazenamento em pasta. Se o arquivo de um Diário mudar fora do app enquanto você tem alterações não salvas, o app abre a versão do arquivo e salva suas alterações como um Diário separado. O nome dele é o nome do Diário seguido de "(Conflicted copy", o nome do aparelho e a data e a hora. Procure por ele na lista de Diários.

## Sincronização com o iCloud

**Sincronização do iCloud** está disponível no iPhone e no iPad e em algumas versões do app para Mac. Não existe na demonstração web. O app indica que o recurso é experimental.

- Quando a sincronização está ativada, a seção mostra **Status de Sincronização:** e um botão **Forçar Sincronização**.
- Se o status indicar um problema, selecione o ícone de ajuda ao lado do botão de ativação. Se o iCloud não estiver disponível, **Configurar a sincronização do iCloud** abre com os passos para ativar o iCloud Drive. Se a sincronização falhar, **Erro de Sincronização do iCloud** abre e sugere o que fazer: se **Sincronização do iCloud** estiver desativada, ative-a novamente; se estiver ativada, use **Forçar Sincronização** para recarregar a lista de Diários do iCloud.
- Ativar ou desativar **Sincronização do iCloud** copia seus Diários para o outro local. O app pede confirmação antes e informa o que será copiado e o que será substituído. Depois que a troca é concluída, o app pode remover um original que ele copiou, se esse original não tiver mudado desde então. Um Diário no iCloud que não puder ser lido pode ser ignorado.
- Se o destino tiver um Diário com o mesmo nome de arquivo, o app faz backup dele e depois o substitui.
- Enquanto a sincronização está ativada, **Mudar Localização** e **Redefinir local** ficam desativados.

## Redefinir local

**Redefinir local** move todos os Diários de volta para a pasta do próprio app. Se os seus Diários estiverem em outra pasta, o app pede confirmação antes. Se eles já estiverem na pasta do app, nada é movido e o app não pede confirmação.

## Linux

As janelas de arquivo exigem o xdg-desktop-portal e um backend de portal. Quando a janela de arquivo não consegue abrir, importar, exportar e Restaurar de arquivo mostram "O aplicativo não conseguiu abrir a janela de arquivos. Instale xdg-desktop-portal e um backend de portal e tente novamente."

## A demonstração web

Na demonstração web, os Diários ficam salvos no navegador daquele aparelho. A demonstração não consegue escolher pastas nem usar sincronização na nuvem. Limpar os dados do site ou usar outro navegador pode fazer os Diários desaparecerem. Exporte em JSON para mantê-los.

## Desfazer

**Desfazer** restaura a última coisa que você apagou: uma entrada do Registro de Aventura, uma cena, uma Tabela de significados personalizada, uma tabela de Foco do Evento personalizada, uma tabela padrão que você editou ou uma lista que você limpou. O app guarda as últimas 20. Abrir outro Diário apaga esse histórico. Uma lista personalizada limpa não pode ser restaurada se a própria lista não existir mais.

- Nos apps para iOS e Android, sacuda o aparelho. Quando o app perguntar, selecione **Desfazer**.
- No Mac, pressione Cmd+Z.
- No Windows ou no Linux, pressione Ctrl+Z.

## Informar um bug

Abra **Suporte**. Em **Contatar Suporte**, você pode selecionar **Suporte por E-mail**, **Visitar Site do Suporte** ou **Participe da Nossa Comunidade no Discord**.

Inclua a linha de versão da tela Suporte. Ela mostra a versão e o número do build. O ícone de copiar ao lado dela copia só o número do build.
