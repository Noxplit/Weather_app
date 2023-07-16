import Forecast from '../Forecast/Forecast'
import WeatherItems from '../WeatheItems/WeatherItems'
import styles from './main.module.scss'

const MainBlock = () => {
  return (
    <div className={styles.wrapper}>
      <Forecast/>
      <WeatherItems/>
    </div>
  )
}

export default MainBlock