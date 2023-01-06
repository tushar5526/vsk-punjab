
interface Props {
    label: string
    label2?: string
    withHeight?: boolean
    Icon?: any
}
const SectionHeader = ({ label, label2, Icon }: Props) => {
    return (
        <div className={`demoHeader3 demoHeader3__height1  mb`}>
            <div className='demoHeader3__span'>
                {!label2 || label2 === "" ? (
                    <>
                        <div className="demoHeader3__spanDiv">
                            <img className="demoHeader3__spanDiv--image" src={Icon} alt="screen" />
                        </div>
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