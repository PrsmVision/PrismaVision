---
cssclasses:
  - col-lines
  - cards
Tipo:
  - Documento
tags:
  - Documento
---

````tabs

tab: Tudão
```dataview 
TABLE Tipo
FROM "Ideias_video/Jogos"
SORT Tipo, file.name ASC
```
tab: Franquias
```dataview
TABLE WITHOUT ID file.link AS "‎Arquivo", tags AS "Tipo"
FROM "Ideias_video/Jogos"
and #franquia 
```
tab: Publishers
```dataview
TABLE WITHOUT ID file.link AS "‎Arquivo", tags AS "Tipo"
FROM "Ideias_video/Jogos"
and #publisher 
```
tab: Desenvolvedoras
```dataview
TABLE WITHOUT ID file.link AS "‎Arquivo", tags AS "Tipo"
FROM "Ideias_video/Jogos"
and #Desenvolvedora 
```
tab: Bibliotecas
```dataview
TABLE WITHOUT ID file.link AS "‎Arquivo", tags AS "Tipo"
FROM "Ideias_video/Jogos"
and #Biblioteca
tab: Jogos
```dataview 
TABLE WITHOUT ID file.link AS "‎Jogos", row["Data de Lançamento"] AS "📅", Plataforma, Desenvolvedora, Publisher, Adquirido AS "🛒", Status, row["Tempo de Jogo"].hours AS "⏱", Mememêtro AS "🤡", Nota
FROM "Ideias_video/Jogos"
and #Jogo 
SORT file.name ASC
tab: Reviews
````






