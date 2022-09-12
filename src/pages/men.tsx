import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo'
import { Suspense } from 'react'

import { mark } from 'src/sdk/tests/mark'
import { getDataForCategoryMen } from 'src/lib/api'
import { CarouselBannerHome } from 'src/components/sections/CarouselBanner'
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
import ProductShelfCustom from 'src/components/sections/ProductShelf/ProductShelfCustom'

import storeConfig from '../../store.config'

function CategoryMen({
  dadosDasMarcasCollection,
  blocoMarcasCollection,
  blockOurColectionsCollection,
  infoCardOurColectionsCollection,
  blockCardCollectionVerticalCollection,
  infoCardCollectionVerticalCollection,
  bubbleLinksCategoriesTitleCollection,
  bubbleLinksCategoriesImgCollection,
  mosaicoCollection,
  productShelfCollection,
  bannerCollection,
  siteSeoCollection,
}: any) {
  const shelfs = productShelfCollection.items.sort(
    (a: any, b: any) => a?.order - b?.order
  )

  const [shelfOne, shelfTwo, shelfThree] = [...shelfs]

  const mosaic = mosaicoCollection.items.sort(
    (a: any, b: any) => a?.order - b?.order
  )

  const collections = infoCardOurColectionsCollection.items.sort(
    (a: any, b: any) => a?.order - b?.order
  )

  const verticalCollections = infoCardCollectionVerticalCollection.items.sort(
    (a: any, b: any) => a?.order - b?.order
  )

  const [SeoData] = siteSeoCollection.items ?? []

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

      <BubbleLinks
        title={bubbleLinksCategoriesTitleCollection.items[0].title}
        bubbleLinks={bubbleLinksCategoriesImgCollection.items}
      />

      {shelfOne && (
        <Suspense fallback={<ProductShelfSkeleton loading />}>
          {shelfOne.categoryCode && (
            <ProductShelfCustom
              itemsQuantity={[
                shelfOne.itemsQuantifyOnMobile,
                shelfOne.itemsQuantifyOnDesktop,
              ]}
              first={shelfOne.first}
              selectedFacets={[
                {
                  key: 'productClusterIds',
                  value: shelfOne.categoryCode,
                },
              ]}
              title={shelfOne.title}
              suspenseData
            />
          )}
        </Suspense>
      )}

      {collections && (
        <CollectionShelf
          {...blockOurColectionsCollection.items[0]}
          data={collections}
        />
      )}

      {shelfTwo && (
        <Suspense fallback={<ProductShelfSkeleton loading />}>
          {shelfTwo.categoryCode && (
            <ProductShelfCustom
              itemsQuantity={[
                shelfTwo.itemsQuantifyOnMobile,
                shelfTwo.itemsQuantifyOnDesktop,
              ]}
              first={shelfTwo.first}
              selectedFacets={[
                {
                  key: 'productClusterIds',
                  value: shelfTwo.categoryCode,
                },
              ]}
              title={shelfTwo.title}
              suspenseData
            />
          )}
        </Suspense>
      )}

      {mosaic.length && (
        <section className="section layout__section layout__content no__pd--mosaico layout__wrapper">
          <div className="page__section-content">
            <CategoryTiles data={mosaic} />
          </div>
        </section>
      )}

      {shelfThree && (
        <Suspense fallback={<ProductShelfSkeleton loading />}>
          {shelfThree.categoryCode && (
            <ProductShelfCustom
              itemsQuantity={[
                shelfThree.itemsQuantifyOnMobile,
                shelfThree.itemsQuantifyOnDesktop,
              ]}
              first={shelfThree.first}
              selectedFacets={[
                {
                  key: 'productClusterIds',
                  value: shelfThree.categoryCode,
                },
              ]}
              title={shelfThree.title}
              suspenseData
            />
          )}
        </Suspense>
      )}
      {verticalCollections.length && (
        <CollectionShelfVertical
          {...blockCardCollectionVerticalCollection.items[0]}
          data={verticalCollections}
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
  const allData = (await getDataForCategoryMen()) ?? []

  const {
    dadosDasMarcasCollection,
    blocoMarcasCollection,
    blockOurColectionsCollection,
    infoCardOurColectionsCollection,
    blockCardCollectionVerticalCollection,
    infoCardCollectionVerticalCollection,
    bubbleLinksCategoriesTitleCollection,
    bubbleLinksCategoriesImgCollection,
    mosaicoCollection,
    productShelfCollection,
    bannerCollection,
    siteSeoCollection,
  } = allData

  return {
    props: {
      dadosDasMarcasCollection,
      blocoMarcasCollection,
      blockOurColectionsCollection,
      infoCardOurColectionsCollection,
      blockCardCollectionVerticalCollection,
      infoCardCollectionVerticalCollection,
      bubbleLinksCategoriesTitleCollection,
      bubbleLinksCategoriesImgCollection,
      mosaicoCollection,
      productShelfCollection,
      bannerCollection,
      siteSeoCollection,
    },
  }
}

CategoryMen.displayName = 'CategoryMen'
export default mark(CategoryMen)
