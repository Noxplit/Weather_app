import styles from '../../home.module.scss'
import { TiWeatherPartlySunny } from 'react-icons/ti'

const Loading = () => {
  return (
    <div className={styles.loading}>
    <TiWeatherPartlySunny />
    Loading...
  </div>
  )
}

export default Loading