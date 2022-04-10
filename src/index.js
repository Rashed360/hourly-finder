import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/redux/store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'
import './style/defaults.css'
import './style/hover.css'
import './style/responsive.css'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
