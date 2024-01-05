import { API_ENDPOINT } from "../Config";

const createQueryParams = (params) => '';

export default async function apiCall(
    url = '/',
    method = 'GET',
    { body, queryParams } = {}
) {
    let params = '';

    if (queryParams) {
        params = createQueryParams(queryParams);
    }

    try {
        const response = await fetch(
            { method, url: `${API_ENDPOINT}${url}${params}`, headers: {}, body }
        );

        const result = await response.json();

        return result;
    } catch (ex) {
        console.log(ex);
        // throw ex;
    }
}