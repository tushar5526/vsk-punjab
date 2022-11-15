import { Performace } from './Tabs/Performance'
import { connect } from 'react-redux/es/exports';
import ControllHeader from './ControllHeader';
import AdminData from './Tabs/AdminData';
import AcademicView from './Tabs/AcademicView';
import "./index.css"
import GreayFooter from './GreyFooter/GreayFooter';
import { useEffect, useState } from 'react';
import { getRolesFromLS } from '../../utils';

const ControlledTabs = ({ current }: any) => {
    const [level, setLevel] = useState<any>(null)
    const roles = getRolesFromLS()

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
    useEffect(() => {
        validateRoles()
    }, [])
    return (
        <>
            <ControllHeader />
            {
                (current === 1) ?
                    <Performace role={level} />
                    : current === 2 ?
                        <AdminData /> :
                        <AcademicView />
            }
            <GreayFooter />
        </>
    )
}

const mapStateToProps = ({ tab: { current } }: any) => ({
    current,
});


export default connect(mapStateToProps)(ControlledTabs)