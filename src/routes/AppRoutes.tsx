import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import About from '../pages/About/About';
import ContactUs from '@/pages/ContactUs/ContactUs';
import FAQs from '@/pages/FAQs/FAQs';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<ContactUs />} />
			<Route path='/faq' element={<FAQs />} />
		</Routes>
	);
}

export default AppRoutes;
