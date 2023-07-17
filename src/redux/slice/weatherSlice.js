import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentWeather: [],
  forecastWeather: [],
  oneDayForecast: [],
  isLoading: true,
  inputValue: 'Baranovichi',
}

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
getCurrentWeather: (state, action) => {
  state.currentWeather = action.payload
},
getForecastWeather: (state, action) => {
  state.forecastWeather = action.payload
},
postInputValue: (state, action) => {
  state.inputValue = action.payload
},
getOneDayForecast: (state, action) => {
  state.oneDayForecast = action.payload
},
setIsLoading: (state, action) => {
  state.isLoading = action.payload
}
  },
})

export const {getCurrentWeather, getForecastWeather,postInputValue,getOneDayForecast, setIsLoading} = weatherSlice.actions

export default weatherSlice.reducer