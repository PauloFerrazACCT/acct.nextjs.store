import IconMail from './icons/IconMail'
import TwitterIcon from './icons/TwitterIcon'
import FacebookIcon from './icons/FacebookIcon'
import WhatsAppIcon from './icons/WhatsAppIconShare'

function useShareProductsUrl(locationHref?: string) {
  const shareLinks = [
    {
      target: '_blank',
      name: 'Facebook',
      url: `https://www.facebook.com/sharer.php?u=${locationHref}`,
      SocialIcon: FacebookIcon,
    },
    {
      target: '_blank',
      name: 'Twitter',
      url: `https://twitter.com/share?text=Confira%20este%20produto:&hashtags=Fashion,FashioStarter&url=${locationHref}`,
      SocialIcon: TwitterIcon,
    },
    {
      target: '_blank',
      name: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=Confira%20este%20produto:${locationHref}`,
      SocialIcon: WhatsAppIcon,
    },
    {
      target: '_blank',
      name: 'E-mail',
      url: `mailto:?subject=Confira%este%produto&amp;body=Confira este produto ${locationHref}`,
      SocialIcon: IconMail,
    },
  ]

  return shareLinks
}

export default useShareProductsUrl
