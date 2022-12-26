import { DatePicker } from "antd"
import down_arrow from "../../../assets/pjb/utils/down_arrow.png"
import { toogleTab } from '../../../redux/TabController/actions';
import { connect } from "react-redux/es/exports"
import RoleBasedFilters from "../../../components/RoleBasedFilters/RoleBasedFilters";
import filterActions from "../../../redux/filters/action";




const DemoHeader = ({ tabs, _toogle, current, level, _applyDistrictFilter, _applyBlockFilter, _applyClusterFilter }: any) => {
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
                                <button
                                    onClick={() => {
                                        _toogle({
                                            dashboard: dashboard_id,
                                            current: idx
                                        })
                                        _applyDistrictFilter(null)
                                        _applyBlockFilter(null)
                                        _applyClusterFilter(null)
                                    }
                                    }
                                    className={`demoHeader__button ${current === idx && "demoHeader__button--active"}`}>{name}</button>
                            ))}
                        </div>
                        <div className="demoHeader__Tabs demoHeader__Tabs__Evenly">
                            <RoleBasedFilters tab={current} filtersPages={tabs[current]?.filters} />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}



const mapDispatchToProps = (dispatch: any) => ({
    _toogle: (obj: object) => dispatch(toogleTab(obj)),
    _applyDistrictFilter: (district: string) => dispatch(filterActions.applyDistrict(district)),
    _applyBlockFilter: (block: string) => dispatch(filterActions.applyBlock(block)),
    _applyClusterFilter: (cluster: string) => dispatch(filterActions.applyCluster(cluster))
})

const mapStateToProps = ({ tab: { current, dashboard } }: any) => ({
    current,
    dashboard
})

export default connect(mapStateToProps, mapDispatchToProps)(DemoHeader)