import { useSelector } from 'react-redux'
import styles from './forecast.module.scss'

const Forecast = () => {
	const { currentWeather } = useSelector(state => state)
	const description = currentWeather?.current?.condition?.text
	const icon = currentWeather?.current?.condition?.icon


	return (
		<div>
			<div className={styles.title}>Weather Forecast</div>
			<div className={styles.wrapper}>
				<div className={styles.description}>{description}</div>
				<img sizes='100px' src={`https:${icon}`} alt='icon' />
			</div>
		</div>
	)
}

export default Forecast
