import { useSelector } from "react-redux"
// import DescriptionWeather from "../Description/DescriptionWeather/DescriptionWeather";
// import DayForecast from "../Description/ForTenHour/DayForecast";
// import styles from './descriptionForecast.module.scss'

const DescriptionForecast = () => {
  const {oneDayForecast} = useSelector(state=>state)
 const weather = oneDayForecast?.day
 const dayForecast = oneDayForecast?.hour


  return (
    <div>
{/* <DescriptionWeather weather={weather}  oneDayForecast={oneDayForecast} />
<div className={styles.wrapper}>{dayForecast?.map(forecast => <DayForecast forecast={forecast}/>)}</div> */}
    </div>
  )
}

export default DescriptionForecast