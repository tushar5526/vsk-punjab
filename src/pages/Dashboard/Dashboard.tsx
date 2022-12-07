import "./Dashboard.css"
import { connect } from 'react-redux/es/exports';
import QuestionWithIframe from '../../components/QuestionWIthIframe';

const Dashboard = ({ dashboard, district, block, cluster }: any) => {


    return (
        <div className='Dashboard'>
            <div className='Dashboard__iframeContainer'>
                <QuestionWithIframe
                    questionId={dashboard}
                    type={1}
                    width={"100%"}
                    params={district && !block && !cluster ? { district } : district && block && !cluster ? { block } : { cluster }}
                    height="100%"
                    nonDownloadable={true}
                    handleLoadCounter={() => { }}
                />
            </div>
        </div >
    )
}


const mapStateToProps = ({ tab: { dashboard }, filters: { district, block, cluster } }: any) => ({
    dashboard,
    district,
    block,
    cluster
})
export default connect(mapStateToProps)(Dashboard)