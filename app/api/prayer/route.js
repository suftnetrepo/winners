import { prayerServices } from '../services/prayerServices';
import { handleApiError } from '../lib/apiError'

export async function GET() {
    try {
        const data = await prayerServices();
        return Response.json(data);
    } catch (error) {
        return handleApiError(error)
    }
}
