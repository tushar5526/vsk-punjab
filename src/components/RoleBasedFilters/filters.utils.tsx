import { dummyRoles } from "../../services/parameters"

export const getFiltersValidationsBasedOnRole = (role: any) => {


    switch (role) {
        case dummyRoles.STATE:

            // Here false represents input<disable=false>
            // So boolean values will work in opposite way
            return {
                permissions: {
                    district: false,
                    block: false,
                    cluster: false
                },
                type: "State Level"
            }

        case dummyRoles.DISTRICT:
            return {
                permissions: {
                    district: true,
                    block: false,
                    cluster: false
                },
                geo: "SOME DISTRICT",
                type: "District Level"
            }
        case dummyRoles.BLOCK:
            return {
                permissions: {
                    district: true,
                    block: true,
                    cluster: false
                },
                geo: "SOME BLOCK",
                type: "Block Level"
            }
        case dummyRoles.CLUSTER:
            return {
                permissions: {
                    district: true,
                    block: true,
                    cluster: true
                },
                district: "SOME CLUSTER",
                type: "Cluster Level"
            }
        default:
            return {
                district: false,
                block: false,
                cluster: false
            }
    }
}