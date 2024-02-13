import axios from "axios"
import { API_URL, TABLE } from "@/config/APIConfig"


export const getAPIData = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getFilteredData = async (filter) => {
    try {
        const response = await axios.get(`${API_URL}?${filter.field}=${filter.value}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}