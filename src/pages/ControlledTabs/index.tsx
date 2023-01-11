import ControllHeader from './ControllHeader';
import "./index.css"
import GreayFooter from './GreyFooter/GreayFooter';

const ControlledTabs = () => {

    const tabs = [
        {
            id: 1,
            name: "Administrative Overview",
            dashboard_id: 26,
            filters: {
                block: 60,
                cluster: 34,
                district: 59
            }
        },
        {
            id: 3,
            name: "Academic Overview",
            dashboard_id: 27,
            filters: {
                cluster: 36,
                district: 63,
                block: 64
            }
        },
        {
            id: 2,
            name: "Education Statistics",
            dashboard_id: 25,
            filters: {
                block: 62,
                cluster: 31,
                district: 61
            }
        }
    ]

    return (
        <>
            <ControllHeader tabs={tabs} />
            <GreayFooter />
        </>
    )
}




export default ControlledTabs