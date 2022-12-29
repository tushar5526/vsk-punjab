import location from "./district_block_cluster.json";
import * as _ from "lodash";

const lodashTypes = {
  DISTRICT: "DISTRICT",
  BLOCK: "BLOCK",
  CLUSTER: "CLUSTER",
};

const getDataFromLodash = (type: string, cascade?: any) => {
  switch (type) {
    case lodashTypes.DISTRICT:
      return _.uniqBy(location, "District").map((item) => ({
        value: item.District,
        label: item.District,
      }));
    case lodashTypes.BLOCK:
      return _.uniqBy(location, "Block")
        .filter((item) => cascade === item.District)
        .map((item) => ({
          value: item.Block,
          label: item.Block,
        }));
    case lodashTypes.CLUSTER:
      return _.uniqBy(location, "Cluster")
        .filter((item) => item.Block == cascade)
        .map((item) => ({
          value: item.Cluster,
          label: item.Cluster,
        }));
    default:
      break;
  }
};

const getDistrictBasedOnBlock = (block: any) => {
  const filtered = location.filter((item) => item.Block === block);
  console.log(filtered, "filtered");
};

export default {
  lodashTypes,
  getDataFromLodash,
  getDistrictBasedOnBlock,
};
