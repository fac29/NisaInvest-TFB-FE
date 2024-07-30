import Carousel from "@/components/CarouselQuote/CarouselQuote";
import { RequestDemoForm } from "@/components/RequestDemoForm/RequestDemoForm";
function Corporate() {
    return (
     <>
	 <div className="section1">
    <h1>For Employers</h1>
    <h3>Financial wellness is the dignity of knowing our hardwork throughout life helps us achieve our goals insh'Allah</h3>
    <button> request a demo</button>
    </div>
	<div className="section2">
	<h2> how we support</h2>
	<h3>Financial wellness begins at work, and we can support your employees.</h3>
	<ul>
		<li> 1:1 guidance</li>
		<li> digital tools</li>
		<li> tailored presentations</li>
		<li> content and media</li>
	</ul>
	{/* <Carousel {quotes = {...quotes}}/> */}
	<RequestDemoForm/>
	</div>
	<div>
		<h2>Our feedback</h2>
		<h3>Here are some quotes from our most recent events</h3>
		<div>
			REVIEW CARD HERE
		</div>
		<div>
			REVIEW CARD HERE
		</div>
	</div>
    </>
    )
}

export default Corporate;