import { DatePicker, Select } from "antd"
import down_arrow from "../../../assets/pjb/utils/down_arrow.png"
import { toogleFilter, toogleTab } from '../../../redux/TabController/actions';
import { connect } from "react-redux/es/exports"
import moment from "moment";
import Dashboard from "../../Dashboard/Dashboard";
import filtersUtils from "../../../components/RoleBasedFilters/filters.utils";
import { useEffect, useState } from "react";
import { ClearFilter } from "../../../components/ClearFilter";
import { handleDistrictLink, handleBlockLink, linkingTypes } from '../../linking';
import { fixMomentDateForMis } from "../../VedioWall/utils";


interface USER {
    Location: any
    Role: any
    UserType: any
    uniqueCode: any
}


const DemoHeader = ({ tabs, _toogle, current, _toogleFilterPage, dashboard }: any) => {


    const [geoState, setGeoState] = useState<any>({
        d: localStorage.getItem(linkingTypes.USER_DEFAULT_DISTRICT) || "District",
        b: localStorage.getItem(linkingTypes.USER_DEFAULT_BLOCK) || "Block"
    })

    const [performanceParams, setPerformanceParams] = useState<{ single_date: any }>({
        single_date: moment()
    })


    const [rangeState, setRangeState] = useState<any>([moment(), moment().add(1, "month")]);
    const onClearFilterPress = () => {
        setGeoState({
            d: "District",
            b: "Block"
        })


        setGeo({ district: [] })
        setGeo2({ block: [] })
        if (current === 0) {
            _toogleFilterPage(_dash.performance)
        } else if (current === 1) {
            setAcademicParams({
                date_range: moment(),
                year: [],
                // class: [],
                // subject: []
            })
            _toogleFilterPage(_dash.academic)
        } else if (current === 2) {
            _toogleFilterPage(_dash.admin)

        }
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
    const regex = /.* - /gm;
    const linkFilters = (user: USER) => {
        if (user.Role === _role.District) {
            _toogleFilterPage(_dash.performance_block)
            handleDistrictLink(user.Location)
            setGeo({ district: [user.Location] })
            _toogleFilterPage(_dash.performance_district)
        } else if (user.Role === _role.Block) {
            const districtByBlock = getDistrictBasedOnBlock(user.Location)
            handleBlockLink(String(user.Location).replace(regex, ""), districtByBlock)
            setGeo({ district: [districtByBlock] })
            setGeo2({ block: [String(user.Location).replace(regex, "")] })
            _toogleFilterPage(_dash.performance_block)
        }
    }
    const { RangePicker } = DatePicker;

    const [academicParams, setAcademicParams] = useState<any>({
        date_range: [],
        year: [],
        // class: [],
        // subject: []
    })

    const _academicValues = {
        year: [
            { label: "2021-2022", value: "2021-2022" },
            { label: "2022-2023", value: "2022-2023" }
        ],
        class: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "7", value: "7" },
            { label: "8", value: "8" },
            { label: "9", value: "9" },
            { label: "10", value: "10" },
            { label: "11", value: "11" },
            { label: "12", value: "12" }
        ],
        subject: [
            { label: "Accounts", value: "Accounts" },
            { label: "Biology", value: "Biology" },
            { label: "Business Studies", value: "Business Studies" },
            { label: "Chemistry", value: "Chemistry" },
            { label: "Economics", value: "Economics" },
            { label: "English", value: "English" },
            { label: "Hindi", value: "Hindi" },
            { label: "Math", value: "Math" },
            { label: "Physics", value: "Physics" },
            { label: "Science", value: "Science" },
            { label: "Social Science", value: "Social Science" },
        ]
    }

    const handleDistrictChange = async (e: any) => {
        setGeoState({ ...geoState, d: e })
        setGeo({ district: [e] })
        if (current === 0) _toogleFilterPage(_dash.performance_district)
        else if (current === 1) _toogleFilterPage(_dash.academic_district)
        else if (current === 2) _toogleFilterPage(_dash.admin_district)
    }
    const handleBlockChange = (e: any) => {
        setGeoState({ ...geoState, b: e })
        setGeo2({ block: [e] })
        if (current === 0) _toogleFilterPage(_dash.performance_block)
        else if (current === 1) _toogleFilterPage(_dash.academic_block)
        else if (current === 2) _toogleFilterPage(_dash.admin_block)
    }
    const { lodashTypes, getDataFromLodash, getDistrictBasedOnBlock } = filtersUtils


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
        }
    }
    useEffect(() => {
        extractUser()
    }, [])





    return (
        <>
            <div className="demoHeader mb">
                <div>
                    <div className="demoHeader__span demoHeader__spaceBetween">
                        <div className="demoHeader__Tabs demoHeader__Tabs__Between">
                            {tabs?.map(({ dashboard_id, name }: any, idx: number) => (
                                <button
                                    key={`${dashboard_id}${name}${idx}`}
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
                                value={geoState?.d}
                                onChange={handleDistrictChange}
                                options={districts}
                                id="district"
                            />
                            <Select
                                className='demoHeader__select'
                                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                value={geoState?.b}
                                options={block}
                                onChange={handleBlockChange}
                                id="block"
                            />

                            {(tabCheck.performance || tabCheck.performance_block || tabCheck.performance_district || tabCheck.performance_cluster) && (
                                <DatePicker
                                    defaultValue={performanceParams.single_date}
                                    onChange={(e: any) => setPerformanceParams({ single_date: e })} />
                            )}

                            {(tabCheck.academic || tabCheck.academic_block || tabCheck.academic_district) && (
                                <>
                                    <div className="AcademicDateRange">
                                        <RangePicker
                                            defaultValue={rangeState}
                                            onChange={(e: any) => {
                                                setRangeState(e)
                                                const date_range = `${fixMomentDateForMis(e[0])}~${fixMomentDateForMis(e[0])}`;
                                                setAcademicParams({ ...academicParams, date_range });
                                            }}
                                        />
                                    </div>

                                    <Select
                                        className='demoHeader__select'
                                        suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                        value={academicParams.year[0] || "Year"}
                                        options={_academicValues.year}
                                        onChange={(e) => {
                                            setAcademicParams({
                                                ...academicParams,
                                                year: [e],
                                            })
                                        }}
                                    />
                                    {/* <Select
                                        className='demoHeader__select'
                                        suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                        value={academicParams.class[0] || "Class"}
                                        options={_academicValues.class}
                                        onChange={(e) => {
                                            setAcademicParams({
                                                ...academicParams,
                                                class: [e],

                                            })
                                        }}
                                    /> */}
                                    {/* <Select
                                        className='demoHeader__select'
                                        suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                                        value={academicParams.subject[0] || "Subject"}
                                        options={_academicValues.subject}
                                        onChange={(e) => {
                                            setAcademicParams({
                                                ...academicParams,
                                                subject: [e]
                                            })
                                        }}
                                    /> */}
                                </>
                            )}
                            <ClearFilter handleClearFilter={() => onClearFilterPress()} />
                        </div>
                    </div>

                </div>
            </div>
            <Dashboard params={
                tabCheck.performance ?
                    { ...geo, ...performanceParams } :
                    tabCheck.performance_district ?
                        { ...geo, ...performanceParams } :
                        tabCheck.performance_block ?
                            { ...geo2, ...performanceParams }
                            : tabCheck.admin ?
                                { ...geo } :
                                tabCheck.admin_district ?
                                    { ...geo } :
                                    tabCheck.admin_block ?
                                        { ...geo2 } :
                                        tabCheck.academic ?
                                            { ...geo, ...academicParams } :
                                            tabCheck.academic_district ?
                                                { ...geo, ...academicParams } :
                                                tabCheck.academic_block ?
                                                    { ...geo2, ...academicParams } :
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