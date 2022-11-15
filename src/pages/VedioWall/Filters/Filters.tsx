import { Select } from "antd"
import "./index.css"

import down_arrow from "../../../assets/pjb/utils/down_arrow.png"

const Filters = () => {

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
    return (
        <div className='VedioWall__filters mb'>
            <div className="VedioWall__filtersElementContainer">
                <p className="VedioWall__filtersElementContainerHeading">Academic Year</p>
                <Select
                    className='VedioWall__filtersElement'
                    defaultValue={districts[0].value}
                    suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                    onChange={() => { }}
                    options={districts}
                />
            </div>
            <div className="VedioWall__filtersElementContainer">
                <p className="VedioWall__filtersElementContainerHeading">Date</p>
                <Select
                    className='VedioWall__filtersElement'
                    defaultValue={districts[0].value}
                    suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                    onChange={() => { }}
                    options={districts}
                />
            </div>
        </div>
    )
}

export default Filters