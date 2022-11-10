import { Select } from "antd"
import { useState } from 'react';
import down_arrow from "../../assets/pjb/utils/down_arrow.png"
import { getDisabled } from "../../services/parameters";
import { toogleTab } from '../../redux/TabController/actions';
import { connect } from "react-redux/es/exports"


interface Props {
    toogleTab: Function
    current: number
}
const DemoHeader = (props: Props) => {
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
            <div className="demoHeader mb">
                <div className="demoHeader__span demoHeader__spaceBetween">
                    <button onClick={() => props.toogleTab(1)} className={`demoHeader__button ${props.current === 1 && "demoHeader__button--active"}`}>Performace</button>
                    <button onClick={() => props.toogleTab(2)} className={`demoHeader__button ${props.current === 2 && "demoHeader__button--active"}`} >Admin Data</button>
                    <button onClick={() => props.toogleTab(3)} className={`demoHeader__button ${props.current === 3 && "demoHeader__button--active"}`} >Academic Data</button>
                </div>
                <div className='demoHeader__span demoHeader__center'>
                    <Select
                        className='demoHeader__select'
                        defaultValue={districts[0].value}
                        suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={districts}
                    />
                </div>
            </div>
        </>
    )
}


const mapDispatchToProps = (dispatch: any) => ({
    toogleTab: (currentTab: number) => dispatch(toogleTab(currentTab)),
});
const mapStateToProps = ({ tab: { current } }: any) => ({
    current
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoHeader)