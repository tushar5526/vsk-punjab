import { Select } from 'antd'
import down_arrow from "../../assets/pjb/utils/down_arrow.png"
import { connect } from 'react-redux/es/exports';
import { getFiltersValidationsBasedOnRole } from './filters.utils';
import { dummyRoles } from '../../services/parameters';
import { toogleFilter } from '../../redux/TabController/actions';


const RoleBasedFilters = ({ roles: { designation, geographic_level }, filtersPages, _toogleFilterPage }: any,) => {

    // use geographic_level to get permissons based on the user login
    // using dummyRoles to test functionality
    const { permissions } = getFiltersValidationsBasedOnRole(dummyRoles.STATE)
    // const { permissions, geo } = getFiltersValidationsBasedOnRole(dummyRoles.STATE)

    const districts = [
        {
            value: "BARNALA",
            label: "BARNALA",
        },
    ]

    const block = [
        {
            value: "SEHNA",
            label: "SEHNA",
        },
    ]

    const cluster = [
        {
            value: "BAKHATGARH",
            label: "BAKHATGARH",
        },
    ]
    const handleDistrictChange = (e: any) => {
        _toogleFilterPage(filtersPages.district)
    }
    const handleBlockChange = (e: any) => {
        _toogleFilterPage(filtersPages.block)

    }
    const handleClusterChange = (e: any) => {
        _toogleFilterPage(filtersPages.cluster)
    }
    if (!designation) return <div>Loading....</div>
    return (
        <>
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                defaultValue={"District"}
                onChange={handleDistrictChange}
                options={districts}
                disabled={permissions?.district}
            />
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                defaultValue={"Block"}
                onChange={handleBlockChange}
                options={block}
                disabled={permissions?.block}
            />
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                defaultValue={"Cluster"}
                onChange={handleClusterChange}
                options={cluster}
                disabled={permissions?.cluster}
            />
        </>
    )
}

const mapStateToProps = ({ session: { roles } }: any) => ({
    roles
})

const mapDispatchToProps = (dispatch: any) => ({
    _toogleFilterPage: (id: any) => dispatch(toogleFilter(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoleBasedFilters)