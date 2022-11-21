import { getUserFromLS } from '../../utils';
import Types from "./types";


const getInitialState = () => {
    const user = getUserFromLS()

    return {
        user_in_session: user ? true : false
    };
}

const INITIAL_STATE = getInitialState()

const userAuthReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case Types.TOOGLE_USER_IN_SESSION:
            return {
                ...state,
                user_in_session: !state.user_in_session
            };
        default:
            return state;
    }
};

export default userAuthReducer;
