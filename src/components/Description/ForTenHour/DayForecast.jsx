import React from 'react'
import styles from './dayForecast.module.scss'

const DayForecast = ({forecast}) => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.temperature}>{Math.round(forecast?.temp_c)}°C</div>
    <div className={styles.time}>{forecast?.time.substring(11, 16)}</div>
    <div>{forecast?.condition?.text.substring(0,6)}</div>
    <img src={`https:${forecast?.condition?.icon}`} alt="icon" />
    </div>
  )
}

export default DayForecast