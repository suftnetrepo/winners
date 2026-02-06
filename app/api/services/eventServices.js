import { api } from '../lib/axios';
import { normalizeApiError } from '../lib/apiError';

export async function getEvents() {
    try {
        const { data } = await api.get('/event/get');
        return data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}
