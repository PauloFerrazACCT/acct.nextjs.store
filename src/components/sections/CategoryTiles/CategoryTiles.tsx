import { Link } from '@faststore/ui'
import Image from 'next/image'

interface Props {
  data: Array<{
    description?: string
    image: IContentfulimage
    labelBtn: string
    linkBtn: string
    title?: string
  }>
}

interface IContentfulimage {
  [key: string]: string
}

function CategoryTiles({ data }: Props) {
  return (
    <div className="category-tile">
      {data.map((category, idx) => {
        const { title, description, image, labelBtn, linkBtn } = category
        const isFirstTile = idx === 0

        return (
          <div
            key={title}
            className={`category-tile__${isFirstTile ? 'rectangle' : 'square'}`}
          >
            <div className="category-tile__content">
              <h3 className="category-tile__title">{title}</h3>
              <span className="category-tile__description">{description}</span>
              <Link href={linkBtn} className="category-tile__button">
                {labelBtn}
              </Link>
            </div>
            <div className="category-tile__img">
              {image && (
                <Image
                  src={image.url}
                  width={image.width ?? 308}
                  height={image.height ?? 470}
                  alt={image.title ? image.title : title ?? ''}
                  sizes="(min-width: 75em) 100vw,
                        (min-width: 48em) 50vw,
                        100vw"
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryTiles
