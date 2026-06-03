---
Tipo:
  - Biblioteca
tags:
  - Biblioteca
  - Steam
Nº de Jogos: 
cssclasses:
  - cards
---

````tabs
tab: Jogos
```dataview 
TABLE WITHOUT ID file.link AS "‎Jogos", embed(link(meta(Capa).path,"100")) AS "Capa", row["Data de Lançamento"] AS "📅", Plataforma, Desenvolvedora, Publisher, Adquirido AS "🛒", Status, row["Tempo de Jogo"].hours AS "⏱", Mememêtro AS "🤡", Nota
FROM #Steam
SORT file.name ASC


tab: Pesquisa

`INPUT[text:searchTerm]`

```dataview 
TABLE WITHOUT ID file.link AS "‎Jogos", embed(link(meta(Capa).path,"100")) AS "Capa", row["Data de Lançamento"] AS "Data de Lançamento", Plataforma, Desenvolvedora, Publisher, Adquirido, Status, row["Tempo de Jogo"].hours AS "⏱", Mememêtro AS "🤡", Nota
FROM #Steam
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
FROM #Steam
WHERE Status != null AND
(contains(lower(Status), lower(this.thisStatus))) OR
(contains(lower(Plataforma), lower(this.thisPlatform))) OR
(contains(lower(Tipo), lower(this.thisType)))
SORT file.name ASC
```
tab: ⓘ
###### Mememêtro : Nivel de ~~Desgraça~~ Seriedade do Game 

````

| 22/jan./2025 | Mini Thief
| 13/jan./2025 | Ruins To Fortress
| 13/jan./2025 | Sherlock Holmes - The Mystery of the Mummy 
| 13/jan./2025 | All Walls Must Fall
| 13/jan./2025 | Ord. 
| 10/jan./2025 | Jaded 
| 10/jan./2025 | Party Quiz 
| 2/jan./2025 | FINAL FANTASY XIII
| 2/jan./2025 | Divinity - Original Sin Enhanced Edition 
| 2/jan./2025 | Divinity - Original Sin 2
| 8/dez./2024 | Marvel Rivals 
| 30/nov./2024 | [Esquadrão Suicida - Mate a Liga da Justiça](obsidian://open?vault=G-Man's%20Vault&file=Ideias_video%2FJogos%2F1.%20Jogos%20Dump%2FSuicide%20Squad%20-%20Kill%20the%20Justice%20League)
| 23/out./2024 | The Darkness II
| 23/out./2024 | No Man's Sky 
| 23/out./2024 | The Quarry
| 1/out./2024 | Throne and Liberty 
| 27/set./2024 | FINAL FANTASY XV WINDOWS EDITION 
| 27/set./2024 | FINAL FANTASY XV EPISODE ARDYN 
| 25/set./2024 | Wurm Online 
| 20/set./2024 | Brink 
| 18/set./2024 | Vigor 
| 17/set./2024 | The Crew 2
| 17/set./2024 | Age of Empires III - Definitive Edition
| 17/set./2024 | Republique VR 
| 27/ago./2024 | Deadlock
| 24/ago./2024 | Classic Marathon Infinity 
| 10/ago./2024 | JDM - Rise of the Scorpion 
| 3/ago./2024 | Sword of Convallaria 
| 24/jul./2024 | Meridian 59 
| 21/jul./2024 | The First Descendant 
| 21/jul./2024 | STALCRAFT 
| 16/jul./2024 | Classic Marathon 2 
| 16/jul./2024 | Shelley Manor 
| 16/jul./2024 | Katto - Rising Tides 
| 16/jul./2024 | Intravenous
| 12/jul./2024 | Pizza Hero 
| 12/jul./2024 | AnimalLaboratory 
| 12/jul./2024 | Classic Marathon 
| 10/jul./2024 | Dungeonborne
| 7/jul./2024 | Battlefield™ 1 Revolution 
| 7/jul./2024 | Battlefield™ 2042 
| 7/jul./2024 | Stardew Valley 
| 7/jul./2024 | Dead Rising 2 
| 7/jul./2024 | Disco Elysium - The Final Cut 
| 2/jul./2024 | Dawn
| 2/jul./2024 | The Council - Episode 1 
| 2/jul./2024 | Castle Crashers 
| 27/jun./2024 | Risk of Rain 2 
| 27/jun./2024 | Deep Rock Galactic 
| 17/jun./2024 | No More Room in Hell 
| 10/jun./2024 | Nightmare Kart 
| 7/jun./2024 | Dark and Darker
| 1/jun./2024 | Plasma
| 19/mai./2024 | Haunted Arcade 
| 19/mai./2024 | Machinika Museum
| 19/mai./2024 | Deathgarden - BLOODHARVEST 
| 17/mai./2024 | ENDLESS™ Legend
| 16/mai./2024 | What The Fog 
| 16/mai./2024 | Orcs Must Die! Unchained 
| 14/mai./2024 | 12 is Better Than 6
| 22/abr./2024 | Sky - Children of the Light 
| 22/abr./2024 | S.T.A.L.K.E.R. - Bundle 
| 27/mar./2024 | Titanfall® 2 - Ultimate Edition 
| 11/dez./2023 | The Finals 
| 8/dez./2023 | Grand Theft Auto V 
| 26/jul./2023 | Sniper Elite 5 
| 18/jun./2023 | Dead Island Definitive Edition 
| 18/jun./2023 | Outcast - Second Contact 
| 18/jun./2023 | Crusader Kings II 
| 12/jun./2023 | Lost Planet - Extreme Condition 
| 5/jun./2023 | Sherwood Extreme 
| 4/jun./2023 | Stumble Guys 
| 2/jun./2023 | Quasimorph - End of Dream 
| 2/jun./2023 | The Druid 
| 2/jun./2023 | Hue
| 21/mai./2023 | Ryse - Son of Rome 
| 21/mai./2023 | Metro 2033 Redux 
| 21/mai./2023 | Alan Wake CE 
| 18/mai./2023 | Metro - Last Light Complete Edition
| 4/mai./2023 | XCOM 2 
| 17/abr./2023 | Last Year
| 7/abr./2023 | Call of Cthulhu
| 7/abr./2023 | Garten of Banban 
| 4/abr./2023 | The Murder of Sonic the Hedgehog 
| 28/mar./2023 | SLUDGE LIFE
| 15/jun./2022 | ARK - Survival Evolved
| 1/mar./2022 | Pathologic 2 
| 3/fev./2022 | Pathologic Classic HD 
| 3/jan./2022 | Dragon Age 2 
| 30/dez./2021 | Viscera Cleanup Detail 
| 10/set./2021 | NARUTO SHIPPUDEN - Ultimate Ninja STORM 1
| 10/set./2021 | NARUTO SHIPPUDEN - Ultimate Ninja STORM 2 
| 10/set./2021 | NARUTO SHIPPUDEN - Ultimate Ninja STORM 3
| 10/set./2021 | NARUTO SHIPPUDEN - Ultimate Ninja STORM 4
| 23/ago./2021 | Will Glow the Wisp 
| 21/ago./2021 | Not A Hero 
| 21/ago./2021 | Quake II RTX 
| 20/ago./2021 | The Elder Scrolls IV - Oblivion Game of the Year 
| 20/ago./2021 | Dishonored GOTY 
| 20/ago./2021 | RESIDENT EVIL 7 Gold Edition
| 9/ago./2021 | Splitgate 
| 5/ago./2021 | Grand Theft Auto IV - The Complete Edition 
| 8/jul./2021 | Survivalist - Invisible Strain 
| 8/jul./2021 | Project Zomboid 
| 27/jun./2021 | Wolfenstein - The New Order
| 27/jun./2021 | Far Cry 3 
| 27/jun./2021 | Far Cry 5
| 27/jun./2021 | Insurgency - Sandstorm 
| 27/jun./2021 | Tell Me Why
| 10/jun./2021 | Borderlands GOTY Enhanced 
| 10/jun./2021 | Dying Light Enhanced Edition
| 10/jun./2021 | Call of Juarez Gunslinger 
| 16/abr./2021 | Steel Rats 
| 16/abr./2021 | Fallout 4
| 18/mar./2021 | Mad Max 
| 18/mar./2021 | Thief
| 18/mar./2021 | Bully - Scholarship Edition 
| 18/mar./2021 | Valheim 
| 23/dez./2020 | Metro Exodus
| 23/dez./2020 | Sunset Overdrive 
| 23/dez./2020 | Yakuza Kiwami 
| 23/dez./2020 | Yakuza 0 
| 17/dez./2020 | Dragon Age - Origins - The Awakening 
| 17/dez./2020 | Dragon Age - Origins 
| 15/ago./2020 | The Elder Scrolls V - Skyrim Special Edition 
| 15/ago./2020 | DOOM 
| 19/jun./2020 | Injustice - Gods Among Us Ultimate Edition
| 22/mai./2020 | Interkosmos
| 17/mai./2020 | The LEGO® NINJAGO® Movie Video Game
| 10/mai./2020 | Sniper Ghost Warrior
| 10/mai./2020 | Sniper - Ghost Warrior 2
| 10/mai./2020 | Sniper Ghost Warrior 3
| 3/abr./2020 | West of Dead
| 24/mar./2020 | Borderlands 3
| 2/mar./2020 | Black Desert Online SA
| 14/fev./2020 | Resident Evil 0 / biohazard 0 HD Remaster
| 14/fev./2020 | Resident Evil 5 
| 14/fev./2020 | Dragon's Dogma - Dark Arisen 
| 14/fev./2020 | Dead Rising 3 
| 14/fev./2020 | Resident Evil / biohazard HD REMASTER 
| 14/fev./2020 | Resident Evil 4
| 14/fev./2020 | Resident Evil 6 
| 12/fev./2020 | Dead Cells - Rise of the Giant 
| 1/fev./2020 | Coloring Game 2 
| 23/jan./2020 | Tomb Raider 
| 16/jan./2020 | Pandemic Express 
| 21/dez./2019 | Mount and Blade - Warband 
| 21/dez./2019 | DARK SOULS&trade; II - Scholar of the First Sin 
| 6/dez./2019 | Path of Exile 
| 3/dez./2019 | Albion Online 
| 29/nov./2019 | Middle-earth - Shadow of War Definitive Edition 
| 29/nov./2019 | Middle-earth - Shadow of Mordor Game of the Year Edition 
| 29/nov./2019 | Metal Gear Rising 
| 28/nov./2019 | Mortal Kombat Komplete Edition 
| 28/nov./2019 | Rage with Sewers 
| 28/nov./2019 | Devil May Cry 5
| 27/nov./2019 | Saints Row - The Third
| 6/out./2019 | Devil May Cry 4 - Special Edition 
| 6/out./2019 | DmC - Devil May Cry
| 6/out./2019 | Devil May Cry 3 Special Edition 
| 26/set./2019 | Destiny 2 
| 12/set./2019 | FEAR 3
| 9/set./2019 | Poly Bridge Deluxe Edition 
| 6/jul./2019 | Portal 2 
| 6/jul./2019 | Dead Space 2 
| 3/jul./2019 | Guacamelee! 2 
| 3/jul./2019 | Hitman Absolution 
| 3/jul./2019 | Max Payne 3 
| 3/jul./2019 | L.A. Noire Complete Edition 
| 2/jul./2019 | Tales of Zestiria - Standard Digital Edition 
| 2/jul./2019 | Starbound 
| 2/jul./2019 | Dead Cells 
| 2/jul./2019 | Batman Arkham Origins 
| 2/jul./2019 | Batman - Arkham Asylum GOTY 
| 28/jun./2019 | Hand Simulator 
| 9/jun./2019 | Borderlands 2 - Commander Lilith & the Fight for Sanctuary 
| 27/mai./2019 | KurtzPel 
| 17/mai./2019 | Guacamelee! Super Turbo Championship Edition
| 9/mai./2019 | Age of Wonders III 
| 30/abr./2019 | Knights of the Old Republic 
| 30/abr./2019 | Star Wars - Knights of the Old Republic 2
| 30/abr./2019 | BioShock The Collection
| 30/abr./2019 | BioShock The Collection
| 30/abr./2019 | BioShock The Collection
| 30/abr./2019 | Dishonored 2
| 30/abr./2019 | Injustice 2 Ultimate Edition
| 30/abr./2019 | Batman Arkham City GOTY 
| 28/abr./2019 | Himno 
| 2/abr./2019 | Magicka 2 
| 15/mar./2019 | Grid 2
| 1/fev./2019 | Kholat
| 31/jan./2019 | The Mean Greens - Plastic Warfare 
| 27/jan./2019 | Endless Space 2 - Community Challenge Add-on 
| 27/jan./2019 | ENDLESS™ Space - Definitive Edition 
| 24/jan./2019 | Deponia - The Complete Journey 
| 11/jan./2019 | A Story About My Uncle 
| 26/dez./2018 | Breathedge 
| 26/dez./2018 | Killing Floor 2 
| 25/dez./2018 | RER2/BHR2 Episode One - Penal Colony 
| 22/dez./2018 | LEGO Lord of the Rings
| 19/dez./2018 | DayZ Mod 
| 25/nov./2018 | Arma 2 - Combined Operations 
| 25/nov./2018 | Don't Starve Together 
| 25/nov./2018 | Batman - Arkham Knight
| 17/nov./2018 | HITMAN™ 2 Starter Pack 
| 17/nov./2018 | Sins of a Solar Empire Rebellion 
| 25/ago./2018 | For Honor
| 22/jul./2018 | The Awesome Adventures of Captain Spirit 
| 4/jul./2018 | Borderlands 2 Game of the Year 
| 21/jun./2018 | Shadowrun Returns Deluxe 
| 19/jun./2018 | Cuisine Royale 
| 11/jun./2018 | Quake Champions Free Access 
| 9/jun./2018 | TABG 
| 6/jun./2018 | Fortified
| 25/mai./2018 | Galactic Civilizations II 
| 25/mai./2018 | Guns of Icarus Alliance Free Giveaway 
| 25/mai./2018 | Hacknet - Deluxe Edition 
| 28/abr./2018 | F1 2015 
| 20/abr./2018 | SatelliteReign 
| 17/abr./2018 | VRChat 
| 29/mar./2018 | Just Cause 3 
| 29/mar./2018 | Warhammer 40,000 - Dawn of War - Game of the Year Edition 
| 29/mar./2018 | Just Cause 2 
| 27/mar./2018 | Call to Arms 
| 24/mar./2018 | HITMAN
| 23/fev./2018 | Viridi 
| 26/jan./2018 | Amnesia Collection
| 26/jan./2018 | Amnesia Collection
| 18/jan./2018 | The Red Solstice 
| 27/dez./2017 | The Witcher 2 
| 27/dez./2017 | Left 4 Dead 2 
| 22/dez./2017 | Kingdom - Classic
| 20/dez./2017 | Layers of Fear (2016) 
| 15/dez./2017 | Company of Heroes 2
| 10/dez./2017 | Homefront
| 30/nov./2017 | The Bureau - XCOM Declassified 
| 29/nov./2017 | Lead and Gold - Gangs of the Wild West 
| 27/nov./2017 | Yu-Gi-Oh! Duel Links 
| 25/nov./2017 | Totally Accurate Battle Zombielator 
| 24/nov./2017 | Portal 2 - Perceptual Pack 
| 23/nov./2017 | Sanctum 2 
| 22/nov./2017 | Brutal Legend
| 17/nov./2017 | Killer is Dead 
| 22/out./2017 | Ticket to Ride Online Retail 
| 22/out./2017 | Sid Meier's Civilization III - Complete Retail 
| 22/out./2017 | H1Z1 
| 19/out./2017 | Super Meat Boy 
| 19/out./2017 | The Witcher 3 - Wild Hunt - Complete Edition 
| 30/set./2017 | Fallout 
| 21/set./2017 | Outlast - Whistleblower DLC 
| 21/set./2017 | Outlast 
| 20/set./2017 | Oddworld Abes Oddysee 
| 15/set./2017 | Psychonauts 
| 7/set./2017 | Monaco
| 7/set./2017 | The Walking Dead
| 7/set./2017 | Mirage - Arcane Warfare
| 29/jul./2017 | Battleplan - American Civil War 
| 28/jul./2017 | Relic Hunters Zero 
| 26/jul./2017 | Insurgency 
| 27/jun./2017 | The Witcher - Enhanced Edition
| 11/mai./2017 | Magicka 
| 29/abr./2017 | Between Me and The Night 
| 28/abr./2017 | Nosferatu - The Wrath of Malachi 
| 2/abr./2017 | Serious Sam HD 
| 21/mar./2017 | Warhammer 40,000 - Eternal Crusade 
| 3/mar./2017 | X-Com - UFO Defense 
| 11/nov./2016 | DiRT 3 Complete Edition 
| 25/out./2016 | Fallout - New Vegas 
| 25/out./2016 | Fallout 3
| 19/set./2016 | AdVenture Communist 
| 17/set./2016 | Paladins 
| 9/set./2016 | Tropico 4
| 3/set./2016 | Two Worlds Epic Edition
| 3/set./2016 | Americas Army 3 
| 7/ago./2016 | Street Racing Syndicate 
| 30/jul./2016 | Viscera Cleanup Detail - Santa's Rampage
| 29/jul./2016 | Postal 2
| 28/jul./2016 | King's Quest - Chapter 1 - A Knight to Remember 
| 25/jul./2016 | Evolve Stage 2 
| 25/jul./2016 | SURVIVAL - Postapocalypse Now 
| 23/jul./2016 | Life is Strange Episode 1 
| 19/jul./2016 | Half-Life 2 - Update 
| 16/jul./2016 | Kung Fury 
| 16/jul./2016 | World of Guns - Gun Disassembly 
| 15/jul./2016 | Creativerse
| 10/jul./2016 | The Expendabros 
| 9/jul./2016 | Elite Dangerous - Arena 
| 8/jul./2016 | Brawlhalla
| 1/jul./2016 | They Came From The Moon 
| 30/jun./2016 | Payday - The Heist 
| 30/jun./2016 | Garry's Mod 
| 30/jun./2016 | Half-Life 2 
| 30/jun./2016 | PAYDAY 2
| 21/jun./2016 | Limbo
| 23/fev./2016 | Shadow Warrior Classic (1997) 
| 14/jan./2016 | War Thunder 
| 14/jan./2016 | Dirty Bomb 
| 14/jan./2016 | Nosgoth
| 14/jan./2016 | Americas Army - Proving Grounds 
| 14/jan./2016 | Apotheon Arena 
| 14/jan./2016 | Toribash 
| 14/jan./2016 | Loadout 
| 13/jan./2016 | Anarchy Arcade 
| 7/jan./2016 | Heroes & Generals 
| 7/jan./2016 | Robocraft 
| 7/jan./2016 | Unturned 
| 7/jan./2016 | Warframe