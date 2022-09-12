import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { mark } from 'src/sdk/tests/mark'
import { getDataForInstitutionalPage } from 'src/lib/api'
import { CarouselBannerHome } from 'src/components/sections/CarouselBanner'

import storeConfig from '../../store.config'

function Institutional({
  bannerCollection,
  siteSeoCollection,
  staticPagesContentCollection,
}: any) {
  const [SeoData] = siteSeoCollection.items ?? []
  const pageStaticData = staticPagesContentCollection.items[0].content.json

  return (
    <>
      {/* SEO */}
      <NextSeo
        title={SeoData?.title ?? storeConfig.seo.title}
        description={SeoData?.description ?? storeConfig.seo.description}
        titleTemplate={storeConfig.seo.titleTemplate}
        canonical={SeoData?.canonicalLink ?? storeConfig.storeUrl}
        openGraph={{
          type: 'website',
          url: SeoData?.canonicalLink ?? storeConfig.storeUrl,
          title: SeoData?.title ?? storeConfig.seo.title,
          description: SeoData?.description ?? storeConfig.seo.description,
        }}
      />
      {Object.keys(SeoData.jsonLd).length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SeoData.jsonLd) }}
        />
      ) : (
        <SiteLinksSearchBoxJsonLd
          url={storeConfig.storeUrl}
          potentialActions={[
            {
              target: `${storeConfig.storeUrl}/s/?q={search_term_string}`,
              queryInput: 'required name=search_term_string',
            },
          ]}
        />
      )}
      <CarouselBannerHome items={bannerCollection.items} />
      {pageStaticData && (
        <div className="section layout__section layout__content layout__wrapper static__page--style">
          {documentToReactComponents(pageStaticData)}
        </div>
      )}
    </>
  )
}

export async function getStaticProps() {
  const allData = (await getDataForInstitutionalPage()) ?? []

  const { bannerCollection, siteSeoCollection, staticPagesContentCollection } =
    allData

  return {
    props: {
      bannerCollection,
      siteSeoCollection,
      staticPagesContentCollection,
    },
  }
}

Institutional.displayName = 'Institutional'
export default mark(Institutional)
