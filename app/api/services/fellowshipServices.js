import { api } from '../lib/axios';
import { normalizeApiError } from '../lib/apiError';

export async function fellowshipServices() {
    try {
        const { data } = await api.get('/fellowship/get');
        return data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}
