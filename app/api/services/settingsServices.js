import { api } from '../lib/axios';
import { normalizeApiError } from '../lib/apiError';

export async function getSettings() {
    try {
        const { data } = await api.get('/church/get');
        return data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}
