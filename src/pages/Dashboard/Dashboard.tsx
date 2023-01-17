import "./Dashboard.css"
import { connect } from 'react-redux/es/exports';
import QuestionWithIframe from '../../components/QuestionWIthIframe';
import { FC } from 'react';

interface Props {
    dashboard: number,
    params: any
}
const Dashboard: FC<Props> = ({ dashboard, params }) => {
    return (
        <div className='Dashboard'>
            <div className='Dashboard__iframeContainer'>
                <QuestionWithIframe
                    questionId={dashboard}
                    type={1}
                    width={"100%"}
                    params={params}
                    height="100%"
                    nonDownloadable={true}
                    handleLoadCounter={() => { }}
                />
            </div>
        </div >
    )
}


const mapStateToProps = ({ tab: { dashboard } }: any) => ({
    dashboard,

})
export default connect(mapStateToProps)(Dashboard)