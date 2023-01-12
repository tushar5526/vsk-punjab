import { parseStringPromise } from "xml2js"
import API_SERVICE from "../../services/api-service"
import moment from 'moment';

export const getAcademicYearList = async () => {
    try {
        const { data } = await API_SERVICE.getVidyaSamikshaAcademicYear()
        if (data) {
            const yearList = await parseStringPromise(data).then(({ string: { _ } }: any) => JSON.parse(_))
            if (Array.isArray(yearList)) {
                // AccYearCode: '5', Year: '2014-15'
                return yearList.slice(Number(yearList.length) - 2)
            }
        }
    } catch (error) {
        return false
    }
}


export const parseYearListForMetabase = async (yearList: any) => {
    try {
        if (Array.isArray(yearList)) {
            const parsed = yearList.map(({ Year }: any) => ({ value: `${Year.substring(0, 4)}-20${Year.substring(5)}`, label: `${Year.substring(0, 4)}-20${Year.substring(5)}` }))
            if (parsed) return parsed
        }
    } catch (error) {
        return false
    }
}



export const getEncryptedStringForMIS = async (e: any) => {
    try {
        const { data } = await API_SERVICE.EncryptForMIS(e)
        if (data) {
            return await parseStringPromise(data).then(({ string: { _ } }) => _)
        }
    } catch (error) {
        return false
    }
}


export const getToolTip = async (academicYear: any, schoolId: any, date: any) => {
    try {
        const { data } = await API_SERVICE.getToolTipData(academicYear, schoolId, date)
        if (data) {
            return await parseStringPromise(data).then(({ string: { _ } }) => JSON.parse(_)[0])
        }
    } catch (error) {
        return false
    }
}


export const getSchoolListForMapWithLatLong = async (e: any) => {
    try {
        const { data } = await API_SERVICE.getSchoolListForLatLong(e)
        if (data) {
            return await parseStringPromise(data).then(({ string: { _ } }) => JSON.parse(_))
        }
    } catch (error) {
        return false
    }
}



export const fixMomentDateForMis = (e?: any) => {
    if (e) {
        return moment(e).format("L").split("/").reverse().join("-")
    }
    return moment().format("L").split("/").reverse().join("-")
}