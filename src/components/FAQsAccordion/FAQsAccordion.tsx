import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import faqs from './faqsData';

function newLine(text: string) {
	return text.split('\n').map((str) => <p className='py-1'>{str}</p>);
}

function FAQsAccordion() {
	return (
		<Accordion type='single' collapsible>
			{faqs.map((item, index) => (
				<AccordionItem value={`item-${index + 1}`}>
					<AccordionTrigger>{item.question}</AccordionTrigger>
					<AccordionContent>{newLine(item.answer)}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}

export default FAQsAccordion;
