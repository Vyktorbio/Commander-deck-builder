# Commander

App para Magic: The Gathering no formato Commander, num único arquivo HTML. Funciona no celular e no computador, instala como aplicativo e roda sem internet depois da primeira visita.

**Abrir:** https://vyktorbio.github.io/Commander-deck-builder/

## Mesa
- Vida de 1 a 6 jogadores, dano de comandante por carta, veneno, energia, experiência, radiação, anel, masmorra, monarca, iniciativa e marcadores próprios
- Taxa de comandante, reserva de mana, turnos e cronômetro, dados e sorteio de quem começa
- Painel de cada jogador ligado a um deck, com a arte do comandante
- Consulta do texto oficial e das regras de qualquer carta durante o jogo
- Encerrar partida e registrar o vencedor

## Deck
- Importa listas do Moxfield, Archidekt e Arena; busca de cartas com filtros na identidade do comandante; scanner pela câmera
- Escolha de edição e arte, lista "Considerando", modo galeria, regras e fichas de cada carta
- Legalidade (100 cartas, singleton, identidade de cor, banidas, par de comandantes) e piso de bracket com Game Changers
- Curva, cores, base de mana calculada pela hipergeométrica, funções, preço em reais e quanto falta comprar da coleção
- Simulação de Monte Carlo com mulligan e tutores, conferida contra a conta exata; chance de comprar por turno
- Playtester com campo, cemitério, exílio e zona de comando; combos do Commander Spellbook; sugestões do EDHREC e por função
- Comparar decks e imprimir proxies em tamanho real

## Partidas
- Histórico, vitórias por deck e por jogador, backup único de tudo

Os dados ficam só no navegador de cada aparelho. Use **Partidas → Baixar backup** para levar para outro aparelho.

Dados de cartas: [Scryfall](https://scryfall.com). Combos: [Commander Spellbook](https://commanderspellbook.com). Sugestões: [EDHREC](https://edhrec.com). Leitura do nome no scanner: [Tesseract.js](https://github.com/naptha/tesseract.js). Este app não é afiliado à Wizards of the Coast.
