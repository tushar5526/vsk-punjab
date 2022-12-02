import QuestionWithIframe from '../../../../components/QuestionWIthIframe'

const CardsPoc1 = ({ fill, type }: { fill: number, type: number }) => {
    return (
        <div className='VdoWallIframePocContainer1'>
            {/* {Array(fill).fill(1).map(() => ( */}
            <div className='VdoWallIframePocContainer1__IframeBig'>
                <QuestionWithIframe
                    questionId={51}
                    type={1}
                    width="100%"
                    height="100%"
                    nonDownloadable={true}
                    handleLoadCounter={() => { }}
                />
            </div>
            {/* ))} */}
        </div>
    )
}

export default CardsPoc1