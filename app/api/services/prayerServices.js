import { api } from '../lib/axios';
import { normalizeApiError } from '../lib/apiError';

export async function prayerServices() {
    try {
        const { data } = await api.get('/regularService/get/prayer');
        return data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}
