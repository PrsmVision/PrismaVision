// quartz/contributors.ts
// Adicione cada membro da curadoria aqui

export interface ContributorProfile {
  displayName: string
  avatar: string      // caminho relativo a /static/contributors/
  catchphrase: string
}

export const contributors: Record<string, ContributorProfile> = {
  lyr: {
    displayName: "Lyreon",
    avatar: "/static/contributors/lyr.png",
    catchphrase: "A Historia de todas as Sociedades ate aqui é a de um lobby de CoD.",
  },
  gman: {                                    // 👈 novo contribuinte
    displayName: "G-Man",
    avatar: "/static/contributors/gman.png",
    catchphrase: "ImmSims ou nada. Mas como é nicho, acho que dá pra variar",
  },
}
