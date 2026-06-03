import * as ExternalPlugin from "./.quartz/plugins"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { Contributors, HeroImage } from "quartz5-component-port"

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