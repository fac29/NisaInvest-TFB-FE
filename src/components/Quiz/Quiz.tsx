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

interface userIdQuizAnswer {
	userId: number;
	goalIds: number[];
}

export function QuestionSlide() {
	const [storeAnswers, setStoreAnswers] = useState<number[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [clicks, setClicks] = useState<number>(0);
	//const [toggle, setToggle] = useState<boolean>(true);
	const { data } = useFetch<jsonQuestion[]>(
		'https://nisa-invest-tfb-be.vercel.app/quiz/questions-with-answers',
		[]
	);

	console.log(`Here is the selected answer ids ${storeAnswers}`);

	if (!data || data.length === 0) return <div>Quiz Loading...</div>;

	// Determine if the current question is multi-select (e.g., question 2 is multi-select)
	const isMultiSelect = currentQuestion === 1; // Index 1 is the second question

	// const handleStoreAnswers = (answerId: number) => {
	// 	setToggle(!toggle);
	// 	// console.log(`Look here DIANA at the toggle : ${toggle}`);
	// 	if (toggle){
	// 		setStoreAnswers([...storeAnswers, answerId]);
	// 		setClicks(clicks + 1);
	// 	} else if (!toggle){

	// 	}
	// };

	const handleStoreAnswers = (answerId: number) => {
		setStoreAnswers((prevAnswers) => {
			const lastAnswer = prevAnswers[prevAnswers.length - 1];

			if (lastAnswer === answerId) {
				// If the last answer is the same as the current one, remove it
				const newAnswers = prevAnswers.slice(0, -1);

				// Update clicks
				setClicks((prevClicks) => Math.max(0, prevClicks - 1));

				return newAnswers;
			} else if (prevAnswers.length < 2 || !isMultiSelect) {
				// Add the new answer if we have less than 2 answers (for multi-select)
				// or if it's a single-select question
				const newAnswers = [...prevAnswers, answerId];

				// Update clicks
				setClicks((prevClicks) => prevClicks + 1);

				return newAnswers;
			} else {
				// If we already have 2 answers for a multi-select question, don't add more
				return prevAnswers;
			}
		});
	};

	const submitQuestion = () => {
		if (isMultiSelect && clicks == 2) {
			setClicks(0);
			setCurrentQuestion(currentQuestion + 1);
			// setToggle(!toggle);
		} else {
			setClicks(0);
			setCurrentQuestion(currentQuestion + 1);
			// setToggle(!toggle);
			// console.log(`Look here Adamcxyk ${toggle}`);
		}
	};

	const dataToPost: userIdQuizAnswer = {
		userId: 5,
		goalIds: [...storeAnswers],
	};

	function postDataURI(data: userIdQuizAnswer) {
		fetch('http://localhost:3000/user-goals/update-quiz-selected', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((result) => console.log(result))
			.catch((error) => console.error('Error:', error));
	}

	return (
		<>
			<div className='pt-10 flex flex-col justify-center items-center'>
				<div className='col1 pt-20'>
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
										<button
											onClick={() => postDataURI(dataToPost)}
											className=' submit-button bg-burntOrange border-2 rounded-full font-bold py-2 px-4'
										>
											{' '}
											go to my dashboard{' '}
										</button>
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
									{data &&
										data[currentQuestion]?.answers.map((option) => (
											// Render button for other questions
											<button
												id={`button-${option.id}`}
												className={`answer-button ${storeAnswers.includes(option.id) ? 'bg-burntOrange' : ''}`}
												onClick={() => handleStoreAnswers(option.id)}
											>
												{option.answer_text}
											</button>
										))}
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
				</div>
			</div>
		</>
	);
}
