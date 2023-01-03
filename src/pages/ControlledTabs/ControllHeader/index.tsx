import { DatePicker, Select } from "antd"
import down_arrow from "../../../assets/pjb/utils/down_arrow.png"
import { toogleFilter, toogleTab } from '../../../redux/TabController/actions';
import { connect } from "react-redux/es/exports"
import moment from "moment";
import Dashboard from "../../Dashboard/Dashboard";
import filtersUtils from "../../../components/RoleBasedFilters/filters.utils";
import { useEffect, useState } from "react";


interface USER {
    Location: any
    Role: any
    UserType: any
    uniqueCode: any
}


const DemoHeader = ({ tabs, _toogle, current, _toogleFilterPage, dashboard }: any) => {
    const handleChange = (e: any) => {
        console.log(e, "handle change")
    }
    const _dash = {
        performance: 26,
        performance_block: 60,
        performance_cluster: 34,
        performance_district: 59,
        admin: 25,
        admin_block: 62,
        admin_cluster: 31,
        admin_district: 61,
        academic: 27,
        academic_cluster: 36,
        academic_district: 63,
        academic_block: 64
    }
    const [geo, setGeo] = useState<any>({
        district: [],
    })
    const [geo2, setGeo2] = useState<any>({
        block: [],
    })

    const _role = {
        State: "State",
        District: "District",
        Block: "Block"
    }
    const linkFilters = (user: USER) => {
        if (user.Role === _role.District) {
            setGeo({ district: [user.Location] })
            _toogleFilterPage(_dash.performance_district)
        } else if (user.Role === _role.Block) {
            setGeo2({ district: [user.Location] })
            _toogleFilterPage(_dash.performance_block)
        }
    }
    const { RangePicker } = DatePicker;
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
        else if (current === 2) _toogleFilterPage(_dash.academic_block)
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

    const extractUser = async () => {
        try {
            const user = localStorage.getItem("user") as any
            if (user) {
                linkFilters(JSON.parse(user))
            } else {
                if (user) linkFilters(user)
            }
        } catch (error) {
            // Relative error handling 
        } finally {
            console.log(geo, geo2, "setiigs")
        }
    }
    useEffect(() => {
        extractUser()
    }, [])
    return (
        <>
            <div className="demoHeader mb">
                {/* <div className="demoHeader__DateSelector mb">
                    <DatePicker
                        suffixIcon={
                            <img alt="dropdown"
                                className='demoHeader__dropdown--suffix'
                                src={down_arrow} />
                        }
                        onChange={handleChange} />
                </div> */}
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
                                defaultValue={geo?.district[0] || "District"}
                                onChange={handleDistrictChange}
                                options={districts}
                            />
                            <Select
                                className='demoHeader__select'
                                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                defaultValue={geo2?.block[0] || "Block"}
                                options={block}
                                onChange={handleBlockChange}
                            />
                            {(tabCheck.academic || tabCheck.academic_block || tabCheck.academic_district) && (
                                <>
                                    <div className="AcademicDateRange">
                                        <RangePicker
                                            onChange={(e: any) => {
                                                const prepared = fixDateRangeForAttendanceTab(e);
                                                setAcademicDateRange(prepared);
                                            }}
                                        />
                                    </div>

                                    <Select
                                        className='demoHeader__select'
                                        suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                        defaultValue={"Year"}
                                    />
                                    <Select
                                        className='demoHeader__select'
                                        suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                        defaultValue={"Assesment"}
                                    />
                                    <Select
                                        className='demoHeader__select'
                                        suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                        defaultValue={"Class"}
                                    />
                                    <Select
                                        className='demoHeader__select'
                                        suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                        defaultValue={"Subject"}
                                    />
                                </>
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
                                                { ...geo, date_range: academicDateRange } :
                                                tabCheck.academic_block ?
                                                    { ...geo, date_range: academicDateRange } :
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