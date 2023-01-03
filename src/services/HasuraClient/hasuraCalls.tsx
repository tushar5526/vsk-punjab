import generateHasuraAPI from "./hasuraClient";

export const getDashboardTabs = () => {
    const query = {
        query: `query MyQuery {
            tabs(order_by: {id: asc}) {
                id
                name
                dashboard_id
            }
        }`,
    };
    return generateHasuraAPI(query);
};