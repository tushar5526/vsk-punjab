import "./Dashboard.css"
import { connect } from 'react-redux/es/exports';
import QuestionWithIframe from '../../components/QuestionWIthIframe';

const Dashboard = ({ dashboard, params }: any) => {
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

const mapStateToProps = ({ tab: { dashboard }, filters: { district } }: any) => ({
    dashboard,
    params: {
        district
    }
})
export default connect(mapStateToProps)(Dashboard)