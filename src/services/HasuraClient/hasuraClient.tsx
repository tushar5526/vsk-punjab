import API_SERVICE from "../api-service";

const HASURA_URL = "http://157.245.107.167:8888/v1/graphql"

const generateHasuraAPI = async (query: any) => {


    return fetch(HASURA_URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': 'Asdf@1234'
        },
        body: JSON.stringify(query)
    }).then((res: any) => res.json())
        .catch((err: any) => API_SERVICE.handleErrors(err))
};

export default generateHasuraAPI