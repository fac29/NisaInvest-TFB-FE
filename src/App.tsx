import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Carousel from './components/Carousel/Carousel';
import { quotes } from './components/Carousel/data';

function App() {
	return (
		<>
			<BrowserRouter>
				<AppRoutes />
				<Carousel quotes={quotes} />
			</BrowserRouter>
		</>
	);
}

export default App;
