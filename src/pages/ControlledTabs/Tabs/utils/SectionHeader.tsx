
interface Props {
    label: string
    label2?: string
    withHeight?: boolean
}
const SectionHeader = ({ label, label2, withHeight = true }: Props) => {
    return (
        <div className={`demoHeader3 ${withHeight ? "demoHeader3__height1" : "demoHeader3__height2"}  mb`}>
            <div className='demoHeader3__span'>
                {!label2 || label2 === "" ? (
                    <>
                        <div className="demoHeader3__spanDiv"></div>
                        <p className="demoHeader3__spanText">{label}</p>
                    </>
                ) : (
                    <>
                        <div className="demoHeader3__spanLabelDiv">
                            <p className="demoHeader3__spanLabelDivText"> {label}</p>
                            <p className="demoHeader3__spanLabelDivText">{label2}</p>
                        </div>

                    </>
                )}

            </div>
        </div>
    )
}

export default SectionHeader