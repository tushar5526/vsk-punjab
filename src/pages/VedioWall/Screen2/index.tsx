import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import Filters from '../Filters/Filters'
import { connect } from 'react-redux'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import infrastructure from "../../../assets/pjb/SectionHeader/infrastructure.png"
import { FC } from 'react';

interface Props {
    year: any
    date_range: any
}

const Screen2: FC<Props> = ({ year, date_range }) => {

    return (
        <>
            <SectionHeader Icon={infrastructure} label="Infrastructure" />
            <div className='IframeScreen'>
                <QuestionWithIframe
                    questionId={65}
                    width="100%"
                    type={1}
                    params={{ year, date_range }}
                    height="100%"
                    handleLoadCounter={() => { }}
                />
            </div>
        </>
    )
}


const mapStateToProps = ({ vedio_wall: { year, date_range } }: any) => ({
    year,
    date_range,
})

export default connect(mapStateToProps)(Screen2)