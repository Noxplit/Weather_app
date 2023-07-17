import React from 'react'
import styles from './descriptionWeather.module.scss'

const DescriptionWeather = ({weather,oneDayForecast}) => {

  window.scrollTo(0,0)



  return (
  <div className={styles.wrapper}>
    <div >Date: {oneDayForecast?.date}</div>
    <div>Max temp: <span className={styles.temp}>{weather?.maxtemp_c}°C</span></div>
    <div>Min temp: <span className={styles.temp}>{weather?.mintemp_c}°C</span></div>
    <div>Max wind: <span className={styles.temp}>{weather?.maxwind_mph} mph</span></div>
    <div className={styles.container_icon}>
    <div>Forecast: {weather?.condition?.text}</div>
    <img src={`https:${weather?.condition?.icon}`} className={styles.icon} alt="icon" />
    </div>
    </div>
  )
}

export default DescriptionWeather