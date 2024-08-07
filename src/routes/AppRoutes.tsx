import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import About from '../pages/About/About';
import ContactUs from '@/pages/ContactUs/ContactUs';
import FAQs from '@/pages/FAQs/FAQs';
import Corporate from '@/pages/Corporate/Corporate';
import Advisors from '@/pages/Advisors/Advisors';
import Booking from '@/pages/Booking/Booking';
import Podcast from '@/pages/Podcast/Podcast';
import Quiz from '@/pages/Quiz/Quiz';
import Dashboard from '@/pages/Account/Dashboard/Dashboard';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<ContactUs />} />
			<Route path='/faq' element={<FAQs />} />
			<Route path='/corporate' element={<Corporate />} />
			<Route path='/advisors' element={<Advisors />} />
			<Route path='/booking' element={<Booking />} />
			<Route path='/podcast' element={<Podcast />} />
			<Route path='/quiz' element={< Quiz />} />
			<Route path='/dashboard' element={<Dashboard />} />
		</Routes>
	);
}

export default AppRoutes;
