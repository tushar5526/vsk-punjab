import "./index.css"
import QuestionWithIframe from '../../../components/QuestionWIthIframe';
import { connect } from 'react-redux';
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader';
import financeAndCivilWorks from "../../../assets/pjb/SectionHeader/finance_and_civil_works.png"
import CombinedFooter from '../../../components/layouts/CombinedFooter';
import { FC } from "react";

interface Props {
    year: any
    date_range: any
    widthFooter?: any
}

const Screen4: FC<Props> = ({ year, date_range, widthFooter = true }) => {
    return (
        <>
            <SectionHeader Icon={financeAndCivilWorks} label="Finance and Civil Works" />
            <div className='IframeScreen4'>
                <QuestionWithIframe
                    questionId={67}
                    width="100%"
                    type={1}
                    height="100%"
                    params={{
                        year,
                        date_range
                    }}
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

export default connect(mapStateToProps)(Screen4)