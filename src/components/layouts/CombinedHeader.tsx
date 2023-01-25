import bharatSarkar from "../../assets/pjb/Header/highres/bharat-sarkar.png"
import education from "../../assets/pjb/Header/highres/education-logo.png"

const CombinedHeader = () => {
    return (
        <div key={+new Date()} className="dashboard-header">

            <div className='combinedHeader'>

                <div className='combinedHeader__img'>
                    <img src={bharatSarkar} alt="bharatSarkar" />
                </div>
                <div className='combinedHeader__title'>
                    <div
                        className="header_text_1"
                    >
                        ਪੰਜਾਬ ਵਿਦਿਆ ਸਮੀਕਸ਼ਾ ਕੇਂਦਰ ਏਕੀਕ੍ਰਿਤ ਡੈਸ਼ਬੋਰਡ
                    </div>
                    <div
                        className="header_text_2"
                    >
                        ਸਕੂਲ ਸਿੱਖਿਆ ਵਿਭਾਗ, ਪੰਜਾਬ
                    </div>
                </div>

                <div className='combinedHeader__img2'>
                    <img src={education} alt="education" />
                </div>
            </div>




        </div>
    )
}

export default CombinedHeader