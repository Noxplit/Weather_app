import { useSelector } from 'react-redux'
import WeatherForecast from '../WeatherForecast/WeatherForecast'
import styles from './weather.module.scss'


const WeatherItems = () => {
  const {forecastWeather} = useSelector(state=>state)
  const weather = forecastWeather?.forecast?.forecastday
  return (
    <div className={styles.wrapper}>{weather?.map ((item) => <WeatherForecast key={item.date} weather={item}/>)}</div>
  )
}

export default WeatherItems