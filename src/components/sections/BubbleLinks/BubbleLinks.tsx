import Image from 'next/image'

type Variant = 'default' | 'noRadius'
interface Props {
  title?: string | undefined
  variant?: Variant
  bubbleLinks: Array<{
    name?: string
    link: string
    image: any
  }>
}

function BubbleLinks({ title, variant = 'default', bubbleLinks }: Props) {
  return (
    <div className="bubble-links" data-bubble-links-variant={variant}>
      {title && (
        <h4 className="bubble-links__title text__title-section">{title}</h4>
      )}
      <div className="bubble-links__content">
        {bubbleLinks.map((item, idx) => {
          const imageData = item.image

          return (
            <figure key={idx} className="bubble-links__wrapper">
              <a href={item.link} className="bubble-links__link">
                {imageData && (
                  <Image
                    src={imageData.url}
                    alt={item.name ?? ''}
                    width={90}
                    height={90}
                    className="bubble-links__img"
                  />
                )}
                <span className="bubble-links__name">{item.name}</span>
              </a>
            </figure>
          )
        })}
      </div>
    </div>
  )
}

export default BubbleLinks
