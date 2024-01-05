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
            `${API_ENDPOINT}${url}${params}`,
            {
                method,
                body: body ? JSON.stringify(body) : body,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        try {
            const result = await response.json();
            return result;
        } catch (ex) {
            return true;
        }

        return result;
    } catch (ex) {
        console.log(ex);
        // throw ex;
    }
}