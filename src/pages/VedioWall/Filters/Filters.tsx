import { Button, DatePicker, Popover, Select } from 'antd';
import { FC, useState } from 'react'
import { ClearFilter } from '../../../components/ClearFilter';
import moment from 'moment';
import { applyDateFilter, applyYearFilter } from '../../../redux/VedioWall/actions';
import { connect } from 'react-redux';

interface FilterComponent {
    year: any
    date_range: any
    applyYear: any
    applyDate: any
}
const Filters: FC<FilterComponent> = (props) => {

    const { Option } = Select;

    const undefinedCheck = (arr: any) => {
        if (Array.isArray(arr)) {
            const filtered = arr.filter((i) => i !== undefined);
            return filtered;
        }
    };
    const _width = "200px"

    const _year = [
        { value: "2021-2022", label: "2021-2022" },
        { value: "2022-2023", label: "2022-2023" },
    ]


    const SelectMultiple1 = () => {
        const handleChange = (value: string[]) => {
            if (Array.isArray(value)) {
                props.applyYear(undefinedCheck(value))
            }
        };
        return (
            <div
                style={{
                    width: _width,
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Select
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="Select from list"
                    onChange={handleChange}
                    value={undefinedCheck(props.year)}
                    optionLabelProp="label"
                    className="assesmentClassSelect"
                >
                    {_year.map(({ value, label }: any, i: number) => (
                        <Option key={`${i}${label}${value}`} value={value} label={label}>
                            <div className="demo-option-label-item">{label}</div>
                        </Option>
                    ))}
                </Select>
            </div>
        );
    };

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
    return (
        <div className='Screen2VedioWallFilters'>
            <Popover content={SelectMultiple1}>
                <Button className="multi-select-label">
                    {props?.year.length ? `${props?.year.length} Selected` : "Select Year"}
                </Button>
            </Popover>
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
    applyDate: (e: any) => dispatch(applyDateFilter(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Filters)