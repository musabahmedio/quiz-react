import React from "react";

function QuizResult(props) {
    return (
        <>
        <div className="show-score">
            Your Score : {props.score} <br />
            Total Score : {props.totalScore}
        </div>
        <button className="option-btn-2" onClick={props.tryAgain}>TRY AGAIN</button>
        </>
    )
}
export default QuizResult