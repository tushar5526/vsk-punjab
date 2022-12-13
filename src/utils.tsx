export const setLocalStorageItem = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getItemFromLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key)!)
}



export const getUserFromLS = () => {
    try {
        const user = JSON.parse(localStorage.getItem("user") as "")
        if (user) {
            return user
        }

    } catch (error) {
        return false
    }
}


export const getRolesFromLS = () => {
    try {
        const roles = JSON.parse(localStorage.getItem("roles") as "").roles

        if (roles) {
            return roles
        }
    } catch (error) {

        return false
    }
}




export const logout = () => {
    localStorage.clear()
}


