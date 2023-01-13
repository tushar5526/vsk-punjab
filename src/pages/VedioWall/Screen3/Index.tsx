import { FC } from 'react';
import QuestionWithIframe from '../../../components/QuestionWIthIframe'
import "./index.css"
import { connect } from 'react-redux'
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader'
import midDayMeal from "../../../assets/pjb/SectionHeader/mid_day_meal.png"
import CombinedFooter from '../../../components/layouts/CombinedFooter'

interface Props {
    year: any
    date_range: any
    widthFooter?: any
}

const Screen3: FC<Props> = ({ year, date_range, widthFooter = true }) => {
    return (
        <>
            <SectionHeader Icon={midDayMeal} label="Mid-day Meal" />

            <div className='IframeScreen3'>
                <QuestionWithIframe
                    questionId={66}
                    width="100%"
                    type={1}
                    params={{ year, date_range }}
                    height="100%"
                />
            </div>
            {widthFooter && <CombinedFooter />}
        </>
    )
}

const mapStateToProps = ({ vedio_wall: { year, date_range } }: any) => ({
    year,
    date_range,
})


export default connect(mapStateToProps)(Screen3)