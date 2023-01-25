import location from "./district_block_cluster.json";
import * as _ from "lodash";

const lodashTypes = {
  DISTRICT: "DISTRICT",
  BLOCK: "BLOCK",
  CLUSTER: "CLUSTER",
};

const locationToFilterBlock = _.uniqBy(location, "District").map(
  ({ Block, District }) => ({
    Block,
    District,
  })
);

const getDataFromLodash = (type: string, cascade?: any) => {
  switch (type) {
    case lodashTypes.DISTRICT:
      return _.uniqBy(location, "District").map((item) => ({
        value: item.District,
        label: item.District,
      }));
    case lodashTypes.BLOCK:
      return _.uniqBy(location, "Block")
        .filter((item) => cascade.includes(item.District))
        .map((item) => ({
          value: item.Block,
          label: item.Block,
        }));
    case lodashTypes.CLUSTER:
      return _.uniqBy(location, "Cluster")
        .filter((item) => item.Block === cascade)
        .map((item) => ({
          value: item.Cluster,
          label: item.Cluster,
        }));
    default:
      break;
  }
};

const getDistrictBasedOnBlock = (block: any) => {
  return _.filter(locationToFilterBlock, ({ Block }) => {
    return String(block).includes(Block);
  })[0].District;
};

const filterUtils = {
  lodashTypes,
  getDataFromLodash,
  getDistrictBasedOnBlock,
};
export default filterUtils;
