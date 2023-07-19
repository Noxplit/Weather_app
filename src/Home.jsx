import { useDispatch, useSelector } from 'react-redux'
import Header from './components/MainBlock/Header/Header'
import MainBlock from './components/MainBlock/MainBlock/MainBlock'
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems'
import './global.scss'
import styles from './home.module.scss'
import axios from 'axios'
import { getCurrentWeather, getForecastWeather} from './redux/slice/weatherSlice'
import { Route, Routes } from 'react-router-dom'
import DescriptionForecast from './components/pages/DescriptionForecast'
import Loading from './components/Loading/Loading'
import { useQuery } from 'react-query'

function Home() {
	const { inputValue } = useSelector(state => state)
	const dispatch = useDispatch()

	const fetchData = () => {
		const fetchDataForecast = async () => {
			const response = await axios.get(
				`http://api.weatherapi.com/v1/current.json?key=80ce54289eb64c488cb131854231307&q=${inputValue}&aqi=no`,
			)
			return dispatch(getCurrentWeather(response.data))
		}
		const fetchDataDescr = async () => {
			const response = await axios.get(
				`http://api.weatherapi.com/v1/forecast.json?key=80ce54289eb64c488cb131854231307&q=${inputValue}&days=10&aqi=no&alerts=no`,
			)
			return dispatch(getForecastWeather(response.data))
		}
		fetchDataForecast()
		fetchDataDescr()
	}

	const { isLoading, isError } = useQuery(
		['dataDescription', inputValue],
		() => fetchData(inputValue),
		{ keepPreviousData: true },
	)

	if (isLoading) {
		return (
			<div>
				<Loading />
				Loading...
			</div>
		)
	}

	if (isError) {
		return <div>Error loading</div>
	}

	return (
		<div className={styles.container}>
			<Header />
			<Routes>
				<Route
					element={
						<div className={styles.wrapper}>
							<div className={styles.navigation}>
								<NavigationItems />
							</div>
							<div className={styles.main}>
								<MainBlock />
							</div>
						</div>
					}
					path='/'
				/>
				<Route element={<DescriptionForecast />} path='/description' />
			</Routes>
		</div>
	)
}

export default Home
