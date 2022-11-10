import { Performace } from './Tabs/Performance'
import { connect } from 'react-redux/es/exports';
import ControllHeader from './ControllHeader';
import AdminData from './Tabs/AdminData';
import AcademicView from './Tabs/AcademicView';
import "./index.css"
import GreayFooter from './GreyFooter/GreayFooter';

const ControlledTabs = ({ user, current }: any) => {
    return (
        <>
            <ControllHeader />
            {
                (current === 1) ?
                    <Performace user={user} />
                    : current === 2 ?
                        <AdminData user={user} /> :
                        <AcademicView user={user} />
            }
            <GreayFooter />
        </>
    )
}

const mapStateToProps = ({ user: { data }, tab: { current } }: any) => ({
    user: data,
    current
});


export default connect(mapStateToProps)(ControlledTabs)