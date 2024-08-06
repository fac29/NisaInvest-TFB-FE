import React from 'react';
import useFetch from '../../utils/fetchData';
import { useState } from 'react';

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
	const [score, setScore] = useState<number[]>([]);
	const [showScore, setShowScore] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);

	const handleAnswerOptionClick = (answerID: number) => {
	setCurrentQuestion(currentQuestion + 1)
	setScore([...score, answerID])	
	};

	const { data } = useFetch<jsonQuestion[]>(
		'https://nisa-invest-tfb-be.vercel.app/quiz/questions-with-answers'
	);

	// console.log(`LOOK HERE DIANA ${JSON.stringify(data)}`)
	if (!data || data.length === 0) return <div>Quiz Loading...</div>;

	return (
		<>
			<h1>My financial quiz</h1>
				<div className='quiz-app'>
					<div className='question-section'>
						<div className='question-count'>
							<span>
								Question {currentQuestion + 1} / {data.length}
							</span>
						</div>
						<div className='question-text'>
							{data as jsonQuestion[currentQuestion].question}
						</div>
					</div>
					<div className='answer-section'>
						{data as jsonQuestion [currentQuestion].answers.map((option) => (
							<button
								className='answer-button'
								key={option.id}
								onClick={() => handleAnswerOptionClick(option.id)}
							>
								{option.answer_text}
							</button>
						))}
					</div>
				</div>
		</>
	);
}
