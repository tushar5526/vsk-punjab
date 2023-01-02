import { Button, Popover, Select } from 'antd';
import { useState } from 'react'
import filtersUtils from '../../../components/RoleBasedFilters/filters.utils';
import down_arrow from "../../../assets/pjb/utils/down_arrow.png"
import { ClearFilter } from '../../../components/ClearFilter';

const Filters = () => {

    const { Option } = Select;
    const [geo, setGeo] = useState<any>({
        district: [],
    })
    const [geo2, setGeo2] = useState<any>({
        block: [],
    })

    const [quarter, setQuarter] = useState<any>({
        quarter: []
    })

    const [year, setYear] = useState<any>({
        year: []
    })
    const { lodashTypes, getDataFromLodash } = filtersUtils

    const districts = getDataFromLodash(lodashTypes.DISTRICT)
    const block = getDataFromLodash(lodashTypes.BLOCK, geo.district)
    const undefinedCheck = (arr: any) => {
        if (Array.isArray(arr)) {
            const filtered = arr.filter((i) => i !== undefined);
            return filtered;
        }
    };
    const handleDistrictChange = async (e: any) => {
        setGeo({ district: e })
        console.log(e)
    }

    const handleBlockChange = (e: any) => {
        setGeo2({ block: e })
        console.log(e)
    }
    const _width = "200px"


    const SelectMultiple1 = () => {
        const handleChange = (value: string[]) => {
            if (Array.isArray(value)) {
                setQuarter({ quarter: undefinedCheck(value) })
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
                    value={undefinedCheck(quarter?.quarter)}
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

    const _quarter = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" }
    ]

    const _year = [
        { value: "2021-2022", label: "2021-2022" },
        { value: "2022-2023", label: "2022-2023" },
    ]
    const SelectMultiple2 = () => {
        const handleChange = (value: string[]) => {
            if (Array.isArray(value)) {
                setYear({ year: undefinedCheck(value) })
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
                    value={undefinedCheck(year?.year)}
                    optionLabelProp="label"
                    className="assesmentClassSelect"
                >
                    {_quarter.map(({ label, value }, i: number) => (
                        <Option key={`${i}${label}${value}`} value={value} label={label}>
                            <div className="demo-option-label-item">{label}</div>
                        </Option>
                    ))}
                </Select>
            </div>
        );
    };
    return (
        <div className='Screen2VedioWallFilters'>
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
            <Popover content={SelectMultiple1}>
                <Button className="multi-select-label">
                    Select Year
                </Button>
            </Popover>
            <Popover content={SelectMultiple2}>
                <Button className="multi-select-label">
                    Select Quarter
                </Button>
            </Popover>
            <ClearFilter />
        </div>
    )
}

export default Filters