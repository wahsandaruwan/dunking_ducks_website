const QnA = ({ question, answer, clickFunc, clickedState, indexValue }) => {
    console.log(question)
    return (
        <>
            <div className="qna-content" onClick={() => clickFunc(indexValue)}>
                <div className="question">
                    <p className="question-txt">{question}</p>
                    <svg className={`dropdown-icon ${clickedState === indexValue ? "rotate" : ""}`} width="15" height="10" viewBox="0 0 42 25">
                        <path d="M3 3L21 21L39 3" stroke="#2c3e50" stroke-width="7" stroke-linecap="round" fill="none" />
                    </svg>
                </div>
                <div div className={`answer ${clickedState === indexValue ? "show" : ""}`}>
                    <p className="answer-txt">{answer}</p>
                </div>
            </div>
        </>
    )
}

export default QnA