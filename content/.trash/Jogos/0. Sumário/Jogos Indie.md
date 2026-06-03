---
Tipo:
  - Categoria
---

```dataview
TABLE WITHOUT ID file.link AS "‎Jogos", row["Data de Lançamento"] AS "Data de Lançamento", Plataforma, Desenvolvedora, Publisher, Adquirido, Status, row["Tempo de Jogo"] AS "Tempo de Jogo", Mememêtro, Nota
FROM "Ideias_video/Jogos"
and #Indie  
```
