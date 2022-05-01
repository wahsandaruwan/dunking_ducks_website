const Step = ({ stepName, stepDetails }) => {
    return (
        <>
            <div className="step-content">
                <h2 className="step-name">{stepName}</h2>
                <p className="step-details">{stepDetails}</p>
            </div>
        </>
    )
}

export default Step