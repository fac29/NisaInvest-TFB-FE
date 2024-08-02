import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import faqs from './faqsData';

function FAQsAccordion() {
	return (
		<Accordion type='single' collapsible>
			{faqs.map((item, index) => (
				<AccordionItem value={`item-${index + 1}`}>
					<AccordionTrigger>{item.question}</AccordionTrigger>
					<AccordionContent>{item.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}

export default FAQsAccordion;
