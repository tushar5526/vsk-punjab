const Parameters = {
  ApiUrl: "https://vskhp.in/bq-query",
  applicationId: "f0ddb3f6-091b-45e4-8c0f-889f89d4f5da",
};
export const roles = {
  district: "District",
  block: "Block",
  cluster: "Cluster",
  state: "State",
};

export const getDisabled = () => {
  const _role = "District";
  // const _role = "Block";
  // const _role = "State";
  // const _role = "Cluster";

  const obj = {
    district: false,
    block: false,
    cluster: false,
  };

  if (_role === roles.district) {
    obj.district = true;
  }

  if (_role === roles.block || _role === roles.cluster) {
    obj.district = true;
    obj.block = true;
  }

  return obj;
};

export default Parameters;
