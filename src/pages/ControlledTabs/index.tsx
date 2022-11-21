import ControllHeader from './ControllHeader';
import "./index.css"
import GreayFooter from './GreyFooter/GreayFooter';
import { useEffect, useState } from 'react';
import { getDashboardTabs } from '../../services/HasuraClient/hasuraCalls';
import { notification } from 'antd';
import API_SERVICE from '../../services/api-service';
import Dashboard from '../Dashboard/Dashboard';

const ControlledTabs = () => {
    const [_tabs, setTabs] = useState<any>(null)


    const getTabsData = async () => {
        try {
            const { data: { tabs } } = await getDashboardTabs()
            if (tabs) {
                setTabs(tabs)
            }
        } catch (error) {
            notification.error({
                message: API_SERVICE.handleErrors(error),
                placement: "bottomRight"
            })
        }

    }
    useEffect(() => {
        getTabsData()
    }, [])
    return (
        <>
            <ControllHeader tabs={_tabs} />
            <Dashboard />
            <GreayFooter />
        </>
    )
}




export default ControlledTabs