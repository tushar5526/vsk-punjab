import ControllHeader from './ControllHeader';
import "./index.css"
import GreayFooter from './GreyFooter/GreayFooter';
import { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const ControlledTabs = () => {

    const tabs = [
        {
            id: 1,
            name: "Administrative KPIs",
            dashboard_id: 26,
            filters: {
                block: 33,
                cluster: 34,
                district: 32
            }
        },
        {
            id: 2,
            name: "Administrative Overview",
            dashboard_id: 25,
            filters: {
                block: 30,
                cluster: 31,
                district: 29
            }
        },
        {
            id: 3,
            name: "Academic Overview",
            dashboard_id: 27,
            filters: {
                cluster: 36,
                district: 35,
                block: 53

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