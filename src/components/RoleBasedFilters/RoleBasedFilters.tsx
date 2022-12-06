import { Select } from 'antd'
import down_arrow from "../../assets/pjb/utils/down_arrow.png"
import { connect } from 'react-redux/es/exports';
import filterUtils from './filters.utils';
import { dummyRoles } from '../../services/parameters';
import { toogleFilter } from '../../redux/TabController/actions';
import * as _ from "lodash"
import filterActions from '../../redux/filters/action';

interface Props {
    roles: {
        designation: any
        geographic_level: any
    },
    filtersPages: any
    _toogleFilterPage: any
    _applyDistrictFilter: any
    _applyClusterFilter: any
    _applyBlockFilter: any
}
const RoleBasedFilters = (props: Props) => {

    const { lodashTypes, getDataFromLodash, getFiltersValidationsBasedOnRole } = filterUtils
    // use geographic_level to get permissons based on the user login
    // using dummyRoles to test functionality
    const { permissions } = getFiltersValidationsBasedOnRole(dummyRoles.STATE)
    // const { permissions, geo } = getFiltersValidationsBasedOnRole(dummyRoles.STATE)


    const districts = getDataFromLodash(lodashTypes.DISTRICT)
    const block = getDataFromLodash(lodashTypes.BLOCK)
    const cluster = getDataFromLodash(lodashTypes.CLUSTER)
    console.log(districts, "districts")

    const handleDistrictChange = (e: any) => {
        props._toogleFilterPage(props.filtersPages.district)
        props._applyDistrictFilter(e)
    }
    const handleBlockChange = (e: any) => {
        props._toogleFilterPage(props.filtersPages.block)
        props._applyBlockFilter(e)
    }
    const handleClusterChange = (e: any) => {
        props._toogleFilterPage(props.filtersPages.cluster)
        props._applyClusterFilter(e)
    }
    if (!props.roles.designation) return <div>Loading....</div>
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
    _toogleFilterPage: (id: any) => dispatch(toogleFilter(id)),
    _applyDistrictFilter: (district: string) => dispatch(filterActions.applyDistrict(district)),
    _applyBlockFilter: (block: string) => dispatch(filterActions.applyBlock(block)),
    _applyClusterFilter: (cluster: string) => dispatch(filterActions.applyCluster(cluster))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoleBasedFilters)