import { DatePicker, Select } from 'antd';
import { FC, useState, useEffect } from 'react'
import { ClearFilter } from '../../../components/ClearFilter';
import { applyDateFilter, applyYearFilter, pushMisYearToState, setLoadingForMapRender } from '../../../redux/VedioWall/actions';
import { connect } from 'react-redux';
import { getAcademicYearList, parseYearListForMetabase, fixMomentDateForMis } from '../utils';
import moment from 'moment';

interface Props {
    year: any
    single_date: any
    applyYear: any
    applyDate: any
    pushMisYear: any
    setLoading: any
}
const Filters: FC<Props> = (props) => {

    const [misYearList, setMisYearList] = useState<any>(null)
    const [metabaseYearList, setMetabaseYearList] = useState<any>(null)



    const getAcademicYear = async () => {
        const _misYearList = await getAcademicYearList()
        const _parsedMetabaseYearList = await parseYearListForMetabase(_misYearList)
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
                <DatePicker
                    defaultValue={moment()}
                    onChange={(e: any) => {
                        props.applyDate(fixMomentDateForMis(e));
                    }} />

            </div>
            <ClearFilter handleClearFilter={() => window.location.reload()} />
        </div>
    )
}
const mapStateToProps = ({ vedio_wall: { year, single_date } }: any) => ({
    year,
    single_date,
})


const mapDispatchToProps = (dispatch: any) => ({
    applyYear: (e: any) => dispatch(applyYearFilter(e)),
    applyDate: (e: any) => dispatch(applyDateFilter(e)),
    pushMisYear: (e: any) => dispatch(pushMisYearToState(e)),
    setLoading: (e: any) => dispatch(setLoadingForMapRender(e)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Filters)