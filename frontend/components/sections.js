import { useRouter } from "next/router"
import Hero from "@/components/sections/hero"
import LargeVideo from "@/components/sections/large-video"
import FeatureColumnsGroup from "@/components/sections/feature-columns-group"
import FeatureRowsGroup from "@/components/sections/feature-rows-group"
import BottomActions from "@/components/sections/bottom-actions"
import TestimonialsGroup from "@/components/sections/testimonials-group"
import MySection from "@/components/sections/my-section"
import MySlider from "@/components/sections/my-slider"
import MyLinks from "@/components/sections/my-links"
import MyLinksBar from "@/components/sections/my-links-bar"
import AboutArea from "@/components/sections/about-area"
import PortfolioArea from "@/components/sections/portfolio-area"
import FunFactorsArea from "@/components/sections/fun-factors-area"
import BestSellArea from "@/components/sections/best-sell-area"
import NewsLetter from "@/components/sections/news-letter"
import BlogArea from "@/components/sections/blog-area"
import TeamArea from "@/components/sections/team-area"

import RichText from "./sections/rich-text"
import Pricing from "./sections/pricing"
import LeadForm from "./sections/lead-form"

// Map Strapi sections to section components
const sectionComponents = {
  "sections.hero": Hero,
  "sections.large-video": LargeVideo,
  "sections.feature-columns-group": FeatureColumnsGroup,
  "sections.feature-rows-group": FeatureRowsGroup,
  "sections.bottom-actions": BottomActions,
  "sections.testimonials-group": TestimonialsGroup,
  "sections.rich-text": RichText,
  "sections.pricing": Pricing,
  "sections.lead-form": LeadForm,
  "sections.my-section":MySection,
  "sections.my-slider":MySlider,
  "sections.my-links":MyLinks,
  "sections.my-links-bar":MyLinksBar,
  "sections.about-area":AboutArea,
  "sections.portfolio-area":PortfolioArea,
  "sections.fun-factors-area":FunFactorsArea,
  "sections.best-sell-area":BestSellArea,
  "sections.news-letter":NewsLetter,
  "sections.blog-area":BlogArea,
  "sections.team-area":TeamArea,
}

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component]

  if (!SectionComponent) {
    return null
  }

  // Display the section
  return <SectionComponent data={sectionData} />
}

const PreviewModeBanner = () => {
  const router = useRouter()
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </div>
  )
}

// Display the list of sections
const Sections = ({ sections, preview }) => {
  return (
    <div className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.__component}${section.id}`}
        />
      ))}
    </div>
  )
}

export default Sections
