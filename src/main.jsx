import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
    <Home />
    </Provider>
    </BrowserRouter>
)
