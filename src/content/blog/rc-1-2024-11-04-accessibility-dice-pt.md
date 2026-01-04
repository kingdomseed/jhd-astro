---
title: "Release Candidate 1 — Notas de Lançamento"
summary: "Revisão de acessibilidade, novo núcleo de rolador de dados, armazenamento mais seguro e endurecimento de plataforma"
category: "Release Notes"
date: "2024-11-04"
readTime: "5 min de leitura"
isSample: false
lang: "pt"
keywords: ["notas de lançamento", "Apps Mythic GME"]
tags: ["beta", "series:beta-to-first-release", "rc1", "product:apps", "accessibility", "dice-roller", "platform"]
---

Lançado em 4 de Novembro de 2024

Este post faz parte da série Beta → Primeiro Lançamento.

Eu sei que isso é tipo três builds em um fim de semana e uma segunda-feira, mas estou lançando o Release Candidate hoje à noite. Se nada estiver quebrando, esta é a versão que vai para as lojas aguardando cronogramas de aprovação.

## Aprimoramentos de Acessibilidade

### Melhorias de Estrutura Semântica
- Estrutura de cabeçalho semântico abrangente em todas as páginas
- Rótulos e funções semânticos adequados para melhor compatibilidade com leitor de tela
- Fluxo de navegação melhorado para tecnologias assistivas
- Hierarquia de conteúdo reorganizada para clareza
- Suporte a escala de texto dinâmica em todas as telas
- Taxas de contraste melhoradas para legibilidade

### Suporte a Deficiência de Visão de Cores
- Adicionado suporte para seis perfis de visão de cores:
  - Protanopia (cegueira ao vermelho)
  - Deuteranopia (cegueira ao verde)
  - Tritanopia (cegueira ao azul)
  - Protanomalia (fraqueza ao vermelho)
  - Deuteranomalia (fraqueza ao verde)
  - Tritanomalia (fraqueza ao azul)
- Elementos de UI e indicadores amigáveis para daltônicos
- Opção de modo de alto contraste
- Mecanismos de feedback visual aprimorados

## Melhorias do Rolador de Dados

### Funcionalidade Principal
- Reescrita completa da visualização e viewmodel do Rolador de Dados
- Integração total com `dart_dice_parser`
- Suporte a notação avançada:
  - Dados padrão (d4, d6, d8, d10, d12, d20, d100)
  - Múltiplos dados (2d6, 3d8, …)
  - Modificadores (+1, −2, …)
  - Manter maior/menor (kh1, kl2, …)
  - Re-rolagens (r1, r<3, …)
  - Dados explosivos (!)
  - Números alvo (t6, t>4, …)

### Aprimoramentos de Interface do Usuário
- Log de rolagem de dados dedicado
- Interruptores de alternância para configurações comuns
- Feedback visual claro para resultados
- Exibição de histórico aprimorada
- Acesso rápido a combinações usadas frequentemente

## Melhorias de Backend

### Manuseio de Arquivos
- Corrigido bug crítico de carregamento de diário afetando persistência
- Operações de leitura/escrita de arquivo mais seguras
- Melhor tratamento de erro para operações de arquivo
- Mecanismos de armazenamento otimizados

### Otimização de Plataforma
- Permissões necessárias reduzidas no Android e iOS
- Permissões de acesso a arquivo simplificadas
- Acesso a armazenamento desnecessário removido
- Operações em segundo plano otimizadas

## Melhorias Gerais
- Estilo de UI limpo e padronizado
- Melhor desempenho com grandes conjuntos de dados
- Mensagens de erro e feedback do usuário melhorados
- Documentação e seções de ajuda atualizadas

## Problemas Conhecidos
- Nenhum relatado atualmente no RC1

## Notas de Instalação
- Instalação limpa recomendada
- Faça backup dos dados existentes antes de atualizar
- Verifique as permissões do app após a atualização

Estou fazendo verificações completas de conformidade e permissões agora para garantir que nenhum dado esteja sendo puxado do seu dispositivo por acidente.
