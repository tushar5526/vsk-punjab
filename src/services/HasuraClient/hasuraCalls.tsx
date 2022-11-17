import generateHasuraAPI from "./hasuraClient";

export const getDashboardTabs = () => {
    const query = {
        query: `query MyQuery {
            tabs {
                id
                name
                dashboard_id
            }
        }`,
    };
    return generateHasuraAPI(query);
};