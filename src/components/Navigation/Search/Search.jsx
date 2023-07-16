import { useState } from 'react'
import styles from './search.module.scss'
import {CiTempHigh} from 'react-icons/ci'
import {RiSearchLine} from 'react-icons/ri'
import { useDispatch} from 'react-redux'
import { postInputValue } from '../../../redux/slice/weatherSlice'

const Search = () => {
  const dispatch = useDispatch()
const [value,setValue] = useState('Baranovichi')

const postInput = () => {
  dispatch(postInputValue(value))
}

  return (
    <form className={styles.wrapper}>
      <CiTempHigh/>
<input className={styles.input} value={value} onChange={e => setValue(e.target.value)} type="text" />
<div  onClick={postInput}><RiSearchLine size={22}/></div>
    </form>
  )
}

export default Search