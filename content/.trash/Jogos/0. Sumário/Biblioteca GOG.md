---
Tipo:
  - Biblioteca
tags:
  - Biblioteca
  - GOG
Nº de Jogos: 94
---

````tabs
tab: Jogos
```dataview 
TABLE WITHOUT ID file.link AS "‎Jogos", embed(link(meta(Capa).path,"100")) AS "Capa", row["Data de Lançamento"] AS "📅", Plataforma, Desenvolvedora, Publisher, Adquirido AS "🛒", Status, row["Tempo de Jogo"].hours AS "⏱", Mememêtro AS "🤡", Nota
FROM #GOG
SORT file.name ASC


tab: Pesquisa

`INPUT[text:searchTerm]`

```dataview 
TABLE WITHOUT ID file.link AS "‎Jogos", embed(link(meta(Capa).path,"100")) AS "Capa", row["Data de Lançamento"] AS "Data de Lançamento", Plataforma, Desenvolvedora, Publisher, Adquirido, Status, row["Tempo de Jogo"].hours AS "⏱", Mememêtro AS "🤡", Nota
FROM #GOG
WHERE this.searchTerm != null AND
this.searchTerm != "" AND
(contains(lower(file.name), lower(this.searchTerm))
OR contains(lower(file.content), lower(this.searchTerm))
OR contains(lower(file.tags), lower(this.searchTerm))
OR contains(lower(Plataforma), lower(this.searchTerm))
OR contains(lower(Tipo), lower(this.searchTerm))
OR contains(lower(Desenvolvedora), lower(this.searchTerm)))
SORT file.name ASC
```
tab: Filtro

`INPUT[inlineSelect(option(Filtro por Status), option(Não Joguei Ainda), option(Já Joguei), option(Zerei), option(Joguei e Larguei), option(Revisitar no Futuro)):thisStatus]` `INPUT[inlineSelect(option(Filtro por Plataforma), option(Microsoft Windows), option(Playstation), option(Playstation 2), option(Playstation 3), option(Playstation 4), option(Playstation 5), option(Xbox), option(Xbox 360), option(Xbox One), option(Xbox Series X), option(NES), option(SNES), option(Nintendo 64), option(Nintendo GameCube), option(Nintendo Wii), option(Nintendo Wii U), option(Master System), option(Mega Drive), option(Xbox), option(Sega Saturn), option(Neo Geo AES), option(Dreamcast), option(Atari 7800), option(3DO), option(Atari Jaguar), option(TurboGrafx-16), option(VR)):thisPlatform]` `INPUT[inlineSelect(option(Filtro por Tipo), option(Jogo), option(Mod), option(Indie)):thisType]`

```dataview 
TABLE WITHOUT ID file.link AS "‎Jogos", embed(link(meta(Capa).path,"100")) AS "Capa", row["Data de Lançamento"] AS "📅", Plataforma, Desenvolvedora, Publisher, Adquirido, Status, row["Tempo de Jogo"].hours AS "⏱", Mememêtro AS "🤡", Nota
FROM #GOG
WHERE Status != null AND
(contains(lower(Status), lower(this.thisStatus))) OR
(contains(lower(Plataforma), lower(this.thisPlatform))) OR
(contains(lower(Tipo), lower(this.thisType)))
SORT file.name ASC
```
tab: ⓘ
###### Mememêtro : Nivel de ~~Desgraça~~ Seriedade do Game 

````
# Biblioteca
	'"Deus Ex™ GOTY Edition",
    "SteamWorld Quest: Hand of Gilgamech",
    "GRIP",
    "BioShock® 2",
    "BioShock™ 2 Remastered",
    "Hitman 2: Silent Assassin",
    "Hitman 3: Contracts",
    "Hitman: Blood Money",
    "Hitman: Codename 47",
    "The Town of Light",
    "The Dark Eye: Chains of Satinav",
    "Akalabeth: World of Doom",
    "Ascendant",
    "Beneath a Steel Sky (1994)",
    "Betrayer",
    "Bio Menace",
    "CAYNE",
    "Daggerfall Unity - GOG Cut",
    "Dagon: by H. P. Lovecraft",
    "Delores: A Thimbleweed Park Mini-Adventure",
    "Dink Smallwood HD",
    "Doomdark's Revenge",
    "Eschalon: Book I",
    "Fall of Porcupine: Prologue",
    "Flight of the Amazon Queen",
    "Hello Neighbor Alpha Version",
    "Hellpoint: The Thespian Feast",
    "Higurashi When They Cry Hou - Ch.1 Onikakushi",
    "Janosik",
    "Jill of the Jungle: The Complete Trilogy",
    "Loria",
    "Lure of the Temptress (1992)",
    "Martial Law",
    "Nomads of Driftland",
    "OpenTTD",
    "Our Life: Beginnings &amp; Always",
    "Overload - Playable Teaser",
    "POSTAL: Classic and Uncut",
    "Quake II RTX",
    "Samorost 1",
    "Sang-Froid: Tales of Werewolves",
    "Shadow Warrior Classic Complete",
    "Shores Unknown: Arrival",
    "Stargunner",
    "Sunrider: Mask of Arcadius",
    "Teenagent",
    "The Darkest Tales - Into the Nightmare",
    "The Elder Scrolls II: Daggerfall",
    "The Elder Scrolls: Arena",
    "The Life and Suffering of Sir Brante - Chapter 1 &amp; 2",
    "The Lords of Midnight",
    "Treasure Adventure Game",
    "Tyrian 2000",
    "Ultima™  Worlds of Adventure 2: Martian Dreams",
    "Ultima™ 4: Quest of the Avatar",
    "Urbek City Builder Prologue",
    "War Wind ",
    "Worlds of Ultima™ : The Savage Empire",
    "Wolfenstein: Enemy Territory",
    "Chicken Assassin: Reloaded",
    "Close To The Sun",
    "Scorn",
    "BioShock™",
    "BioShock™ Remastered",
    "RIOT - Civil Unrest",
    "Moonscars",
    "A Plague Tale: Innocence",
    "Mafia: Definitive Edition",
    "Overcooked: Gourmet Edition",
    "Sir Whoopass™: Immortal Death",
    "Shogun Showdown",
    "Call of Juarez: Gunslinger",
    "Tomb Raider: Underworld",
    "Quake II",
    "Quake II (Original)",
    "The Coma: Recut",
    "Planet of Lana",
    "Hero's Hour",
    "The Outer Worlds",
    "Duck Paradox",
    "Coromon",
    "Monster Train",
    "Pumpkin Jack",
    "The Gunk",
    "Ghost Song",
    "Spelunky",
    "STAR WARS™: Bounty Hunter™",
    "DREDGE",
    "Overcooked! 2",
    "Neverwinter Nights Diamond",
    "Neverwinter Nights: Enhanced Edition",
    "Space Hulk: Deathwing - Enhanced Edition",
    "Baldur's Gate II: Enhanced Edition",
    "Baldur's Gate: Enhanced Edition"

