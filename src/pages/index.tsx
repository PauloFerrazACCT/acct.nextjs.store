import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo'

import { mark } from 'src/sdk/tests/mark'
import { getAllPostsForHome } from 'src/lib/api'
import { CarouselBannerHome } from 'src/components/sections/CarouselBanner'
import { incentivesMockHeader } from 'src/components/sections/Incentives/incentivesMock'
import IncentivesHeader from 'src/components/sections/Incentives/IncentivesHeader'
import { BubbleLinks } from 'src/components/sections/BubbleLinks'

import storeConfig from '../../store.config'

function Page({
  carouselBannerHomeCollection,
  bubbleLinksCategoriesTitleCollection,
  bubbleLinksCategoriesImgCollection,
}: any) {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title={storeConfig.seo.title}
        description={storeConfig.seo.description}
        titleTemplate={storeConfig.seo.titleTemplate}
        canonical={storeConfig.storeUrl}
        openGraph={{
          type: 'website',
          url: storeConfig.storeUrl,
          title: storeConfig.seo.title,
          description: storeConfig.seo.description,
        }}
      />
      <SiteLinksSearchBoxJsonLd
        url={storeConfig.storeUrl}
        potentialActions={[
          {
            target: `${storeConfig.storeUrl}/s/?q={search_term_string}`,
            queryInput: 'required name=search_term_string',
          },
        ]}
      />

      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.

        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.

        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}
      {/* <RenderPageSections sections={cmsHome.sections} /> */}
      <CarouselBannerHome items={carouselBannerHomeCollection.items} />
      <IncentivesHeader incentives={incentivesMockHeader} />
      <BubbleLinks
        title={bubbleLinksCategoriesTitleCollection.items[0].title}
        bubbleLinks={bubbleLinksCategoriesImgCollection.items}
      />
    </>
  )
}

export async function getStaticProps() {
  const allData = (await getAllPostsForHome()) ?? []

  const {
    carouselBannerHomeCollection,
    bubbleLinksCategoriesTitleCollection,
    bubbleLinksCategoriesImgCollection,
  } = allData

  return {
    props: {
      carouselBannerHomeCollection,
      bubbleLinksCategoriesTitleCollection,
      bubbleLinksCategoriesImgCollection,
    },
  }
}

Page.displayName = 'Page'
export default mark(Page)
