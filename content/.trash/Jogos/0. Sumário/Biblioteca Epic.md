---
Tipo:
  - Biblioteca
tags:
  - Biblioteca
  - Epic
---

````tabs
tab: Jogos
```dataview 
TABLE WITHOUT ID file.link AS "‎Jogos", embed(link(meta(Capa).path,"100")) AS "Capa", row["Data de Lançamento"] AS "📅", Plataforma, Desenvolvedora, Publisher, Adquirido AS "🛒", Status, row["Tempo de Jogo"].hours AS "⏱", Mememêtro AS "🤡", Nota
FROM #Epic
SORT file.name ASC

tab: Pesquisa

`INPUT[text:searchTerm]`

```dataview 
TABLE WITHOUT ID file.link AS "‎Jogos", embed(link(meta(Capa).path,"100")) AS "Capa", row["Data de Lançamento"] AS "Data de Lançamento", Plataforma, Desenvolvedora, Publisher, Adquirido, Status, row["Tempo de Jogo"].hours AS "⏱", Mememêtro AS "🤡", Nota
FROM #Epic
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
FROM #Epic
WHERE Status != null AND
(contains(lower(Status), lower(this.thisStatus))) OR
(contains(lower(Plataforma), lower(this.thisPlatform))) OR
(contains(lower(Tipo), lower(this.thisType)))
SORT file.name ASC
```
tab: ⓘ
###### Mememêtro : Nivel de ~~Desgraça~~ Seriedade do Game 

````
# Jogos
[[Undying]]
Behind the Frame: The Finest Scenery
Turmoil
Hell Let Loose
Sifu
REDACTED
HOT WHEELS UNLEASHED™
Ghostrunner 2
Dark and Darker - Legendary Status
Dark and Darker
Wizard of Legend
TerraTech
Astrea Six Sided Oracles
Vampire Survivors
The Lord of The Rings Return to Moria
LEGO® Star Wars™: The Skywalker Saga
Bus Simulator 21 Next Stop
Infinity Nikki
Beholder
Snakebird Complete
Castlevania Anniversary Collection
Deceive Inc.
Moving Out
Outliver: Tribulation
Empyrion - Galactic Survival
Bear and Breakfast
The Spirit and the Mouse
Rocket League®
TOEM
The Last Stand: Aftermath
SUPER CRAZY RHYTHM CASTLE
Rugrats: Adventures in Gameland
Sniper Ghost Warrior Contracts
Wild Card Football
Fallout® Classic Collection
Gigantic: Rampage Edition
The Callisto Protocol
Death's Gambit - Afterlife
CYGNI - All Guns Blazing
DNF Duel
LumbearJack
RAWMEN: Food Fighter Arena 🍜
F.I.S.T.: Forged In Shadow Torch
Maid of Sker
Arcade Paradise
Floppy Knights
The Falconeer: Standard Edition
Zenless Zone Zero
Sunless Skies: Sovereign Edition
Freshly Frosted
Redout 2
Marvel's Midnight Suns
Chivalry 2
Echo Starter Pack
Wuthering Waves
Warhammer 40,000: Gladius - Relics of War
Farming Simulator 22
Dragon Age: Inquisition – Game of the Year Edition
Circus Electrique
Firestone Online Idle RPG
Cat Quest II
Orcs Must Die! 3
INDUSTRIA
LISA: The Definitive Edition
Town of Salem 2
The Big Con
Thief
Islets
Call of the Wild: The Angler™
Deus Ex - Mankind Divided
Astro Duel 2
Super Meat Boy Forever
Dakar Desert Rally
Lost Castle
Doki Doki Literature Club Plus!
Honkai: Star Rail
Doors - Paradox
Infinifactory
Sail Forth
Marvel's Guardians of the Galaxy
20 Minutes Till Dawn
Escape Academy
Ghostrunner
Saints Row
Cat Quest
Cursed to Golf
Human Resource Machine
The Outer Worlds: Spacer's Choice Edition
Ghostwire: Tokyo
Art of Rally
Melvor Idle
Destiny 2: Legacy Collection (2023)
Destiny 2
GigaBash
Predecessor
Mighty Fight Federation
Jitsu Squad
Deliver Us Mars
Surviving the Aftermath
EARTHLOCK
Turnip Boy Commits Tax Evasion
Tandem: A Tale of Shadows
The Evil Within 2
The Evil Within
Eternal Threads
Blazing Sails
Q.U.B.E. ULTIMATE BUNDLE
Genshin Impact
Soulstice
Model Builder: Complete Edition
The Forest Quartet
Out of Line
Spelldrifter
Homeworld: Deserts of Kharak
Dodo Peak
Black Book
Europa Universalis IV: Songs of Yuletide
Europa Universalis IV: Evangelical Majors Unit Pack
Europa Universalis IV: Catholic Majors Unit Pack
Orwell: Keeping an Eye on You
Severed Steel
Homeworld Remastered Collection
Murder by Numbers
The Elder Scrolls Online
Train Valley 2
GRIME
The Dungeon of Naheulbeuk
Guacamelee! Super Turbo Championship Edition
Guacamelee! 2
PAYDAY 2
Discord
Discord Nitro
Midnight Ghost Hunt
Fallout: New Vegas - Ultimate Edition
DEATH STRANDING
The Sims™ 4 The Daring Lifestyle Bundle
Poker Club
Breathedge
Unreal Engine 5
Beyond Blue
Never Alone (Kisima Ingitchuna)
MORDHAU
Second Extinction™
shapez
Dying Light Enhanced Edition
Tunche
The Silent Age
Chess Ultra
Maneater
BioShock: The Collection
City of Brass
In Sound Mind
Assassins Creed Odyssey Gold Edition
Ghost Recon Breakpoint Standard Edition
Ghost Recon Breakpoint Standard Edition
Assassins Creed Odyssey Gold Edition
DAEMON X MACHINA
Relicta
Galactic Civilizations III
Assassin's Creed® Valhalla Standard Edition
Tomb Raider GAME OF THE YEAR EDITION
Shadow of the Tomb Raider: Definitive Edition
Salt and Sanctuary
theHunter: Call of the Wild™
DARQ: Complete Edition
Among the Sleep - Enhanced Edition
World War Z Aftermath Upgrade
Europa Universalis IV
Sheltered
Nioh: The Complete Edition
Yoku's Island Express
Automachef
Saints Row®: The Third™  Remastered
Yooka-Laylee
Void Bastards
HD Voice Pack - English
HD Sound Pack
Rebel Galaxy
Minit
A Plague Tale: Innocence
Train Sim World® 2
Mothergunship
Defense Grid: The Awakening
Verdun
Offworld Trading Company
Obduction
Horizon Chase Turbo
Idle Champions of the Forgotten Realms
Hand of Fate 2
Alien: Isolation 
Dandara: Trials of Fear Edition
Tropico 5
The Long Dark
The World Next Door
Elite Dangerous
Layers of Fear 2
Costume Quest 2
God's Trigger
Enter the Gungeon
The Alto Collection
Remnant: From the Ashes
A Total War Saga: TROY
Superbrothers: Sword & Sworcery EP
Barony
20XX
Tacoma
Next Up Hero
The Escapists 2
Lifeless Planet: Premier Edition
Killing Floor 2
Trackmania Starter Access
Hue
Stranger Things 3: The Game
AER Memories of Old
Pathway
SAMURAI SHODOWN NEOGEO COLLECTION
ARK Ragnarok
ARK: Survival Evolved
SLUDGE LIFE
Overcooked
Sid Meier’s Civilization® VI
Sherlock Holmes: Crimes and Punishments
Close To The Sun
Gone Home
Drawful 2
Hob
Totally Reliable Delivery Service Standard Edition
Tormentor x Punisher
Figment
World War Z
InnerSpace
Assassin's Creed Syndicate Standard Edition
Faeria
Aztez
Kingdom Come: Deliverance
Ticket To Ride: Classic Edition
Carcassonne
The Cycle: Frontier
Dauntless
Farming Simulator 19
The Bridge
Steep Standard Edition
Darksiders II Deathinitive Edition
Darksiders Warmastered Edition
Yooka-Laylee and the Impossible Lair
The Talos Principle
Hyper Light Drifter
FTL: Faster Than Light
Totally Accurate Battle Simulator
APE OUT
Little Inferno
SUPERHOT
TowerFall Ascension
The Escapists
The Wolf Among Us
Slime Rancher
Thimbleweed Park
The Jackbox Party Pack
Subnautica