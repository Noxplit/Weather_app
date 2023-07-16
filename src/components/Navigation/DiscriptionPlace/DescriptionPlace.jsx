import styles from './description.module.scss'


const DescriptionPlace = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Weather today</h2>
      <div className={styles.description}>Welcome to the Weather App. Here you can see the current weather anywhere on the planet earth, even 9 days ahead (but this is not accurate). Enjoy watching!</div>
    </div>
  )
}

export default DescriptionPlace