import AXIOS from "axios";
import Parameters from "./parameters";
function getPublicInstance() {
  return AXIOS.create({
    // @ts-ignore
    accept: "application/json",
    baseURL: Parameters.ApiUrl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

const getLoginInstance = () => {
  return AXIOS.create({
    // @ts-ignore
    accept: "application/json",
    baseURL: "http://112.196.9.114:85/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

function getProtectedInstance() {
  let user = localStorage.getItem("user") as string;
  let token = "";
  if (user) {
    token = JSON.parse(user).token;
  } else {
    window.location.href = "/login";
  }
  return AXIOS.create({
    // @ts-ignore
    accept: "application/json",
    baseURL: Parameters.ApiUrl,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}

function handleErrors(error: any) {
  let message = "Something went wrong!!";
  if (error && error.response && error.response.data) {
    const data = error.response.data;
    if (data.error) {
      message = data.error;
    } else if (data.message) {
      const keys = Object.keys(data.message);
      if (keys.length) {
        message = data.message[keys[0]];
      }
    }
  }
  return message;
}

async function self() {
  const instance = getProtectedInstance();
  return await instance.get("/api/self");
}

async function Login(params: URLSearchParams) {
  const instance = getLoginInstance();
  params.append("key", key);
  return await instance.post(
    "/WebService/vidya-samiksha-login-authentication.asmx/UserAuthentication",
    params
  );
}

const key = "8A574794-770C-4D2B-858F-429C91EE8A95";

async function EncryptUserNameOrPasswordForMIS(field: any) {
  const instance = getLoginInstance();
  const params = new URLSearchParams();
  params.append("values", field);
  params.append("key", key);
  return await instance.post(
    "/WebService/vidya-samiksha-login-authentication.asmx/encryptedMethod",
    params
  );
}
async function getDistrictMarkerData(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_master_latlong", params);
}
async function getStudentAssesmentDistrict1Grade48(params: any) {
  const instance = getPublicInstance();
  return await instance.post("/query/district_assessment_4to8", params);
}

const API_SERVICE = {
  // login,
  Login,
  self,
  handleErrors,
  getDistrictMarkerData,
  getStudentAssesmentDistrict1Grade48,
  EncryptUserNameOrPasswordForMIS,
};
export default API_SERVICE;
