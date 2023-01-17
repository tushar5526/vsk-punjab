import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import { connect } from 'react-redux'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import infrastructure from "../../../assets/pjb/SectionHeader/infrastructure.png"
import { FC } from 'react';

interface Props {
    year: any
    single_date: any
}

const Screen2: FC<Props> = ({ year, single_date }) => {

    return (
        <>
            <SectionHeader Icon={infrastructure} label="Infrastructure" />
            <div className='IframeScreen'>
                <QuestionWithIframe
                    questionId={65}
                    width="100%"
                    type={1}
                    params={{ year, single_date }}
                    height="100%"
                    handleLoadCounter={() => { }}
                />
            </div>
        </>
    )
}


const mapStateToProps = ({ vedio_wall: { year, single_date } }: any) => ({
    year,
    single_date,
})

export default connect(mapStateToProps)(Screen2)