import "./Dashboard.css"
import { connect } from 'react-redux/es/exports';
import QuestionWithIframe from '../../components/QuestionWIthIframe';

const Dashboard = ({ dashboard, district, block, cluster }: any) => {
    const _dash = {
        performance: 26,
        admin: 25,
        academic: 27
    }
    const compliment = ((dashboard === _dash.performance) || (dashboard === _dash.admin) || (dashboard === _dash.academic))
    console.log(compliment, "this is")
    return (
        <div className='Dashboard'>
            <div className='Dashboard__iframeContainer'>
                {compliment ? (
                    <QuestionWithIframe
                        questionId={dashboard}
                        type={1}
                        width={"100%"}
                        height="100%"
                        nonDownloadable={true}
                        handleLoadCounter={() => { }}
                    />
                ) : (
                    <QuestionWithIframe
                        questionId={dashboard}
                        type={1}
                        width={"100%"}
                        params={district ? { district } : block ? { block } : { cluster }}
                        height="100%"
                        nonDownloadable={true}
                        handleLoadCounter={() => { }}
                    />
                )}
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