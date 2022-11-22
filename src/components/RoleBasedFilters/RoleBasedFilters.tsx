import { Select } from 'antd'
import down_arrow from "../../assets/pjb/utils/down_arrow.png"
import { useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import { getFiltersValidationsBasedOnRole } from './filters.utils';
import { dummyRoles } from '../../services/parameters';


const RoleBasedFilters = ({ roles: { designation, geographic_level } }: any) => {
    // use geographic_level to get permissons based on the user login
    // using dummyRoles to test functionality
    const { permissions } = getFiltersValidationsBasedOnRole(dummyRoles.STATE)
    // const { permissions, geo } = getFiltersValidationsBasedOnRole(dummyRoles.STATE)


    const districts = [
        {
            value: "SIRMAUR",
            label: "SIRMAUR",
        },
        {
            value: "CHAMBA",
            label: "CHAMBA",
        },
        {
            value: "UNA",
            label: 'UNA',
        },
        {
            value: "KULLU",
            label: 'KULLU',
        },
        {
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

    if (!designation) return <div>Loading....</div>
    return (
        <>
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                defaultValue={districts[0].value}
                onChange={handleChange}
                options={districts}
                disabled={permissions?.district}
            />
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                defaultValue={districts[0].value}
                onChange={handleChange}
                options={districts}
                disabled={permissions?.block}
            />
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                defaultValue={districts[0].value}
                onChange={handleChange}
                options={districts}
                disabled={permissions?.cluster}
            />
        </>
    )
}

const mapStateToProps = ({ session: { roles } }: any) => ({
    roles
})


export default connect(mapStateToProps)(RoleBasedFilters)