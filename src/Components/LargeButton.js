const LargeButton = ({ clsName, btnTxt, btnUrl }) => {
    return (
        <>
            <a className={clsName} href={btnUrl}>{btnTxt}</a>
        </>
    )
}

export default LargeButton