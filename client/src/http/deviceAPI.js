import { $authRequests, $requests } from "."

export const createType = async (type) => {
    const {data} = await $authRequests.post('api/v1/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $requests.get('api/v1/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authRequests.post('api/v1/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $requests.get('api/v1/brand')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authRequests.post('api/v1/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $requests.get('api/v1/device', {params: {
            typeId, brandId, page, limit
    }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $requests.get('api/v1/device/' + id)
    return data
}