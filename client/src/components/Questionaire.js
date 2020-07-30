import React from 'react';


const Questionaire = ({
  showAnswers,
  clickHandler,
  handleAnswer,
  body: { question, correct_answer, incorrect_answers },
} ) => {
  const allAnswers = [correct_answer, ...incorrect_answers]
  const mixedAnswers = allAnswers.sort(() => Math.random() - 0.5);
  return (
  <div className="wrapper">
    <header className="App-header">
      <h1>React quiz</h1>
    </header>
    <div className="quiz-container">
        <div className="questions">
          <h2 className="question" dangerouslySetInnerHTML={{ __html: question }}/>
        </div>
        <div className="answers">
          {mixedAnswers.map((answer, i) => {
            const clicked = showAnswers
              ?
                answer === correct_answer
                ? "true"
                : "false"
              : "";

            return (
            <p key={i} className={`${clicked} `} onClick={() => handleAnswer(answer) } dangerouslySetInnerHTML={{ __html: answer}} />
          )})}
        </div>
        {showAnswers && (
          <button onClick={clickHandler} className={"nextbutton"}>Next Question</button>
        )}
    </div>
  </div>
)};

export default Questionaire;