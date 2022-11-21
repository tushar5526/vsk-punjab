import { Select } from 'antd'
import down_arrow from "../../assets/pjb/utils/down_arrow.png"

const RoleBasedFilters = () => {
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
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                defaultValue={districts[0].value}
                onChange={handleChange}
                options={districts}
            />
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                defaultValue={districts[0].value}
                onChange={handleChange}
                options={districts}




            />
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                defaultValue={districts[0].value}
                onChange={handleChange}
                options={districts}
            />
        </>
    )
}

export default RoleBasedFilters