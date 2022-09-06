/* eslint-disable vtex/prefer-early-return */
import { useState, useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import Link from 'src/components/ui/Link'
import { useUI } from 'src/sdk/ui/Provider'

import { mockMenu } from '../Menu/mock'
import { ArrowRight } from './Icons'

type DropdownItemProps = {
  isLink?: number
  goBackMenu?: null | string
  goToMenu?: null | string
  goToUrl: string
  children: JSX.Element
  onClick?: () => void
}

function MobileMenu() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [backMenu, setBackMenu] = useState<string | null>(null)
  const [activeUrl, setActiveUrl] = useState<string | null | undefined>(null)
  const [departamentActive, setDepartamentActive] = useState('')
  const dropdownRef = useRef(null)

  const { closeNavbar } = useUI()

  useEffect(() => {
    if (activeMenu === 'main') {
      setDepartamentActive('')
    }
  }, [activeMenu, departamentActive])

  function DropdownItemRoot({
    goBackMenu,
    goToMenu,
    goToUrl,
    children,
    isLink,
  }: DropdownItemProps) {
    return isLink !== 0 ? (
      <button
        className={`${
          departamentActive === goToMenu ? 'active-root' : ''
        } menu-mobile__item--root`}
        onClick={() => {
          goBackMenu && setBackMenu(goBackMenu)
          if (goToMenu) {
            setActiveUrl(goToUrl)
            setActiveMenu(goToMenu)
            setDepartamentActive(goToMenu)
          }
        }}
      >
        {children}
      </button>
    ) : (
      <Link
        href={isLink !== 0 ? '/#' : goToUrl}
        className={`menu-mobile__item--root sale ${
          activeMenu !== 'main' ? 'menu-mobile__hidden' : 'menu-mobile__visible'
        }`}
      >
        {children}
      </Link>
    )
  }

  function DropdownItem({
    isLink,
    goBackMenu,
    goToMenu,
    goToUrl,
    children,
    onClick,
  }: DropdownItemProps) {
    return isLink !== 0 ? (
      <button
        className="menu-mobile__item"
        onClick={() => {
          goBackMenu && setBackMenu(goBackMenu)
          if (goToMenu) {
            setActiveMenu(goToMenu)
            setActiveUrl(goToUrl)
          }
        }}
      >
        {children}
      </button>
    ) : (
      <Link
        href={isLink !== 0 ? '/#' : goToUrl}
        className="menu-mobile__item"
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }

  return (
    <>
      <div
        className={`menu-mobile ${
          departamentActive === 'Women' || departamentActive === 'Men'
            ? 'first-menu'
            : ''
        }
        ${
          departamentActive === 'Girl' || departamentActive === 'Boy'
            ? 'second-menu'
            : ''
        }`}
      >
        {mockMenu.map((nivel_1, idx) => {
          return (
            <DropdownItemRoot
              key={idx}
              goToMenu={nivel_1.name}
              goToUrl={nivel_1.url}
              goBackMenu={nivel_1.name}
              isLink={nivel_1.children.length}
            >
              <>
                <h2>{nivel_1.name}</h2>
                <ArrowRight />
              </>
            </DropdownItemRoot>
          )
        })}
      </div>
      <div
        className={`${
          activeMenu !== 'main' ? 'menu-mobile__visible' : 'menu-mobile__hidden'
        } menu-mobile__back`}
      >
        <button
          onClick={() => {
            setActiveMenu(
              backMenu && backMenu !== activeMenu ? backMenu : 'main'
            )
          }}
        >
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.00001L0.46967 4.46968C0.176777 4.76257 0.176777 5.23744 0.46967 5.53034L1 5.00001ZM11 5.75001C11.4142 5.75001 11.75 5.41422 11.75 5.00001C11.75 4.58579 11.4142 4.25001 11 4.25001V5.75001ZM5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L5.53033 1.53033ZM4.46967 9.53033C4.76256 9.82322 5.23744 9.82322 5.53033 9.53033C5.82322 9.23744 5.82322 8.76256 5.53033 8.46967L4.46967 9.53033ZM1 5.75001L11 5.75001V4.25001L1 4.25001L1 5.75001ZM4.46967 0.46967L0.46967 4.46968L1.53033 5.53033L5.53033 1.53033L4.46967 0.46967ZM0.46967 5.53034L4.46967 9.53033L5.53033 8.46967L1.53033 4.46967L0.46967 5.53034Z"
              fill="black"
            />
          </svg>
          <span>Return</span>
        </button>
      </div>

      <CSSTransition in timeout={500} unmountOnExit classNames="menu-primary">
        <div ref={dropdownRef}>
          {mockMenu.map((nivel_1) => {
            let n1: unknown[] = []

            if (nivel_1.children.length) {
              n1 = nivel_1.children.map((nivel_2) => (
                <CSSTransition
                  in={activeMenu === nivel_1.name}
                  timeout={500}
                  classNames="menu-primary"
                  unmountOnExit
                  key={nivel_2.id}
                >
                  <div className="menu-mobile">
                    <DropdownItem
                      goToMenu={nivel_2.name}
                      goToUrl={nivel_2.url}
                      isLink={nivel_2.children.length}
                    >
                      <>
                        <h2>{nivel_2.name} </h2>
                        <ArrowRight />
                      </>
                    </DropdownItem>
                  </div>
                </CSSTransition>
              ))
            }

            return n1
          })}

          {mockMenu.map((nivel_1) => {
            let n1
            let n2

            if (nivel_1.children.length) {
              n1 = nivel_1.children.map((nivel_2) => {
                n2 = nivel_2.children.map((nivel_3) => (
                  <CSSTransition
                    in={activeMenu === nivel_2.name}
                    timeout={500}
                    classNames="menu-primary"
                    unmountOnExit
                    key={nivel_3.id}
                  >
                    <div className="menu-mobile">
                      <DropdownItem
                        goToMenu={nivel_3.name}
                        goToUrl={nivel_3.url}
                        isLink={nivel_3.children.length}
                        onClick={closeNavbar}
                      >
                        <>
                          <h2>{nivel_3.name} </h2>
                          <ArrowRight />
                        </>
                      </DropdownItem>
                    </div>
                  </CSSTransition>
                ))

                return n2
              })
            }

            return n1
          })}
          <CSSTransition
            in
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
          >
            <div
              className={`${
                activeMenu !== 'main'
                  ? 'menu-mobile__visible'
                  : 'menu-mobile__hidden'
              } menu-mobile`}
            >
              <DropdownItem
                goToMenu={activeMenu}
                goToUrl={activeUrl ?? ''}
                isLink={0}
                onClick={closeNavbar}
              >
                <>
                  <span className="menu-mobile__item--bold">
                    View all ({activeMenu})
                  </span>
                  <ArrowRight />
                </>
              </DropdownItem>
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </>
  )
}

export default MobileMenu
