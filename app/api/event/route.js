import { getEvents } from '../services/eventServices';
import { handleApiError } from '../lib/apiError'

export async function GET() {
    try {
        const data = await getEvents();
        return Response.json(data);
    } catch (error) {
        return handleApiError(error)
    }
}
