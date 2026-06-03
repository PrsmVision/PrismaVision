import * as ExternalPlugin from "./.quartz/plugins"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { HeroImage } from "./.quartz/plugins/hero-image/dist/index.js"
import { Contributors } from "./.quartz/plugins/contributors/dist/index.js"

ExternalPlugin.BasesPage({
  defaultViewType: "card",
})

const config = await loadQuartzConfig()
export default config

export const layout = await loadQuartzLayout({
  byPageType: {
    content: {
      beforeBody: [HeroImage],
      afterBody: [Contributors],
    },
  },
})