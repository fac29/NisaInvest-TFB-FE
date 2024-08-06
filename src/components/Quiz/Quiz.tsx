import React from 'react';
import useFetch from '../../utils/fetchData';
import { useState } from 'react';
import { Button } from '../Button/Button';

import './Quiz.styles.css';

interface jsonQuestion {
	id: number;
	question: string;
	created_at: Date;
	answers: jsonAnswers[];
}

interface jsonAnswers {
	id: number;
	answer_text: string;
	question_id: number;
	goal_id: number;
	created_at: Date;
}

export function QuestionSlide() {
	const [storeAnswers, setStoreAnswers] = useState<number[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [clicks, setClicks] = useState<number>(0);

	const { data } = useFetch<jsonQuestion[]>(
		'https://nisa-invest-tfb-be.vercel.app/quiz/questions-with-answers',
		[]
	);

	console.log(`Here is the selected answer ids ${storeAnswers}`);

	if (!data || data.length === 0) return <div>Quiz Loading...</div>;

	// Determine if the current question is multi-select (e.g., question 2 is multi-select)
	const isMultiSelect = currentQuestion === 1; // Index 1 is the second question

	const handleStoreAnswers = (answerId: number) => {
		setStoreAnswers([...storeAnswers, answerId]);
		setClicks(clicks + 1);
	};

	const submitQuestion = () => {
		if (isMultiSelect && clicks == 2) {
			setClicks(0);
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setClicks(0);
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='pb-8 font-playfair text-3xl'>
					My Financial Wellness Quiz
				</h1>
				<div className='quiz-app'>
					<div className='question-section'>
						<div className='question-count'>
							<span>
								Question {currentQuestion + 1} / {data.length}
							</span>
						</div>
						<div className='question-text'>
							{data && data[currentQuestion]?.question}
						</div>
					</div>
					<div className='answer-section'>
						{data[currentQuestion]?.answers.map((option) => (
							// Render button for other questions
							<button
								className='answer-button'
								onClick={() => handleStoreAnswers(option.id)}
							>
								{option.answer_text}
							</button>
						))}
						{currentQuestion === 3 && (
							<textarea name='postContent' rows={4} cols={40} />
						)}
					</div>
					<button onClick={submitQuestion}> continue </button>
				</div>
			</div>
		</>
	);
}
