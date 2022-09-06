import { mockMenu } from './mock'

type MenuProps = {
  item: MenuItemProps
}

type MenuItemProps = {
  id: number
  url: string
  name: string
  children: MenuItemProps[]
  component?: JSX.Element
  links?: Array<{
    url: string
    name: string
  }>
}

function MenuItem({ item }: MenuProps) {
  return (
    <div fashion-ui-mega-menu-column="true" key={item.id}>
      <a fashion-ui-mega-menu-title="true" href={item.url}>
        {item.name}
      </a>
      {item.children.map(
        (nivel_3: { id: number; url: string; name: string }, idx) => {
          return (
            <ul key={idx}>
              <li>
                <a href={nivel_3.url}>{nivel_3.name}</a>
              </li>
            </ul>
          )
        }
      )}
      {item.children.length ? (
        <a fashion-ui-mega-menu-link="true" href={item.url}>
          View All
        </a>
      ) : null}
    </div>
  )
}

function Menu() {
  return (
    <>
      <header fashion-ui-menu="true">
        <nav fashion-ui-menu-nav="true">
          <ul fashion-ui-menu-ul="true">
            {mockMenu.map((nivel_1, idx) => {
              return nivel_1.children.length ? (
                <li key={idx} fashion-ui-menu-li="true">
                  <a href={nivel_1.url}>{nivel_1.name}</a>
                  <div fashion-ui-mega-menu="true">
                    <div fashion-ui-mega-menu-wrap="true">
                      <div fashion-ui-mega-menu-between="true">
                        <div className="menu-wrap-border-left" />
                        <section fashion-ui-mega-menu-flex="true">
                          {nivel_1.children.map((nivel_2, idx_2) => (
                            <MenuItem key={idx_2} item={nivel_2} />
                          ))}

                          {/* {nivel_1.links ? (
                            <div fashion-ui-mega-menu-column="true">
                              {nivel_1.links?.map((item) => (
                                <a
                                  fashion-ui-mega-menu-title="true"
                                  href={item.url}
                                  key={item.name}
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          ) : null} */}
                        </section>
                        <div className="menu-wrap-border-right" />
                        <div fashion-ui-mega-menu-component="true">
                          {/* {nivel_1.component && nivel_1.component} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li fashion-ui-menu-li="true" key={idx}>
                  <a href={nivel_1.url}>{nivel_1.name}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Menu
