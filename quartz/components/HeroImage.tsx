import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const HeroImage: QuartzComponentConstructor = () => {
  function HeroImageComponent(props: QuartzComponentProps) {
    if (!props?.fileData) return null

    const hero = props.fileData.frontmatter?.hero as string | undefined
    if (!hero) return null

    return (
      <div class="hero-image">
        <img src={hero} alt={props.fileData.frontmatter?.title ?? ""} />
      </div>
    )
  }

  HeroImageComponent.css = `
    .hero-image {
      width: 100%;
      margin-bottom: 1rem;
      border-radius: 8px;
      overflow: hidden;
    }

    .hero-image img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      object-position: center;
      display: block;
    }
  `

  return HeroImageComponent
}

export default HeroImage
