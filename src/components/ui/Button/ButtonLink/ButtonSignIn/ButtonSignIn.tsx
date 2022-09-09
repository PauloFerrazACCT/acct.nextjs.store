import { ButtonLink } from 'src/components/ui/Button'
import styles from 'src/components/ui/Button/button.module.scss'
import Icon from 'src/components/ui/Icon'
import { useSession } from 'src/sdk/session'

const ButtonSignIn = () => {
  const { person } = useSession()

  return (
    <>
      <ButtonLink
        data-fs-button-signin-link
        href={person?.id ? '/account' : '/login'}
        className={`${styles.fsButton} text__title-mini signin-link`}
        variant="tertiary"
      >
        <Icon name="User" width={24} height={20} weight="bold" />
        {person?.id ? <span>My Account</span> : ''}
      </ButtonLink>
      <ButtonLink
        data-fs-button-signin-link
        href={person?.id ? '/account' : '/login'}
        className={`${styles.fsButton} text__title-mini signin-link favorite-link`}
        variant="tertiary"
      >
        <Icon name="Heart" width={24} height={20} weight="bold" />
      </ButtonLink>
    </>
  )
}

export default ButtonSignIn
