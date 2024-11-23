import {useNavigate} from 'react-router-dom'

import Button from '/button/button'

import {errorProps} from './_errorProps'
import styles from './error.module.scss'

const {container, subTitle, title, text, btn, icon} = styles
function ErrorPage({error, button, resetErrorBoundary, Icon}: errorProps) {
  const nav = useNavigate()
  const {name, message} = error
  const content = button?.content ?? 'Przejdz na stronę główną'

  function reset() {
    if (button?.preRestFunction) button.preRestFunction()
    else nav('/')
    if (resetErrorBoundary) resetErrorBoundary()
  }

  return (
    <section className={container}>
      <h1 className={title}>Oops!</h1>
      <h2 className={subTitle}>{name}</h2>
      <span className={text}>{message}</span>
      <Button className={btn} onClick={reset}>
        <div className={icon}>{Icon}</div>
        {content}
      </Button>
    </section>
  )
}

export default ErrorPage
