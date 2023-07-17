import { useSelector } from 'react-redux'
import DescriptionWeather from '../Description/DescriptionWeather/DescriptionWeather'
import DayForecast from '../Description/ForTenHour/DayForecast'


const DescriptionForecast = () => {
	const { oneDayForecast } = useSelector(state => state)
	const weather = oneDayForecast?.day
	const dayForecast = oneDayForecast?.hour




	return (
		<div>
			<DescriptionWeather weather={weather} oneDayForecast={oneDayForecast} />
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '50px',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}>
				{dayForecast?.map(forecast => (
					<DayForecast forecast={forecast} />
				))}
			</div>
		</div>
	)
}

export default DescriptionForecast
