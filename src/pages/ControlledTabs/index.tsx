import ControllHeader from './ControllHeader';
import "./index.css"
import GreayFooter from './GreyFooter/GreayFooter';
import { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const ControlledTabs = () => {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            name: "Performance",
            dashboard_id: 26,
            filters: {
                block: 33,
                cluster: 34,
                district: 32
            }
        },
        {
            id: 2,
            name: "Admin Data",
            dashboard_id: 25,
            filters: {
                block: 30,
                cluster: 31,
                district: 29
            }
        },
        {
            id: 3,
            name: "Academic Data",
            dashboard_id: 27,
            filters: {
                cluster: 36,
                district: 35
            }
        }
    ])

    // const getTabsData = async () => {
    //     try {
    //         const { data: { tabs } } = await getDashboardTabs()
    //         if (tabs) {
    //             setTabs(tabs)
    //         }
    //     } catch (error) {
    //         notification.error({
    //             message: API_SERVICE.handleErrors(error),
    //             placement: "bottomRight"
    //         })
    //     }

    // }
    // useEffect(() => {
    //     getTabsData()
    // }, [])
    return (
        <>
            <ControllHeader tabs={tabs} />
            <Dashboard />
            <GreayFooter />
        </>
    )
}




export default ControlledTabs