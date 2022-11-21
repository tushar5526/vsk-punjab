import { DatePicker, Select } from "antd"
import down_arrow from "../../../assets/pjb/utils/down_arrow.png"
import { toogleTab } from '../../../redux/TabController/actions';
import { connect } from "react-redux/es/exports"
import RoleBasedFilters from "../../../components/RoleBasedFilters/RoleBasedFilters";



const DemoHeader = ({ tabs, _toogle, current, level }: any) => {
    const districts = [
        {
            value: "SIRMAUR",
            label: "SIRMAUR",
        },
        {
            value: "CHAMBA",
            label: "CHAMBA",
        }, {
            value: "UNA",
            label: 'UNA',
        }, {
            value: "KULLU",
            label: 'KULLU',
        }, {
            value: "KANGRA",
            label: 'KANGRA',
        },
        {
            value: "MANDI",
            label: 'MANDI',
        },
        {
            value: "SOLAN",
            label: 'SOLAN',
        },
        {
            value: "SHIMLA",
            label: 'SHIMLA',
        },
        {
            value: "HAMIRPUR",
            label: 'HAMIRPUR',
        },
        {
            value: "LAHUL AND SPITI",
            label: 'LAHUL AND SPITI',
        },
        {
            value: "BILASPUR",
            label: 'BILASPUR',
        },
        {
            value: "KINNAUR",
            label: 'KINNAUR',
        },
    ]

    const handleChange = (e: any) => {
        console.log(e, "handle change")
    }
    return (
        <>
            <div className="demoHeader mb">
                <div className="demoHeader__DateSelector mb">
                    <DatePicker
                        suffixIcon={
                            <img alt="dropdown"
                                className='demoHeader__dropdown--suffix'
                                src={down_arrow} />
                        }
                        onChange={handleChange} />
                </div>
                <div>
                    <div className="demoHeader__span demoHeader__spaceBetween">
                        <div className="demoHeader__Tabs demoHeader__Tabs__Between">
                            {tabs?.map(({ dashboard_id, name, id }: any, idx: number) => (
                                <button onClick={() => _toogle({
                                    dashboard: dashboard_id,
                                    current: idx
                                })} className={`demoHeader__button ${current === idx && "demoHeader__button--active"}`}>{name}</button>
                            ))}
                        </div>

                        <div className="demoHeader__Tabs demoHeader__Tabs__Evenly">
                            <RoleBasedFilters />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}



const mapDispatchToProps = (dispatch: any) => ({
    _toogle: (obj: object) => dispatch(toogleTab(obj))
})
const mapStateToProps = ({ tab: { current, dashboard } }: any) => ({
    current,
    dashboard
})

export default connect(mapStateToProps, mapDispatchToProps)(DemoHeader)