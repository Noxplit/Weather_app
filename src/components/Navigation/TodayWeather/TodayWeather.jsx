import { useSelector } from 'react-redux'
import styles from './today.module.scss'

const TodayWeather = () => {

  const { currentWeather } = useSelector(state => state)
	const current = currentWeather?.current
  
  return (
    <div className={styles.wrapper}>
    <div className={styles.temperature}>{Math.round(current?.temp_c)}°C</div>
    <img sizes='100px' src={`https://cdn.weatherapi.com/weather/64x64/day/119.png`} alt="icon" />
    <div>Humidity: {current?.humidity}%</div>
    <div>Wind: {current?.wind_mph} mph</div>
    <div>Pressure: {current?.pressure_mb} mb</div>
    </div>
  )
}

export default TodayWeather