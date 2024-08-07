import React from 'react';
import useFetch from '../../utils/fetchDataV2';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

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
	const [toggle, setToggle] = useState<boolean>(true);
	const { data } = useFetch<jsonQuestion[]>(
		'https://nisa-invest-tfb-be.vercel.app/quiz/questions-with-answers',
		[]
	);

	console.log(`Here is the selected answer ids ${storeAnswers}`);

	if (!data || data.length === 0) return <div>Quiz Loading...</div>;

	// Determine if the current question is multi-select (e.g., question 2 is multi-select)
	const isMultiSelect = currentQuestion === 1; // Index 1 is the second question

	const handleStoreAnswers = (answerId: number) => {
		setToggle(!toggle);
		console.log(`Look here DIANA : ${toggle}`);
		setStoreAnswers([...storeAnswers, answerId]);
		setClicks(clicks + 1);
	};

	const submitQuestion = () => {
		if (isMultiSelect && clicks == 2) {
			setClicks(0);
			setCurrentQuestion(currentQuestion + 1);
			setToggle(!toggle);
		} else {
			setClicks(0);
			setCurrentQuestion(currentQuestion + 1);
			setToggle(!toggle);
			console.log(`Look here Adamcxyk ${toggle}`);
		}
	};

	return (
		<>
			{currentQuestion >= data.length ? (
				<div className='flex flex-col justify-center items-center'>
					<h1 className='pb-8 font-playfair text-3xl'>
						My Financial Wellness Quiz
					</h1>
					<div className='quiz-app'>
						<div className='question-section'>
							<div className='question-count'>
								<span>Quiz Completed</span>
							</div>
							{/*  TODO redirect to dashboard */}
							<div className='question-text'>
								Thank you for completing the quiz!
							</div>
							<Link to='/dashboard'>
							<button className='bg-burntOrange border-2 rounded-full font-bold py-2 px-4' > go to my dashboard </button>
							</Link>
						</div>
					</div>
				</div>
			) : (
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
							{data && (
								data[currentQuestion]?.answers.map((option) => (
									// Render button for other questions
									<button
									className={`answer-button ${toggle && 'focus:bg-burntOrange'}`}
										
										onClick={() => handleStoreAnswers(option.id)}
									>
										{option.answer_text}
									</button>
								))
							)}
							{currentQuestion === 3 && (
								<textarea name='postContent' rows={4} cols={40} />
							)}
							<br />
							<button
								type='submit'
								onClick={submitQuestion}
								className='bg-burntOrange  hover:bg-transparent  border-burntOrange border-2 rounded-full font-bold py-2 px-4 '
								disabled={isMultiSelect && clicks < 2}
							>
								{' '}
								continue{' '}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
