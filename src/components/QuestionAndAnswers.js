import React, { useState } from 'react';

const QuestionAndAnswers = () => {
    const [showAnswers, setShowAnswers] = useState(false);

    const toggleAnswers = () => {
        setShowAnswers(!showAnswers);
    };

    return (
        <div>
            <h2>Question: 'What is React?'</h2>
            {/* <p>A sample question goes here...</p> */}

            <button onClick={toggleAnswers}>
                {showAnswers ? 'Hide Answers' : 'Show Answers'}
            </button>

            {showAnswers && (
                <div>
                    <h3>Answers:</h3>
                    <ul>
                        <li>'React is a JavaScript library for building user interfaces.' </li>
                    </ul>

                </div>

            )}
        </div>
    );
};

export default QuestionAndAnswers;