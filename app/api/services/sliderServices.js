import { api } from '../lib/axios';
import { normalizeApiError } from '../lib/apiError';

export async function getSliders() {
    try {
        const { data } = await api.get('/sliders');
        return data;
    } catch (error) {
        throw normalizeApiError(error);
    }
}
