// Inbuilt Modules
import { useState } from "react";
// Custom Component
import QnA from "./QnA"
// Data
import faqData from "../data/faqData.json"

const Faq = () => {
    // Q & A State
    const [clicked, setClicked] = useState(false)

    // Show & Hide Answer
    const toggleAnswer = (index) => {
        if (clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }

    return (
        <>
            <div className="section faq-section" id="faq">
                <h1 className="section-title">
                    FAQ!
                </h1>
                <div className="faq-content">
                    {
                        faqData.map((item, index) => {
                            return (
                                <QnA clickFunc={toggleAnswer} question={item.question} answer={item.answer} key={index} clickedState={clicked} indexValue={index} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Faq