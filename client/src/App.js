import React, { useState, useEffect } from 'react';
import { Questionaire } from './components'
import './index.css';

function App () {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)

  useEffect(() => {
    async function apiFetcher() {
      const response = await fetch('/api/hello');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      setQuestions(body.results)
    }
    apiFetcher();
  },[])

  const handleAnswer = (answer) => {
    if(answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    setShowAnswers(true);
  };

  const clickHandler = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1)
  }
 
  return questions.length > 0 ? (
    <div className="App">
      {currentIndex >= questions.length ? (
        <h1 className="final">Your final score was {score}!
        </h1>
      ) : (
      
      <Questionaire 
      body={questions[currentIndex]} 
      clickHandler={clickHandler}
      showAnswers= {showAnswers}
      handleAnswer= {handleAnswer} />
      )}
    </div>
  ) : (
    <h1 className="loader">Loading...</h1>
  );
}

export default App;