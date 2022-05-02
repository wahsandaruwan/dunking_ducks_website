// Icons
import { IoIosArrowDropdown } from "react-icons/io"

const QnA = ({ question, answer, clickFunc, clickedState, indexValue }) => {
    return (
        <>
            <div className="qna-content" onClick={() => clickFunc(indexValue)}>
                <div className="question">
                    <p className="question-txt">{question}</p>
                    <IoIosArrowDropdown className={`dropdown-icon ${clickedState === indexValue ? "rotate" : ""}`} />
                </div>
                <div div className={`answer ${clickedState === indexValue ? "show" : ""}`}>
                    <p className="answer-txt">{answer}</p>
                </div>
            </div>
        </>
    )
}

export default QnA