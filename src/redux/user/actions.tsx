import Types from "./types";

export const toogleUserSession = () => ({
    type: Types.TOOGLE_USER_IN_SESSION
})


export const addRolesToState = (role: any) => ({
    type: Types.ADD_ROLES_TO_STATE,
    payload: role
})