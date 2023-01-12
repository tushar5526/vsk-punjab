import { DatePicker, Select } from 'antd';
import { FC, useState, useEffect } from 'react'
import { ClearFilter } from '../../../components/ClearFilter';
import moment from 'moment';
import { applyDateFilter, applyYearFilter, pushMisYearToState, setLoadingForMapRender } from '../../../redux/VedioWall/actions';
import { connect } from 'react-redux';
import { getAcademicYearList, parseYearListForMetabase } from '../utils';

interface Props {
    year: any
    date_range: any
    applyYear: any
    applyDate: any
    pushMisYear: any
    setLoading: any
}
const Filters: FC<Props> = (props) => {

    const [misYearList, setMisYearList] = useState<any>(null)
    const [metabaseYearList, setMetabaseYearList] = useState<any>(null)





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

    const { RangePicker } = DatePicker;

    const getAcademicYear = async () => {
        const _misYearList = await getAcademicYearList()
        const _parsedMetabaseYearList = await parseYearListForMetabase(_misYearList)
        console.log(_misYearList, _parsedMetabaseYearList, "parsed")
        setMetabaseYearList(_parsedMetabaseYearList)
        setMisYearList(_misYearList)
    }

    useEffect(() => {
        getAcademicYear()
    }, [])
    const trimStringForMis = (e: string) => {
        return `${String(e).substring(0, 5)}${String(e).substring(7)}`
    }

    const filterMisYearItem = (e: string) => {
        return misYearList.filter(({ Year }: any) => Year === trimStringForMis(e))[0]?.AccYearCode
    }
    return (
        <div className='Screen2VedioWallFilters'>
            <Select
                options={metabaseYearList}
                value={props.year[0] || "Academic Year"}
                onChange={(e: string) => {
                    props.setLoading(true)
                    props.applyYear([e])
                    props.pushMisYear(filterMisYearItem(e))
                }}
            />
            <div className="AcademicDateRange">
                <RangePicker
                    onChange={(e: any) => {
                        props.applyDate(fixDateRangeForAttendanceTab(e));
                    }}
                />
            </div>
            <ClearFilter handleClearFilter={() => window.location.reload()} />
        </div>
    )
}
const mapStateToProps = ({ vedio_wall: { year, date_range } }: any) => ({
    year,
    date_range,
})


const mapDispatchToProps = (dispatch: any) => ({
    applyYear: (e: any) => dispatch(applyYearFilter(e)),
    applyDate: (e: any) => dispatch(applyDateFilter(e)),
    pushMisYear: (e: any) => dispatch(pushMisYearToState(e)),
    setLoading: (e: any) => dispatch(setLoadingForMapRender(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Filters)