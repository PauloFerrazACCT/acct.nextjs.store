import { CollectionCard } from 'src/components/ui/CollectionCard'

interface TProps {
  title?: string
  description?: string
  seeAllText?: string
  seeAllLink?: string
  data: TData[]
}

type TData = {
  title: string
  description?: string
  image: IContentfulimage
  labelBtn: string
  linkBtn: string
}

interface IContentfulimage {
  [key: string]: string
}

const CollectionShelfVertical = ({ title, description, data }: TProps) => {
  if (!data || !title) return <></>

  return (
    <section className="page__section page__section-shelf__vertical">
      <div className="layout__wrapper">
        {title && <h2 className="title-section / grid-content">{title}</h2>}
        {description && <p className="title-section__two">{description}</p>}
        <div className="grid-content">
          <div className="collection-shelf__horizontal">
            {data.map((item, idx) => (
              <CollectionCard key={idx} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionShelfVertical
