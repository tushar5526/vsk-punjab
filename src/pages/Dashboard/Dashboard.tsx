import "./Dashboard.css"
import { connect } from 'react-redux/es/exports';
import QuestionWithIframe from '../../components/QuestionWIthIframe';

const Dashboard = ({ dashboard }: any) => {
    console.log(dashboard, "dashboard")
    return (
        <div className='Dashboard'>
            <div className='Dashboard__iframeContainer'>
                <QuestionWithIframe
                    questionId={dashboard}
                    type={1}
                    width={"100%"}
                    // params={{ ...filters }}
                    height="100%"
                    nonDownloadable={true}
                    handleLoadCounter={() => { }}
                />
            </div>

        </div>
    )
}

const mapStateToProps = ({ tab: { dashboard } }: any) => ({
    dashboard
})
export default connect(mapStateToProps)(Dashboard)