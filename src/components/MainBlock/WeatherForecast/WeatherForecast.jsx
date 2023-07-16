import { Link } from 'react-router-dom'
import styles from './weatherForecast.module.scss'
import { useDispatch } from 'react-redux'
import { getOneDayForecast } from '../../../redux/slice/weatherSlice'

const WeatherForecast = ({ weather }) => {
	const dispatch = useDispatch()
	const weatherHandler = () => {
		dispatch(getOneDayForecast(weather))
	}
	return (
		<div onClick={weatherHandler} className={styles.wrapper}>
			<Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/description'}>
				<div className={styles.title}>{Math.round(weather?.day?.maxtemp_c)}°C</div>
				<div className={styles.min}>{Math.round(weather?.day?.mintemp_c)}°C</div>
				<img sizes='100px' src={`https:${weather?.day?.condition?.icon}`} alt='icon' />
				<div className={styles.date}>{weather?.date}</div>
				<div className={styles.description}>{weather?.day?.condition?.text}</div>
			</Link>
		</div>
	)
}

export default WeatherForecast
