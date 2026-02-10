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

export async function postEvent(body) {
    try {
        const { data } = await api.post('/event/post', body);
        return data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}
