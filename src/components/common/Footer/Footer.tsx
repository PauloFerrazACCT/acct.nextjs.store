import {
  Icon as UIIcon,
  List as UIList,
  PaymentMethods as UIPaymentMethods,
} from '@faststore/ui'

import Icon from 'src/components/ui/Icon'
import LogoACCT from 'src/components/ui/LogoACCT'
import Link from 'src/components/ui/Link'
import SROnly from 'src/components/ui/SROnly'
import { mark } from 'src/sdk/tests/mark'

import FooterLinks from './FooterLinks'

type FooterProps = {
  /**
   * Enables Incentives Section
   */
  sectionIncentives?: boolean
  /**
   * Enables Social Section
   */
  sectionSocial?: boolean
  /**
   * Enables Payment Methods Section
   */
  sectionPaymentMethods?: boolean
}

export function Footer({
  sectionIncentives = true,
  sectionSocial = true,
  sectionPaymentMethods = true,
}: FooterProps) {
  return (
    <footer
      data-fs-footer
      data-fs-footer-incentives={sectionIncentives}
      data-fs-footer-social={sectionSocial}
      data-fs-footer-payment-methods={sectionPaymentMethods}
      className="footer"
    >
      <div data-fs-footer-nav className="footer__section layout__content">
        <FooterLinks />

        {sectionSocial && (
          <section data-fs-footer-social className="footer__social">
            <p data-fs-footer-title className="text__title-mini">
              Follow us
            </p>
            <UIList variant="unordered">
              <li>
                <Link
                  variant="footer"
                  href="https://www.facebook.com/"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <UIIcon
                    component={
                      <Icon width="24px" height="24px" name="Facebook" />
                    }
                  />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://www.instagram.com/"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <UIIcon
                    component={
                      <Icon width="24px" height="24px" name="Instagram" />
                    }
                  />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://twitter.com/"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <UIIcon
                    component={
                      <Icon width="24px" height="24px" name="Twitter" />
                    }
                  />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://www.youtube.com/"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtubeIcon"
                >
                  <UIIcon
                    component={
                      <Icon width="24px" height="24px" name="Youtube" />
                    }
                  />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://www.tiktok.com/"
                  title="Tiktok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tiktokIcon"
                >
                  <UIIcon
                    component={
                      <Icon width="24px" height="24px" name="Tiktok" />
                    }
                  />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://www.pinterest.com/"
                  title="Pinterest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <UIIcon
                    component={
                      <Icon width="24px" height="24px" name="Pinterest" />
                    }
                  />
                </Link>
              </li>
            </UIList>
          </section>
        )}
      </div>

      <div data-fs-footer-note className="footer__note layout__content">
        {sectionPaymentMethods && (
          <UIPaymentMethods data-fs-footer-payment-methods>
            <p data-fs-footer-title className="text__title-mini">
              Payment Methods
            </p>
            <UIList>
              <li>
                <Icon width="34px" height="24px" name="Visa" />
                <SROnly text="Visa" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="Diners" />
                <SROnly text="Diners Club" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="Mastercard" />
                <SROnly text="Mastercard" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="EloCard" />
                <SROnly text="Elo Card" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="PayPal" />
                <SROnly text="PayPal" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="Stripe" />
                <SROnly text="Stripe" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="GooglePay" />
                <SROnly text="Google Pay" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="ApplePay" />
                <SROnly text="Apple Pay" />
              </li>
            </UIList>
          </UIPaymentMethods>
        )}
      </div>
      <div
        data-fs-footer-copyright
        className="footer__copyright layout__wrapper"
      >
        <div className="grid-content">
          <span className="text-body-small">
            <p>
              In-store pricing may vary. Prices and offers are subject to
              change. © 2021 Store name. All rights reserved. Store is a
              trademark of Store and its affiliated companies. -
              NIF/CNPJ/EIN/UTR
            </p>
          </span>
          <span className="text-body-small developed--wrapper">
            <p>Created and developed by</p>
            <LogoACCT />
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'
export default mark(Footer)
