import { dummyRoles } from "../../services/parameters";

import location from "./district_block_cluster.json";
import * as _ from "lodash";

const getFiltersValidationsBasedOnRole = (role: any) => {
  switch (role) {
    case dummyRoles.STATE:
      // Here false represents input<disable=false>
      // So boolean values will work in opposite way
      return {
        permissions: {
          district: false,
          block: false,
          cluster: false,
        },
        type: "State Level",
      };

    case dummyRoles.DISTRICT:
      return {
        permissions: {
          district: true,
          block: false,
          cluster: false,
        },
        geo: "SOME DISTRICT",
        type: "District Level",
      };
    case dummyRoles.BLOCK:
      return {
        permissions: {
          district: true,
          block: true,
          cluster: false,
        },
        geo: "SOME BLOCK",
        type: "Block Level",
      };
    case dummyRoles.CLUSTER:
      return {
        permissions: {
          district: true,
          block: true,
          cluster: true,
        },
        district: "SOME CLUSTER",
        type: "Cluster Level",
      };
    default:
      return {
        district: false,
        block: false,
        cluster: false,
      };
  }
};

const lodashTypes = {
  DISTRICT: "DISTRICT",
  BLOCK: "BLOCK",
  CLUSTER: "CLUSTER",
};

const getDataFromLodash = (type: string, cascade?: string) => {
  switch (type) {
    case lodashTypes.DISTRICT:
      return _.uniqBy(location, "District").map((item) => ({
        value: item.District,
        label: item.District,
      }));
    case lodashTypes.BLOCK:
      return _.uniqBy(location, "Block")
        .filter((item) => item.District === cascade)
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

export default {
  getFiltersValidationsBasedOnRole,
  lodashTypes,
  getDataFromLodash,
};
