import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo'
import { Suspense } from 'react'

import { mark } from 'src/sdk/tests/mark'
import { getAllPostsForHome } from 'src/lib/api'
import { CarouselBannerHome } from 'src/components/sections/CarouselBanner'
import { incentivesMockHeader } from 'src/components/sections/Incentives/incentivesMock'
import IncentivesHeader from 'src/components/sections/Incentives/IncentivesHeader'
import {
  BubbleLinks,
  BubbleLinksBrands,
} from 'src/components/sections/BubbleLinks'
import {
  CollectionShelf,
  CollectionShelfVertical,
} from 'src/components/sections/CollectionShelf'
import { CategoryTiles } from 'src/components/sections/CategoryTiles'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import ProductShelfCustom from 'src/components/sections/ProductShelf/ProducTShelfCustom'

import storeConfig from '../../store.config'

function Page({
  carouselBannerHomeCollection,
  bubbleLinksCategoriesTitleCollection,
  bubbleLinksCategoriesImgCollection,
  blockOurColectionsCollection,
  infoCardOurColectionsCollection,
  productShelfCollection,
  categoryTilesHomeCollection,
  blockCollectionVerticalHomeCollection,
  infoCardCollectionVerticalHomeCollection,
  blocoMarcasCollection,
  dadosDasMarcasCollection,
}: any) {
  const [homeShelf] = [...productShelfCollection.items]
  const collections = infoCardOurColectionsCollection.items.sort(
    (a: any, b: any) => a?.order - b?.order
  )

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
      {collections && (
        <CollectionShelf
          {...blockOurColectionsCollection.items[0]}
          data={collections}
        />
      )}
      <Suspense fallback={<ProductShelfSkeleton loading />}>
        {homeShelf.categoryCode && (
          <ProductShelfCustom
            itemsQuantity={[
              homeShelf.itemsQuantifyOnMobile,
              homeShelf.itemsQuantifyOnDesktop,
            ]}
            first={homeShelf.first}
            selectedFacets={[
              {
                key: 'productClusterIds',
                value: homeShelf.categoryCode,
              },
            ]}
            title={homeShelf.title}
            suspenseData
          />
        )}
      </Suspense>
      {categoryTilesHomeCollection.items && (
        <section className="section layout__section layout__content no__pd--mosaico layout__wrapper">
          <div className="page__section-content">
            <CategoryTiles data={categoryTilesHomeCollection.items} />
          </div>
        </section>
      )}
      {infoCardCollectionVerticalHomeCollection.items && (
        <CollectionShelfVertical
          {...blockCollectionVerticalHomeCollection.items[0]}
          data={infoCardCollectionVerticalHomeCollection.items}
        />
      )}
      {dadosDasMarcasCollection && (
        <BubbleLinksBrands
          {...blocoMarcasCollection.items[0]}
          data={dadosDasMarcasCollection.items}
        />
      )}
    </>
  )
}

export async function getStaticProps() {
  const allData = (await getAllPostsForHome()) ?? []

  const {
    carouselBannerHomeCollection,
    bubbleLinksCategoriesTitleCollection,
    bubbleLinksCategoriesImgCollection,
    blockOurColectionsCollection,
    infoCardOurColectionsCollection,
    productShelfCollection,
    categoryTilesHomeCollection,
    blockCollectionVerticalHomeCollection,
    infoCardCollectionVerticalHomeCollection,
    blocoMarcasCollection,
    dadosDasMarcasCollection,
  } = allData

  return {
    props: {
      carouselBannerHomeCollection,
      bubbleLinksCategoriesTitleCollection,
      bubbleLinksCategoriesImgCollection,
      blockOurColectionsCollection,
      infoCardOurColectionsCollection,
      productShelfCollection,
      categoryTilesHomeCollection,
      blockCollectionVerticalHomeCollection,
      infoCardCollectionVerticalHomeCollection,
      blocoMarcasCollection,
      dadosDasMarcasCollection,
    },
  }
}

Page.displayName = 'Page'
export default mark(Page)
