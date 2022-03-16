import React from "react";

const Questionaire = ({showAnswers, handleAnswer, handleNextQuestion, data: {question, correct_answer, answers}}) => {
    return (
        <div className="flex flex-col">
            <div className="bg-white text-slate-900 p-6 rounded-lg shadow-md">
                <h2 className="text-center text-2xl" dangerouslySetInnerHTML={{ __html: question}}/>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
                {answers.map(answer => {
                    const border = showAnswers ? answer === correct_answer ? "border-4 border-green-500" : "border-4 border-red-500" : "border-4 border-white";
                    return (
                        <button className={`${border} bg-white p-4 text-slate-900 font-semibold rounded`} onClick={() => handleAnswer (answer)} dangerouslySetInnerHTML={{ __html: answer}}/>
                    )
                })}
             </div>
             {showAnswers ? (
                <button className={`ml-auto bg-slate-600 text-white p-6 rounded-lg shadow-md font-semibold mt-6`} onClick={handleNextQuestion}>Next question</button>
            ) : (
                <button className={`ml-auto bg-slate-800 text-white p-6 rounded-lg shadow-md font-semibold mt-6`}>Next question</button>
            )}
        </div>
    )
};

export default Questionaire;