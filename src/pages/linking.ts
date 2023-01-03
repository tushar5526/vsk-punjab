export const linkingTypes = {
  USER_DEFAULT_DISTRICT: "USER_DEFAULT_DISTRICT",
  USER_DEFAULT_BLOCK: "USER_DEFAULT_BLOCK",
};

export const handleDistrictLink = (e: any) => {
  localStorage.setItem(linkingTypes.USER_DEFAULT_DISTRICT, e);
};

export const handleBlockLink = (e1: any, e2: any) => {
  localStorage.setItem(linkingTypes.USER_DEFAULT_BLOCK, e1);
  localStorage.setItem(linkingTypes.USER_DEFAULT_DISTRICT, e2);
};
