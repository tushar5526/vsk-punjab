import { parseStringPromise } from "xml2js"
import API_SERVICE from "../../services/api-service"

export const getAcademicYearList = async () => {
    try {
        const { data } = await API_SERVICE.getVidyaSamikshaAcademicYear()
        if (data) {
            const yearList = await parseStringPromise(data).then(({ string: { _ } }: any) => JSON.parse(_))
            if (Array.isArray(yearList)) {
                // AccYearCode: '5', Year: '2014-15'
                return yearList
            }
        }
    } catch (error) {
        return false
    }
}


export const parseYearListForMetabase = async (yearList: any) => {
    try {
        if (Array.isArray(yearList)) {
            const parsed = yearList.map(({ AccYearCode, Year }: any) => ({ AccYearCode, Year: `${Year.substring(0, 4)}-20${Year.substring(5)}` }))
            if (parsed) return parsed
        }
    } catch (error) {
        return false
    }
}

