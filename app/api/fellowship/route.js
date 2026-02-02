import { fellowshipServices } from '../services/fellowshipServices';
import { handleApiError } from '../lib/apiError'

export async function GET() {
    try {
        const data = await fellowshipServices();
        return Response.json(data);
    } catch (error) {
        return handleApiError(error)
    }
}
