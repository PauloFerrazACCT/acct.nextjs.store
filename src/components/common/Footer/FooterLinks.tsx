import { useState } from 'react'
import { List as UIList } from '@faststore/ui'

import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'

const links = [
  {
    title: 'Our company',
    items: [
      {
        href: '/institutional',
        name: 'About Us',
      },
      {
        href: '/institutional',
        name: 'Our Blog',
      },
      {
        href: '/institutional',
        name: 'Stores',
      },
      {
        href: '/institutional',
        name: 'Work With Us',
      },
    ],
  },
  {
    title: 'Orders & Purchases',
    items: [
      {
        href: '/institutional',
        name: 'Check Order Status',
      },
      {
        href: '/institutional',
        name: 'Returns and Exchanges',
      },
      {
        href: '/institutional',
        name: 'Product Recall',
      },
      {
        href: '/institutional',
        name: 'Gift Cards',
      },
    ],
  },
  {
    title: 'Support & Services',
    items: [
      {
        href: '/institutional',
        name: 'Support Center',
      },
      {
        href: '/institutional',
        name: 'Schedule a Service',
      },
      {
        href: '/institutional',
        name: 'Contact Us',
      },
    ],
  },
  {
    title: 'Partnerships',
    items: [
      {
        href: '/institutional',
        name: 'Affiliate Program',
      },
      {
        href: '/institutional',
        name: 'Advertise with US',
      },
      {
        href: '/institutional',
        name: 'Market Place',
      },
    ],
  },
]

type LinkItem = {
  href: string
  name: string
}

interface LinksListProps {
  items: LinkItem[]
}

function LinksList({ items }: LinksListProps) {
  return (
    <UIList>
      {items.map((item) => (
        <li key={item.name}>
          <Link variant="footer" href={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </UIList>
  )
}

function FooterLinks() {
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  return (
    <section className="footer__links" data-fs-footer-links>
      <div className="display-mobile">
        <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
          {links.map((section, index) => (
            <AccordionItem
              key={section.title}
              isExpanded={indicesExpanded.has(index)}
              buttonLabel={section.title}
            >
              <LinksList items={section.items} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden-mobile">
        <div className="footer__links-columns">
          {links.map((section) => (
            <nav key={section.title} data-fs-footer-links-columns>
              <div>
                <p data-fs-footer-title className="text__title-mini">
                  {section.title}
                </p>
                <LinksList items={section.items} />
              </div>
            </nav>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FooterLinks
