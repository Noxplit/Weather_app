import React from 'react'
import styles from './descriptionWeather.module.scss'

const DescriptionWeather = ({weather,oneDayForecast}) => {



  return (
  <div className={styles.wrapper}>
    <div>Date: {oneDayForecast?.date}</div>
    <div>Max temperature: {weather?.maxtemp_c}°C</div>
    <div>Min temperature: {weather?.mintemp_c}°C</div>
    <div>Max wind: {weather?.maxwind_mph} mph</div>
    <div className={styles.container_icon}>
    <div>Forecast: {weather?.condition?.text}</div>
    <img src={`https:${weather?.condition?.icon}`} className={styles.icon} alt="icon" />
    </div>
    </div>
  )
}

export default DescriptionWeather