// Inbuilt Modules
import { useEffect } from "react";
// Icons
import { IoIosArrowDropdown } from "react-icons/io"
// Scroll Animation
import Aos from "aos"
import "aos/dist/aos.css"

const QnA = ({ question, answer, clickFunc, clickedState, indexValue }) => {
    // Global Animations
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div data-aos="flip-down" className="qna-content" onClick={() => clickFunc(indexValue)}>
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