import {useState} from 'react';
import QuizResult from './components/QuizResult';
import "./App.css"


function App() {

  var questionData = [
    
    {
      question: "What is the Full Form Of HTML",
      options: [
        "HyperText Makeup Language",
        "HyperText Markup Language",
        "HyperText Markup Lame",
        "HyperTate Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "What does CSS stands for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      question: "What does PHP stands for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      question: "What does SQL stands for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      question: "What year was JavaScript launched?",
      answer: "1995",
      options: ["1996", "1995", "1994", "None of the Above"],
    },
  ];


const [score, setScore] = useState(0);
const [count, setCount] = useState(0);
const [selectedOption, setSelectedOption] = useState('');
const [finish, setFinish] = useState(false);


const changeQuestion = () => {
  if (count < questionData.length - 1) {
    setSelectedOption(0);
    setCount(count + 1);
  } else {
    setFinish(true);
  }
  updateScore();
};


const updateScore = () => {
  if (selectedOption === questionData[count].answer) {
    setScore(score + 1);
  }
};


const resetAll = () => {
  setFinish(false)
  setCount(0)
  setSelectedOption(0)
  setScore(0)
}


return (
  <div>
    <div>
      <h1 className='heading-txt'>Quiz App</h1>
      <div className='container'>
        {finish ? (
          <QuizResult score={score}  totalScore={questionData.length} tryAgain={resetAll} />
          ) : (
            <>
            <div className='question-number'>
              <h1 className='head'>{count + 1}/{questionData.length}</h1>
            </div>
            <div className='question-txt'>
              <h2>{questionData[count].question}</h2>
              <div className='option-container'>
                {questionData[count].options.map((option, i) => (
                  <button
                    className={`option-btn ${
                      selectedOption === i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setSelectedOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div>
                <button className='option-btn-1' onClick={changeQuestion}>Next Question</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);
} 


export default App;
