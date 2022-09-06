import BubbleLinks from './BubbleLinks'

type TData = {
  name?: string
  link: string
  img: any
}

interface Props {
  title?: string | undefined
  data: Array<{
    name?: string
    link: string
    img: any
  }>
}

function BubbleLinksBrands({ title, data }: Props) {
  const newData = data.map((item: TData) => {
    return { ...item, image: item.img }
  })

  if (!newData || !title) return <></>

  return (
    <div className="bubble-links bubble-links-brands">
      <div className="bubble-links__content">
        <BubbleLinks title={title} bubbleLinks={newData} />
      </div>
    </div>
  )
}

export default BubbleLinksBrands
