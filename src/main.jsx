import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <Home />
    </Provider>
    </QueryClientProvider>
    </BrowserRouter>
)
