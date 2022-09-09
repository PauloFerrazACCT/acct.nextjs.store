import Carousel from '@acctglobal/carousel-universal'

import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import useWindowDimensions from 'src/hooks/useWindowDimensions'

import ProductCard from '../../product/ProductCard'
import Section from '../Section'
import styles from './product-shelf.module.scss'
// import './new-product-shelf.scss'

interface ProductShelfProps extends Partial<ProductsQueryQueryVariables> {
  title: string | JSX.Element
  withDivisor?: boolean
  suspenseData?: boolean
  itemsQuantity?: [mobile: number, desktop: number]
}

const options = {
  suspense: true,
  fallbackData: { search: { products: undefined } },
}

function ProductShelfCustom({
  title,
  itemsQuantity,
  withDivisor = false,
  suspenseData,
  ...variables
}: ProductShelfProps) {
  const products = useProductsQuery(
    variables,
    suspenseData ? options : undefined
  )

  const { isMobile } = useWindowDimensions()

  if (products?.edges.length === 0) {
    return null
  }

  return (
    <Section
      className={`layout__section ${
        withDivisor ? 'section__divisor' : ''
      } layout__wrapper`}
    >
      <div className="layout__wrapper">
        <h2 className="text__title-section layout__content">{title}</h2>
        <div className={styles.fsProductShelf} data-fs-product-shelf>
          <ProductShelfSkeleton loading={products === undefined}>
            <Carousel
              bullet={{ isVisible: true, bulletEnableColor: '#77DA7A' }}
              arrow={
                isMobile
                  ? { isVisible: false }
                  : { isVisible: true, iconColor: 'black' }
              }
              qtyItems={
                itemsQuantity
                  ? isMobile
                    ? itemsQuantity[0]
                    : itemsQuantity[1]
                  : isMobile
                  ? 2
                  : 4
              }
            >
              {products?.edges.map((product, idx) => (
                <ProductCard
                  key={`${product.node.id}`}
                  product={product.node}
                  index={idx + 1}
                />
              ))}
            </Carousel>
          </ProductShelfSkeleton>
        </div>
      </div>
    </Section>
  )
}

export default ProductShelfCustom
