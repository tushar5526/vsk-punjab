import { Select } from "antd"
import down_arrow from "../../../assets/pjb/utils/down_arrow.png"
import { toogleTab } from '../../../redux/TabController/actions';
import { connect } from "react-redux/es/exports"
import Dashboard from "../../Dashboard/Dashboard";



const DemoHeader = ({ tabs, _toogle, current, dashboard }: any) => {
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

    //    <button  className={`demoHeader__button ${current === 1 && "demoHeader__button--active"}`}>Performace</button>
    return (
        <>
            <div className="demoHeader mb">
                <div className="demoHeader__span demoHeader__spaceBetween">
                    {tabs?.map(({ dashboard_id, name, id }: any, idx: number) => (
                        <button onClick={() => _toogle({
                            dashboard: dashboard_id,
                            current: idx
                        })} className={`demoHeader__button ${current === idx && "demoHeader__button--active"}`}>{name}</button>
                    ))}
                </div>
                <div className="demoHeader__span demoHeader__center">
                    <Select
                        className='demoHeader__select'
                        defaultValue={districts[0].value}
                        suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={districts}
                    />
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