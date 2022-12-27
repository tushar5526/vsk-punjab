import { DatePicker, Select } from "antd"
import down_arrow from "../../../assets/pjb/utils/down_arrow.png"
import { toogleFilter, toogleTab } from '../../../redux/TabController/actions';
import { connect } from "react-redux/es/exports"
import moment from "moment";
import Dashboard from "../../Dashboard/Dashboard";
import filtersUtils from "../../../components/RoleBasedFilters/filters.utils";
import { useState } from "react";




const DemoHeader = ({ tabs, _toogle, current, _toogleFilterPage, dashboard }: any) => {
    const handleChange = (e: any) => {
        console.log(e, "handle change")
    }
    const { RangePicker } = DatePicker;
    const _dash = {
        performance: 26,
        performance_block: 33,
        performance_cluster: 34,
        performance_district: 32,
        admin: 25,
        admin_block: 30,
        admin_cluster: 31,
        admin_district: 29,
        academic: 27,
        academic_cluster: 36,
        academic_district: 35,
        academic_block: 53
    }

    const [geo, setGeo] = useState({
        district: [],
    })
    const [geo2, setGeo2] = useState({
        block: [],
    })

    const [academicDateRange, setAcademicDateRange] = useState<any>("2022-12-04~2022-12-21")
    const swapDateForRangeAttendance = (toSwap: any) => {
        if (Array.isArray(toSwap)) {
            const condition1 = toSwap[1] < 10;
            const condition2 = toSwap[2] < 10;
            if (condition1 || condition2) {
                if (condition1) toSwap[1] = `${0}${toSwap[1]}`;
                if (condition2) toSwap[2] = `${0}${toSwap[2]}`;
            }
            let temp = toSwap[1];
            toSwap[1] = toSwap[toSwap.length - 1];
            toSwap[toSwap.length - 1] = temp;
            return toSwap.join("-");
        }
    };

    const fixDateRangeForAttendanceTab = (e: any) => {
        let start = swapDateForRangeAttendance(
            moment(e[0]).format("l").split("/").reverse()
        );
        let end = swapDateForRangeAttendance(
            moment(e[1]).format("l").split("/").reverse()
        );
        const prepared = `${start}~${end}`;
        if (prepared) return prepared;
    };

    const handleDistrictChange = async (e: any) => {
        setGeo({ district: e })
        if (current === 0) _toogleFilterPage(_dash.performance_district)
        else if (current === 1) _toogleFilterPage(_dash.admin_district)
        else if (current === 2) _toogleFilterPage(_dash.academic_district)
    }
    const handleBlockChange = (e: any) => {
        setGeo2({ block: e })
        if (current === 0) _toogleFilterPage(_dash.performance_block)
        else if (current === 1) _toogleFilterPage(_dash.admin_block)
        else if (current === 2) _toogleFilterPage(_dash.admin_block)
    }
    const { lodashTypes, getDataFromLodash } = filtersUtils


    const districts = getDataFromLodash(lodashTypes.DISTRICT)
    const block = getDataFromLodash(lodashTypes.BLOCK, geo.district)
    // const cluster = getDataFromLodash(lodashTypes.CLUSTER, geo.block)
    const tabCheck = {
        performance: dashboard === _dash.performance,
        performance_block: dashboard === _dash.performance_block,
        performance_cluster: dashboard === _dash.performance_cluster,
        performance_district: dashboard === _dash.performance_district,
        admin: dashboard === _dash.admin,
        admin_block: dashboard === _dash.admin_block,
        admin_cluster: dashboard === _dash.admin_cluster,
        admin_district: dashboard === _dash.admin_district,
        academic: dashboard === _dash.academic,
        academic_cluster: dashboard === _dash.academic_cluster,
        academic_district: dashboard === _dash.academic_district,
        academic_block: dashboard === _dash.academic_block,
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
                            {tabs?.map(({ dashboard_id, name }: any, idx: number) => (
                                <button
                                    onClick={() => {
                                        _toogle({
                                            dashboard: dashboard_id,
                                            current: idx
                                        })
                                    }
                                    }
                                    className={`demoHeader__button ${current === idx && "demoHeader__button--active"}`}>{name}</button>
                            ))}
                        </div>
                        <div className="demoHeader__Tabs demoHeader__Tabs__Evenly">
                            <Select
                                className='demoHeader__select'
                                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                defaultValue={"District"}
                                onChange={handleDistrictChange}
                                options={districts}
                            />
                            <Select
                                className='demoHeader__select'
                                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                defaultValue={"Block"}
                                options={block}
                                onChange={handleBlockChange}
                            />
                            {tabCheck.academic && (
                                <div className="AcademicDateRange">
                                    <RangePicker
                                        onChange={(e: any) => {
                                            const prepared = fixDateRangeForAttendanceTab(e);
                                            setAcademicDateRange(prepared);
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
            <Dashboard params={
                tabCheck.performance ?
                    { ...geo } :
                    tabCheck.performance_district ?
                        { ...geo } :
                        tabCheck.performance_block ?
                            { ...geo2 }
                            : tabCheck.admin ?
                                { ...geo } :
                                tabCheck.admin_district ?
                                    { ...geo } :
                                    tabCheck.admin_block ?
                                        { ...geo2 } :
                                        tabCheck.academic ?
                                            { ...geo, date_range: academicDateRange } :
                                            tabCheck.academic_district ?
                                                { ...geo } :
                                                tabCheck.academic_block ?
                                                    { ...geo2 } :
                                                    {}
            } />
        </>
    )
}



const mapDispatchToProps = (dispatch: any) => ({
    _toogle: (obj: object) => dispatch(toogleTab(obj)),
    _toogleFilterPage: (id: any) => dispatch(toogleFilter(id)),

})

const mapStateToProps = ({ tab: { current, dashboard } }: any) => ({
    current,
    dashboard
})

export default connect(mapStateToProps, mapDispatchToProps)(DemoHeader)