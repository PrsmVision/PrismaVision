---
draft: "true"
---
# Plugin: Steam Curator Follower Count

> Implementar quando a curadoria Steam estiver criada oficialmente.

## O que faz

Busca o número de seguidores da curadoria Steam a cada build e exibe no site Quartz.

## Dados que precisam ser preenchidos depois

- `SEU_CURATOR_ID` — ID numérico da curadoria (aparece na URL: `store.steampowered.com/curator/XXXXXXX/`)

## Decisão: scraping (repo público, sem API key)

Como o repositório é público, **não usar API key**. O scraping da página da curadoria é suficiente — o dado (seguidores) é público de qualquer forma.

Raspa o HTML de `https://store.steampowered.com/curator/SEU_ID/` e extrai o número com regex `/(\d[\d,.]+)\s+followers?/i`

## Arquitetura

```
build (npx quartz build)
  → Emitter raspa a página da curadoria na Steam
  → Salva em /static/curator-stats.json
  → Componente faz fetch do JSON e exibe no layout
```

---

## Arquivos a criar

### 1. `quartz/plugins/emitters/steamCurator.ts`

```ts
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"

interface Options {
  curatorId: string
}

export const SteamCuratorStats: QuartzEmitterPlugin<Options> = (opts) => ({
  name: "SteamCuratorStats",

  async emit(ctx, content, resources) {
    let followers = 0

    try {
      const res = await fetch(
        `https://store.steampowered.com/curator/${opts?.curatorId}/`
      )
      const html = await res.text()
      const match = html.match(/(\d[\d,.]+)\s+followers?/i)
      followers = match ? parseInt(match[1].replace(/[,.]/g, "")) : 0
    } catch (e) {
      console.warn("[SteamCuratorStats] Falha ao buscar seguidores:", e)
    }

    return [
      await write({
        ctx,
        content: JSON.stringify({ followers, updatedAt: new Date().toISOString() }),
        slug: "static/curator-stats" as any,
        ext: ".json",
      }),
    ]
  },

  getQuartzComponents() { return [] },
})
```

### 2. `quartz/components/SteamFollowers.tsx`

```tsx
import { QuartzComponent, QuartzComponentProps } from "./types"

const SteamFollowers: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <div class="steam-followers">
      <span id="steam-follower-count">— seguidores</span>
      <script>{`
        fetch('/static/curator-stats.json')
          .then(r => r.json())
          .then(d => {
            const el = document.getElementById('steam-follower-count')
            if (el) el.textContent = d.followers.toLocaleString('pt-BR') + ' seguidores'
          })
          .catch(() => {})
      `}</script>
    </div>
  )
}

export default SteamFollowers
```

---

## Registros necessários

### `quartz/plugins/emitters/index.ts`

```ts
export { SteamCuratorStats } from "./steamCurator"
```

### `quartz/components/index.ts`

```ts
export { default as SteamFollowers } from "./SteamFollowers"
```

### `quartz.config.ts`

```ts
plugins: {
  emitters: [
    // ...emitters existentes...
    Plugin.SteamCuratorStats({
      curatorId: "SEU_CURATOR_ID",
    }),
  ],
}
```

### `quartz.layout.ts`

```ts
left: [
  Component.PageTitle(),
  Component.SteamFollowers(),
  // ...
]
```

---

## Bônus: atualizar automaticamente via GitHub Actions

Criar `.github/workflows/build.yml` com build agendado diário pra manter o contador atualizado. _(a ser escrito quando for implementar)_