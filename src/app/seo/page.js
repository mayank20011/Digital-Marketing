import SEOBanner from "@/components/seo/Banner/SeoBanner";
import ElementsOfSeo from "@/components/seo/ElementsOfSeo";
import MaximizeGrowth from "@/components/seo/MaximizeGrowth";

export default function SeoPage(){
  return (<div className="flex flex-col gap-6 md:gap-24 py-6 md:py-12">
    <SEOBanner/>
    <ElementsOfSeo/>
    <MaximizeGrowth/>
  </div>)
}