import { Select } from "antd"
import { useState } from 'react';
import down_arrow from "../../assets/pjb/utils/down_arrow.png"
import { getDisabled } from "../../services/parameters";


interface Props {
    setDistrict: Function,
    setBlock: Function,
    setCluster: Function,
}
const DemoHeader = ({ setBlock, setCluster, setDistrict }: Props) => {
    const [active, setActive] = useState<number>(1)
    const disabled = getDisabled()
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
    const option2 = [
        {
            value: 'jack',
            label: 'Jack',
        },
    ]
    const option3 = [
        {
            value: 'jack',
            label: 'Jack',
        },
    ]

    const handleChange = (e: any) => {
        console.log(e, "handle change")
    }
    const handleDistrictsChange = (e: any) => {
        setDistrict(e)
    }

    console.log(disabled, "disabled")
    return (
        <>
            <div className="demoHeader mb">
                <div className="demoHeader__span demoHeader__spaceBetween">
                    <button onClick={() => setActive(1)} className={`demoHeader__button ${active === 1 && "demoHeader__button--active"}`}>Performace</button>
                    <button onClick={() => setActive(2)} className={`demoHeader__button ${active === 2 && "demoHeader__button--active"}`} >Admin Data</button>
                    <button onClick={() => setActive(3)} className={`demoHeader__button ${active === 3 && "demoHeader__button--active"}`} >Academic Data</button>
                </div>
                <div className='demoHeader__span demoHeader__center'>
                    <Select
                        className='demoHeader__select'
                        defaultValue={districts[0].value}
                        suffixIcon={<img className='demoHeader__dropdown--suffix' src={down_arrow} />}
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={districts}
                    />
                </div>
            </div>
            <div className='demoHeader2 mb'>
                <div className='demoHeader2__span1'>
                    <button className='demoHeader2__button'>Attendance</button>
                    <button className='demoHeader2__button'>Mid-Day Meal</button>
                    <button className='demoHeader2__button'>Mentoring</button>
                    <button className='demoHeader2__button'>Infrastructure</button>
                    <button className='demoHeader2__button'>Civil Work</button>
                    <button className='demoHeader2__button'>Finance</button>
                </div>
                <div className='demoHeader2__span2'>
                    <Select
                        className='demoHeader__select'
                        defaultValue="District"
                        suffixIcon={<img className='demoHeader__dropdown--suffix' src={down_arrow} />}
                        onChange={handleDistrictsChange}
                        disabled={disabled.district}
                        options={districts}
                    />
                    <Select
                        className='demoHeader__select'
                        defaultValue="Block"
                        suffixIcon={<img className='demoHeader__dropdown--suffix' src={down_arrow} />}
                        onChange={handleChange}
                        options={option2}
                        disabled={disabled.block}



                    />
                    <Select
                        className='demoHeader__select'
                        defaultValue="Cluster"
                        suffixIcon={<img className='demoHeader__dropdown--suffix' src={down_arrow} />}
                        onChange={handleChange}
                        disabled={disabled.cluster}
                        options={option3}
                    />
                </div>
            </div>
        </>
    )
}

export default DemoHeader