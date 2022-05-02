import { useState } from "react";
import QnA from "./QnA"
import faqData from "../data/faqData.json"

const Faq = () => {
    const [clicked, setClicked] = useState(false)

    const toggleAnswer = (index) => {
        if (clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }

    return (
        <>
            <div className="section faq-section">
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