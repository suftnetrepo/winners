import { api } from '../lib/axios';
import { normalizeApiError } from '../lib/apiError';

export async function regularServices() {
    try {
        const { data } = await api.get('/regularService/get');
        return data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}
