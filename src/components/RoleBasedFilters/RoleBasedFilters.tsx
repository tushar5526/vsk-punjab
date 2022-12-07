import { Select } from 'antd'
import down_arrow from "../../assets/pjb/utils/down_arrow.png"
import { connect } from 'react-redux/es/exports';
import filterUtils from './filters.utils';
import { dummyRoles } from '../../services/parameters';
import { toogleFilter } from '../../redux/TabController/actions';
import * as _ from "lodash"
import filterActions from '../../redux/filters/action';
import { useEffect } from 'react';

interface Props {
    roles: {
        designation: any
        geographic_level: any
    },
    filtersPages: any
    _toogleFilterPage: any
    _applyDistrictFilter: any
    _applyClusterFilter: any
    _applyBlockFilter: any,
    selectedDistrict: string,
    selectedBlock: string,
    selectedCluster: string
}
const RoleBasedFilters = (props: Props) => {

    useEffect(() => {

    }, [props])

    const { lodashTypes, getDataFromLodash, getFiltersValidationsBasedOnRole } = filterUtils
    // use geographic_level to get permissons based on the user login
    // using dummyRoles to test functionality
    const { permissions } = getFiltersValidationsBasedOnRole(dummyRoles.STATE)
    // const { permissions, geo } = getFiltersValidationsBasedOnRole(dummyRoles.STATE)


    const districts = getDataFromLodash(lodashTypes.DISTRICT)
    const block = getDataFromLodash(lodashTypes.BLOCK, props.selectedDistrict)
    const cluster = getDataFromLodash(lodashTypes.CLUSTER, props.selectedBlock)

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
                value={props.selectedDistrict || "District"}
                onChange={handleDistrictChange}
                options={districts}
                disabled={permissions?.district}
            />
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                value={props.selectedBlock || "Block"}
                onChange={handleBlockChange}
                options={block}
                disabled={permissions?.block || !props.selectedDistrict}
            />
            <Select
                className='demoHeader__select'
                suffixIcon={<img alt="dropdown" className='demoHeader__dropdown--suffix' src={down_arrow} />}
                onChange={handleClusterChange}
                options={cluster}
                value={props.selectedCluster || "Cluster"}
                disabled={permissions?.cluster || !props.selectedDistrict || !props.selectedBlock}
            />
        </>
    )
}

const mapStateToProps = ({ session: { roles }, filters: { district, block, cluster } }: any) => ({
    roles,
    selectedDistrict: district,
    selectedBlock: block,
    selectedCluster: cluster
})

const mapDispatchToProps = (dispatch: any) => ({
    _toogleFilterPage: (id: any) => dispatch(toogleFilter(id)),
    _applyDistrictFilter: (district: string) => dispatch(filterActions.applyDistrict(district)),
    _applyBlockFilter: (block: string) => dispatch(filterActions.applyBlock(block)),
    _applyClusterFilter: (cluster: string) => dispatch(filterActions.applyCluster(cluster))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoleBasedFilters)