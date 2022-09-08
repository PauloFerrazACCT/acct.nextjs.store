import { Link } from '@faststore/ui'
import Image from 'next/image'

type Variant = 'default' | 'vertical'
interface Props {
  variant?: Variant
  data: {
    title: string
    description?: string
    image: IContentfulimage
    labelBtn: string
    linkBtn: string
  }
}

interface IContentfulimage {
  [key: string]: string
}

const CollectionCard = ({ variant = 'default', data }: Props) => {
  const { title, description, labelBtn, linkBtn, image } = data

  return (
    <div className="collection-card" data-collection-card-variant={variant}>
      {image && (
        <div className="collection-card__img">
          <Image
            src={image.url}
            width={308}
            height={470}
            alt={image.title}
            sizes="(min-width: 75em) 33vw,
            (min-width: 48em) 50vw,
            100vw"
          />
        </div>
      )}
      <div className="collection-card__content">
        <h3 className="collection-card__title">{title}</h3>
        {description && (
          <span className="collection-card__description">{description}</span>
        )}
        <Link href={linkBtn} className="collection-card__button">
          {labelBtn}
        </Link>
      </div>
    </div>
  )
}

export default CollectionCard
