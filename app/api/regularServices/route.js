import { regularServices } from '../services/regularServices';
import { handleApiError } from '../lib/apiError'

export async function GET() {
    try {
        const data = await regularServices();
        return Response.json(data);
    } catch (error) {
        return handleApiError(error)
    }
}
