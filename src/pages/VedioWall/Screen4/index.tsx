import "./index.css"
import QuestionWithIframe from '../../../components/QuestionWIthIframe';
import { connect } from 'react-redux';
import SectionHeader from '../../ControlledTabs/Tabs/utils/SectionHeader';
import financeAndCivilWorks from "../../../assets/pjb/SectionHeader/finance_and_civil_works.png"
import cwsn from "../../../assets/pjb/SectionHeader/cwsn.png"
import civil_works from "../../../assets/pjb/SectionHeader/civil_works.png"
import CombinedFooter from '../../../components/layouts/CombinedFooter';
import { FC } from "react";

interface Props {
    year: any
    single_date: any
    widthFooter?: any
}

const Screen4: FC<Props> = ({ year, single_date, widthFooter = true }) => {
    return (
        <>
            <div className="Screen4HeaderContainer">
                <div className="HeaderContainer__padding Screen4HeaderContainer__width1">
                    <SectionHeader Icon={financeAndCivilWorks} label="Finance" />
                </div>
                <div className="HeaderContainer__padding Screen4HeaderContainer__width1">
                    <SectionHeader Icon={civil_works} label="Civil Works" />
                </div>
                <div className="HeaderContainer__padding Screen4HeaderContainer__width2">
                    <SectionHeader Icon={cwsn} label="CWSN" />
                </div>
            </div>
            <div className='IframeScreen4'>
                <QuestionWithIframe
                    questionId={67}
                    width="100%"
                    type={1}
                    height="100%"
                    params={{ year, single_date }}
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

export default connect(mapStateToProps)(Screen4)