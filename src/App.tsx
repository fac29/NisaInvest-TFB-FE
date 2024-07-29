import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Footer } from '@/components/Footer/Footer';

function App() {
	return (
		<>
			<BrowserRouter>
				<AppRoutes />
				<Footer></Footer>
			</BrowserRouter>
		</>
	);
}

export default App;
