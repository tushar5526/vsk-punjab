import types from "./types";

const applyDistrict = (district: string) => ({
  type: types.APPLY_DISTRICT_FILTER,
  payload: district,
});

const applyBlock = (block: string) => ({
  type: types.APPLY_BLOCK_FILTER,
  payload: block,
});

const applyCluster = (cluster: string) => ({
  type: types.APPLY_CLUSTER_FILTER,
  payload: cluster,
});

const filterActions = {
  applyDistrict,
  applyBlock,
  applyCluster,
};

export default filterActions;
