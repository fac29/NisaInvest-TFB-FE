import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Footer } from '@/components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<AppRoutes />
				<Footer></Footer>
			</BrowserRouter>
		</>
	);
}

export default App;
