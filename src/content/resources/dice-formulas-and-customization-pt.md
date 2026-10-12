---
title: Fórmulas de Dados e Personalização
summary: "Monte rolagens com vantagem, limites, dados explosivos ou compostos, manter/descartar e mais."
category: dice-roller
order: 3
icon: fa-slab fa-regular fa-sliders
duration: 12 min de leitura
updated: 2025-09-21
lang: pt
tags:
  - dice
  - formulas
  - systems
  - advanced
  - guides
keywords:
  - personalização
  - fórmula de dados
  - rolar dados
  - salvar fórmulas
downloads:
  - label: "Fórmulas Salvas D&D 5e"
    href: "/downloads/formulas_dnd5e.json"
    format: "JSON"
  - label: "Fórmulas Salvas Pathfinder 2e"
    href: "/downloads/formulas_pf2.json"
    format: "JSON"
  - label: "Fórmulas Salvas Shadowrun"
    href: "/downloads/formulas_shadowrun.json"
    format: "JSON"
  - label: "Fórmulas Salvas Blades in the Dark"
    href: "/downloads/formulas_blades.json"
    format: "JSON"
  - label: "Fórmulas Salvas Savage Worlds"
    href: "/downloads/formulas_savage_worlds.json"
    format: "JSON"
  - label: "Fórmulas Salvas Year Zero Engine"
    href: "/downloads/formulas_year_zero.json"
    format: "JSON"
  - label: "Fórmulas Salvas Vampire V5"
    href: "/downloads/formulas_vampire_v5.json"
    format: "JSON"
  - label: "Fórmulas Salvas Powered by the Apocalypse (PbtA)"
    href: "/downloads/formulas_pbta.json"
    format: "JSON"
  - label: "Fórmulas Salvas Fate Core"
    href: "/downloads/formulas_fate.json"
    format: "JSON"
  - label: "Fórmulas Salvas Call of Cthulhu 7e"
    href: "/downloads/formulas_coc7e.json"
    format: "JSON"
  - label: "Fórmulas Salvas Cypher System"
    href: "/downloads/formulas_cypher.json"
    format: "JSON"
  - label: "Fórmulas Salvas Warhammer d6 Pools"
    href: "/downloads/formulas_warhammer_d6.json"
    format: "JSON"
  - label: "Fórmulas Salvas Lancer"
    href: "/downloads/formulas_lancer.json"
    format: "JSON"
  - label: "Fórmulas Salvas Ironsworn"
    href: "/downloads/formulas_ironsworn.json"
    format: "JSON"
  - label: "Fórmulas Salvas Starforged"
    href: "/downloads/formulas_starforged.json"
    format: "JSON"
  - label: "Fórmulas Salvas Dungeon Crawl Classics"
    href: "/downloads/formulas_dcc.json"
    format: "JSON"
  - label: "Fórmulas Salvas The One Ring"
    href: "/downloads/formulas_one_ring.json"
    format: "JSON"
related:
  - saving-and-managing-dice-formulas
  - formula-schema
---

## Leia isso primeiro (Sem programação necessária)

- Fórmulas são expressões simples e legíveis (como `2d6+3`).
- Você pode digitar uma fórmula, rolá-la e tocar em Salvar Fórmula para guardá-la. No celular, Salvar Fórmula e Gerenciar Fórmulas ficam abaixo do campo da fórmula; em um tablet ou computador, ficam acima dele.
- Salvar armazena o que quer que esteja atualmente no campo de texto e permite nomear e adicionar uma descrição. Gerenciar permite importar, exportar, renomear, reordenar e excluir.

> **Dica**: Para salvar, você só precisa do texto da fórmula—não é necessário entender cada opção abaixo. Volte aqui quando quiser fazer algo mais avançado.

## Folha de dicas básica

- Rolar dados: `XdY` (ex., `2d6`, `1d20`, `1d%` para d100)
- Dados especiais: `1D66` (D maiúsculo), `4dF` (dados Fate), faces personalizadas: `2d[2,3,5,7]`
- Matemática e agrupamento: `+`, `-`, `*`, parênteses `( )` (divisão não é suportada)
- Manter / Largar: `kh` manter maior, `kl` manter menor, `-H` largar maior, `-L` largar menor (ex., `3d20kh2`, `4d6-L`)
- Explodir / Compor: `!` (explodir), `!!` (compor), adicione `o` para uma vez: `!o`, `!!o` (ex., `4d6!`, `5d10!!o>=8`)
- Re-rolar: `r` (re-rolar correspondências), `ro` (re-rolar uma vez) (ex., `4d4r<=2`, `4d4ro<2`)
- Contar / Pontuação:
  - \# retorna uma contagem e descarta os resultados individuais dos dados: 6d6#>=5
  - #s, #f, #cs e #cf marcam dados como sucessos, falhas, sucessos críticos e falhas críticas. Os dados e a soma continuam como foram rolados, e a linha da rolagem lista as contagens. Por exemplo: `6d6 #f<=2 #s>=5 #cs6 #cf1`
- Limitar (cap): `C<` e `C>` (ex., `4d20 C<5`, `4d20 C>15`)

Pegadinhas de ordem e precedência
- A ordem importa com manter e com os contadores de marcação. 2d20 kh #cf #cs descarta primeiro o dado mais baixo; para marcar os dois dados antes de manter, escreva (2d20 #cf #cs) kh, porque 2d20 #cf #cs kh mantém os dois dados.
- Operadores de Largar/filtrar ligam mais forte que aritmética. `(5d6+5d10)-L2` larga do conjunto combinado; `5d6+5d10-L2` larga apenas dos d10s.
- Use `D66` maiúsculo (minúsculo `d66` é um dado de 66 lados, não D66).

## Padrões que você usará muito

- Vantagem / Desvantagem: `2d20kh+MOD` e `2d20kl+MOD`
- Melhor / Pior de N: `NdXkh1` ou `NdXkl1` (ex., `3d6kh1`)
- Valores de Habilidade (4d6 largar menor): `4d6-L`
- Explodir uma vez vs. livremente: `4d6!o` (explodir apenas uma vez) vs `4d6!` (repetir)
- Compor (estilo Shadowrun/L5R): `5d6!!` ou com limite `5d6!!>=5`
- Sucessos por limite: `NdX#>=TN` (ex., `6d6#>=5`)
- Re-rolar uma vez vs. repetir: `ro` vs `r` (ex., `4d6ro1` vs `4d6r1`)
- Manter/largar através de conjuntos combinados: `(1d8!!+1d6!!) kh` (Traço Savage Worlds + dado selvagem)

## Pontos de partida de sistemas (receitas rápidas)

Estes exemplos dão a você fórmulas iniciais sólidas. Alguns sistemas usam dados de símbolos personalizados—aqueles são notados como "Não suportado".

D&D 5e / Pathfinder 2e
- Ataque/teste: `1d20+MOD`
- Vantagem/Desvantagem: `2d20kh+MOD` / `2d20kl+MOD`
- Valores de Habilidade: `4d6-L`
- Críticos: role dados de dano dobrados manualmente (ex., `2d6` → `4d6`)

Powered by the Apocalypse (PbtA)
- Movimento básico: `2d6+STAT` → interprete 10+, 7–9, 6- manualmente

Fate Core
- Dados Fate: `4dF` (já suportado)

Blades in the Dark
- Conjunto manter maior: `Nd6kh1` (ex., `3d6kh1`)
- Críticos pontuais (dois 6s): adicione `Nd6#=6` para contar seis ao lado de sua rolagem

Shadowrun (acertos e falhas)
- Acertos: `Nd6#>=5`
- Rastrear 1s para regras de falha: adicione `Nd6#f=1`

Savage Worlds (traço + dado selvagem)
- Rolar ambos, manter maior: `(TRAIT!! + 1d6!!) kh + MOD`
- Aumentos (+4) são interpretados manualmente do total

Vampire: The Masquerade (V5)
- Sucessos: `Nd10#>=6`
- Rastrear 10s: adicione `Nd10#=10` (pares críticos/impactos requerem regras de mesa)

Call of Cthulhu 7e
- Rolar abaixo (roll-under): `1d100` vs perícia
- Dados de Bônus/Penalidade: lide como um método manual de dois passos (substituição de dado de dezenas não codificada)

Cypher System
- Rolagem de tarefa: `1d20+MOD` (passo/dificuldade permanece narrativo)

Warhammer/estilo 40K pools de d6
- Acertos/ferimentos: `Nd6#>=TN` (defina TN para sua mesa)

Dungeon Crawl Classics (cadeia de dados)
- Tamanhos de dados ímpares são ok: `1d7`, `1d16`, `1d24`, `1d30`

Lancer (precisão/dificuldade)
- Precisão: `1d20 + (Xd6kh1) + MOD`
- Dificuldade: `1d20 - (Xd6kh1) + MOD`

Year Zero Engine (Free League: Alien, Forbidden Lands, Vaesen, etc.)
- Três conjuntos coloridos (base/perícia, stress, equipamento): Role as três reservas em uma só fórmula com rótulos, por exemplo "Base": 4d6 #s=6, "Stress": 2d6 #s=6, "Gear": 1d6 #s=6. No Estúdio de Dados, a rolagem mostra cada reserva em sua própria linha, com o rótulo e o total.
- Sucessos: `Nd6#s=6` em cada conjunto; rastreie 1s em stress/equipamento com `#f=1`.
- Para forçar, role a reserva no Estúdio de Dados com uma marca de sucesso, por exemplo 5d6 #s=6, e depois use Forçar nessa rolagem. Forçar mantém os dados marcados como sucessos e rola de novo todos os outros, inclusive os 1.
- Limitações: resolução de pânico/quebra permanece na mesa.

The One Ring 2e (aproximação)
- Grosseiramente: `1d12 + Nd6`
- Notas: Gandalf/Olho e seis Tengwar são efeitos de símbolo; trate especiais manualmente

Legend of the Five Rings
- AEG 1e–4e (Rolar e Manter, explodindo 10s): `Xd10!!khY`
- FFG/Edge 5e (dados de símbolo): Não suportado

Genesys / FFG Star Wars (dados narrativos)
- Usa dados de símbolo personalizados: Não suportado

Ironsworn / Starforged
- Rolagem de ação: `1d6+MOD` vs dois dados de desafio `2d10` → compare manualmente (vencer ambos=Acerto Forte; um=Acerto Fraco; nenhum=Errou).
- Movimentos de progresso: role `2d10` vs valor de progresso atual (0–10) e compare manualmente.

## Downloads iniciais

Baixe amostras de Fórmulas Salvas para sistemas populares que estão prontas para importar. Use Gerenciar Fórmulas → Importar. Importar adiciona todas as fórmulas do arquivo ao final da sua lista. Nunca substitui a lista e não pula fórmulas que você já tem. Veja a seção de Downloads no final desta página para arquivos.

Importante: Se você colocar um arquivo manualmente, nomeie-o saved_formulas.json e coloque-o na pasta formulas dentro da pasta de armazenamento do app. Esse arquivo passa a ser sua lista inteira. O fluxo de Importação não exige um nome de arquivo específico. Nos apps nativos, o arquivo precisa terminar em .json (com letras maiúsculas ou minúsculas). Na web, o seletor pede arquivos .json, mas o app não confere a extensão separadamente. O nome do arquivo não garante que o conteúdo seja um arquivo de fórmulas válido.

## Salvar, carregar, importar, exportar (resumo da UI)

- Celular: "Salvar Fórmula" e "Gerenciar Fórmulas" estão sob o campo de texto da fórmula, quando os botões de ação estão ativados.
- Desktop: ambos aparecem acima do campo de texto.
- Salvar adiciona a fórmula atual à sua lista Salva e abre um diálogo para nomear/descrever.
- Gerenciar permite importar, exportar, reordenar, renomear e excluir.
- Importar adiciona todas as fórmulas do arquivo ao final da sua lista. Nunca substitui a lista e não pula fórmulas que você já tem.

## Solução de problemas e dicas

- Minhas contagens parecem erradas com vantagem
  - Coloque contadores antes de manter/largar, agrupando-os: `(2d20 #cf #cs) kh`.
- `4d6-L2+2` não fez o que eu esperava
  - 4d6-L2+2 e (4d6-L2)+2 são a mesma rolagem: descarte os dois menores de 4d6 e some 2.
- Meu D66 parece errado
  - Use maiúsculo: `1D66`.
- Eu preciso explodir "uma vez"
  - Use `!o` (explodir uma vez) ou `!!o` (compor uma vez).
- Eu quero manter o total mas também saber sucessos/falhas
  - #s, #f, #cs e #cf marcam dados como sucessos, falhas, sucessos críticos e falhas críticas. Os dados e a soma continuam como foram rolados, e a linha da rolagem lista as contagens.

## Próximos passos

- Salve suas expressões favoritas: veja "Salvando e Gerenciando Fórmulas de Dados".
- Compartilhe e mantenha uma lista portátil: veja "Esquema de Fórmulas".

> ##### Motor de sintaxe e docs
> O rolador usa a versão própria do app do dart_dice_parser, do Adventuresmith. A página no pub.dev descreve o pacote original, então teste uma fórmula no app antes de confiar nela. Para a gramática completa e exemplos adicionais, veja: https://pub.dev/packages/dart_dice_parser

## Viu um problema?

Ajude-me a manter esta página e conteúdo atualizados! Se você ver um problema, por favor reporte-o: support@jasonholtdigital.com
