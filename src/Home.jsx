import { useDispatch, useSelector } from 'react-redux'
import Header from './components/MainBlock/Header/Header'
import MainBlock from './components/MainBlock/MainBlock/MainBlock'
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems'
import './global.scss'
import styles from './home.module.scss'
import { useEffect } from 'react'
import axios from 'axios'
import { getCurrentWeather,  getForecastWeather,  setIsLoading } from './redux/slice/weatherSlice'
import { Route, Routes } from 'react-router-dom'
import DescriptionForecast from './components/pages/DescriptionForecast'
import Loading from './components/Loading/Loading'

function Home() {
	const { inputValue } = useSelector(state => state)
	const { isLoading } = useSelector(state => state)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchDataForecast = async () => {
			try {
				await axios
					.get(
						`http://api.weatherapi.com/v1/current.json?key=80ce54289eb64c488cb131854231307&q=${inputValue}&aqi=no`,
					)
					.then(data => dispatch(getCurrentWeather(data.data)))
				dispatch(setIsLoading(false))
			} catch (error) {
				console.error(error)
				dispatch(setIsLoading(false))
			}
		}
    const fetchDataDescr = async () => {
			try {
				await axios
					.get(
						`http://api.weatherapi.com/v1/forecast.json?key=80ce54289eb64c488cb131854231307&q=${inputValue}&days=10&aqi=no&alerts=no`,
					)
					.then(data => dispatch(getForecastWeather(data.data)))
				dispatch(setIsLoading(false))
			} catch (error) {
				console.log(error)
				dispatch(setIsLoading(false))
			}
		}
		fetchDataDescr()
		fetchDataForecast()
	}, [inputValue])

	if (isLoading) {
		return <Loading />
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
