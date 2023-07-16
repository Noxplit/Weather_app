import { useSelector } from 'react-redux'
import styles from './header.module.scss'
import { TiWeatherCloudy } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Header = () => {
	const { currentWeather } = useSelector(state => state)
	const location = currentWeather?.location

	return (
		<div className={styles.wrapper}>
			<Link style={{color:'inherit'}} to={'/'}><TiWeatherCloudy size={40} /></Link>
			<div>{location?.name}</div>
			<div>{location?.localtime.substring(11, 16)}</div>
		</div>
	)
}

export default Header
