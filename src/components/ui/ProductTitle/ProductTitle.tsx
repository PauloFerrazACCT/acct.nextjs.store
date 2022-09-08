import { memo } from 'react'
import type { ProductTitleProps } from '@faststore/ui'
import { ProductTitle as UIProductTitle } from '@faststore/ui'
import ProductTags from '@acctglobal/product-tags'

import styles from './product-title.module.scss'

function ProductTitle({ ...otherProps }: ProductTitleProps) {
  return (
    <div className="header-content">
      <UIProductTitle className={styles.fsProductTitle} {...otherProps} />
      <ProductTags
        tagCategoryLabel="Category"
        urlCategory="/categoria"
        tagCollectionLabel="Collection"
        urlCollection="/colecao"
        CustomTagComponent={undefined}
      />
    </div>
  )
}

export default memo(ProductTitle)
