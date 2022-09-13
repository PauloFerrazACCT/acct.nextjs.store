import Icon from 'src/components/ui/Icon'
import Link from 'src/components/ui/Link'

export default function Policy() {
  return (
    <div className="policy-infos__container">
      <div className="policy-infos__delivery">
        <Icon width="28" height="28" name="NewTruck" />
        <Link className="policy-infos__link" href="/">
          Delivery Policy
        </Link>
        <p>
          Get it in the next day. <br /> Knew how.
        </p>
      </div>
      <div className="policy-infos__return">
        <Icon width="28" height="28" name="TwoArrowsCircle" />
        <Link className="policy-infos__link" href="/">
          Return Policy
        </Link>
        <p>
          You can return it for <br /> free in 30 days.
        </p>
      </div>
    </div>
  )
}
