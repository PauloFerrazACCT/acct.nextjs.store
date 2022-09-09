import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import { useCartToggleButton } from 'src/sdk/cart/useCartToggleButton'

function CartToggle() {
  const btnProps = useCartToggleButton()

  return (
    <Button
      variant="tertiary"
      data-fs-button-icon
      data-fs-button-cart
      aria-label={`Cart with ${btnProps['data-items']} items`}
      icon={<Icon name="ShoppingBag" width={24} height={20} />}
      {...btnProps}
    />
  )
}

export default CartToggle
