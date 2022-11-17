import { Performace } from './Tabs/Performance'
import { connect } from 'react-redux/es/exports';
import ControllHeader from './ControllHeader';
import "./index.css"
import GreayFooter from './GreyFooter/GreayFooter';
import { useEffect, useState } from 'react';
import { getRolesFromLS } from '../../utils';
import { getDashboardTabs } from '../../services/HasuraClient/hasuraCalls';
import { notification } from 'antd';
import API_SERVICE from '../../services/api-service';
import Dashboard from '../Dashboard/Dashboard';

const ControlledTabs = () => {
    const [level, setLevel] = useState<any>(null)
    const roles = getRolesFromLS()
    const [_tabs, setTabs] = useState<any>(null)

    const validateRoles = () => {
        try {
            const { geographic_level } = roles
            if (geographic_level === "State") {
                setLevel(geographic_level)
            }
        } catch (error) {
            console.log("there is some error")
        }
    }

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
        validateRoles()
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