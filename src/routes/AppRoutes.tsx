import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import About from '../pages/About/About';
import ContactUs from '@/pages/ContactUs/ContactUs';
import FAQs from '@/pages/FAQs/FAQs';
import { RequestDemoForm } from '@/components/RequestDemoForm/RequestDemoForm';
import Corporate from '@/pages/Corporate/Corporate';
function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<ContactUs />} />
			<Route path='/faq' element={<FAQs />} />
			<Route path='/corporate' element={<Corporate/>}/>
		</Routes>
	);
}

export default AppRoutes;
