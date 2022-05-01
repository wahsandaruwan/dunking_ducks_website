import Step from "./Step"

const RoadMap = () => {
    return (
        <>
            <div className="section roadmap-section">
                <h1 className="section-title">
                    Road Map!
                </h1>
                <div className="roadmap-content">
                    <div className="event">
                        <p className="step-no">Step 01</p>
                        <Step stepName="Planning" stepDetails="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis autem officia rerum doloremque nemo quibusdam pariatur quasi impedit, eum asperiores? Quibusdam amet asperiores consectetur explicabo velit cumque ipsum vero blanditiis." />
                    </div>
                    <div className="event">
                        <p className="step-no">Step 02</p>
                        <Step stepName="Development" stepDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum a debitis quibusdam, quae impedit nesciunt officiis enim repudiandae, in est tempora beatae? Delectus rerum pariatur veritatis libero odio tempore sequi?" />
                    </div>
                    <div className="event">
                        <p className="step-no">Step 03</p>
                        <Step stepName="Execution" stepDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veniam error hic commodi, eum enim ipsa necessitatibus? Placeat explicabo aspernatur et laboriosam autem a aliquam necessitatibus ipsum ea, esse ducimus." />
                    </div>
                    <div className="event">
                        <p className="step-no">Step 04</p>
                        <Step stepName="Feedbacks" stepDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat laborum, magni tenetur atque nulla omnis! Qui ipsa molestias maiores, praesentium esse, in suscipit error ipsam ipsum, minima aliquid ducimus!" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoadMap