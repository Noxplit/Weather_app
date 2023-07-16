import Search from '../Search/Search'
import TodayWeather from '../TodayWeather/TodayWeather'
import DescriptionPlace from '../DiscriptionPlace/DescriptionPlace'
import styles from './navigation.module.scss'

const NavigationItems = () => {
  return (
    <div className={styles.wrapper}>
      <Search/>
      <TodayWeather/>
      <DescriptionPlace/>
    </div>
  )
}

export default NavigationItems