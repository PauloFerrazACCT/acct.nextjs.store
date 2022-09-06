import { mark } from 'src/sdk/tests/mark'

import { Menu } from '../Menu'
import styles from './navlinks.module.scss'

interface NavLinksProps {
  classes?: string
}

function NavLinks({ classes = '' }: NavLinksProps) {
  return (
    <nav className={`${styles.fsNavlinks} ${classes}`}>
      <div className="layout__content">
        <Menu />
        {/* <RegionalizationButton />
        <UIList data-fs-navlinks-list>
          {collections.map(({ href, name }) => (
            <li key={name} data-fs-navlinks-list-item>
              <Link
                data-fs-navlinks-link
                variant="display"
                href={href}
                onClick={onClickLink}
              >
                {name}
              </Link>
            </li>
          ))}
        </UIList> */}
      </div>
    </nav>
  )
}

export default mark(NavLinks)
