import { FC } from 'react';
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import { connect } from 'react-redux'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import midDayMeal from "../../../assets/pjb/SectionHeader/mid_day_meal.png"
import CombinedFooter from '../../../components/layouts/CombinedFooter'

interface Props {
    year: any
    single_date: any
    widthFooter?: any
}

const Screen3: FC<Props> = ({ year, single_date, widthFooter = true }) => {
    return (
        <>
            <SectionHeader Icon={midDayMeal} label="Mid-day Meal" />

            <div className='IframeScreen3'>
                <QuestionWithIframe
                    questionId={66}
                    width="100%"
                    type={1}
                    params={{ year, single_date }}
                    height="100%"
                />
            </div>
            {widthFooter && <CombinedFooter />}
        </>
    )
}


const mapStateToProps = ({ vedio_wall: { year, single_date } }: any) => ({
    year,
    single_date,
})


export default connect(mapStateToProps)(Screen3)