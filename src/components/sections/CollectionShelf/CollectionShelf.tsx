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

const CollectionShelf = ({ title, data }: TProps) => {
  if (!data || !title) return <></>

  return (
    <section className="page__section page__section-shelf__horizontal theme--ghost">
      <div className="layout__wrapper">
        <h2 className="title-section / grid-content">{title}</h2>
        <div className="grid-content">
          <div className="collection-shelf">
            {data.map((item, idx) => (
              <CollectionCard key={idx} data={item} variant="vertical" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionShelf
