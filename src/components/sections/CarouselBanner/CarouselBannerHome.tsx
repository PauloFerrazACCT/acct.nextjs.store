import { Carousel, Link } from '@faststore/ui'
import Image from 'next/image'

// import './carousel-banner.scss'
interface TProps {
  items: Array<{
    title: string
    subtitle?: string
    description?: string
    imgDesktop: {
      url: string
    }
    imgMobile: {
      url: string
    }
    labelBtn?: string
    linkBtn?: string
  }>
}

function CarouselBannerHome({ items }: TProps) {
  return (
    <section className="page__section carousel__banner--size">
      <Carousel
        controls="complete"
        transition={{
          duration: 400,
          property: 'transform',
        }}
      >
        {items?.map((banner, idx) => {
          const imageDesktop = banner?.imgDesktop
          const imageMobile = banner?.imgMobile

          return (
            <div key={idx}>
              <div className="carousel-banner__content grid-content">
                <h4 className="carousel-banner__title">{banner.title} </h4>
                {banner.subtitle && (
                  <h5 className="carousel-banner__subtitle">
                    {banner.subtitle}
                  </h5>
                )}
                {banner.description && (
                  <p className="carousel-banner__description">
                    {banner.description}
                  </p>
                )}
                {banner.labelBtn && (
                  <Link
                    href={banner.linkBtn}
                    className="carousel-banner__button"
                  >
                    {banner.labelBtn}
                  </Link>
                )}
              </div>
              {imageMobile && (
                <div className="carousel-banner__img-mobile">
                  <Image
                    src={imageMobile.url}
                    alt={banner.title}
                    width={360}
                    height={240}
                    sizes="(max-width: 768px) 70vw, 50vw"
                  />
                </div>
              )}
              {imageDesktop && (
                <div className="carousel-banner__img-desktop">
                  <Image
                    src={imageDesktop.url}
                    alt={banner.title}
                    width={360}
                    height={240}
                    sizes="(max-width: 768px) 70vw, 50vw"
                  />
                </div>
              )}
            </div>
          )
        })}
      </Carousel>{' '}
    </section>
  )
}

export default CarouselBannerHome
