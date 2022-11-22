import { getUserFromLS, getRolesFromLS } from '../../utils';
import Types from "./types";


// const { data, data: { roleData } } = getUserFromLS()
// const INITIAL_STATE = {
//     user_in_session: data ? true : false,
//     roles: roleData
// }
const INITIAL_STATE = {
    user_in_session: true,
    roles: {
        designation: "State Project Director",
        geographic_level: "State"
    }
}
const userAuthReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case Types.TOOGLE_USER_IN_SESSION:
            return {
                ...state,
                user_in_session: !state.user_in_session
            };
        case Types.ADD_ROLES_TO_STATE:
            return {
                ...state,
                roles: action.payload
            };
        default:
            return state;
    }
};

export default userAuthReducer;
