import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Footer } from '@/components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
	return (
		<>
			<BrowserRouter>
				<div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
					<NavBar />
					<AppRoutes />
					<Footer></Footer>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
