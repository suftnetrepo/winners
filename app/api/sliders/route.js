import { getSliders } from '../services/sliderServices';
import { handleApiError } from '../lib/apiError'

export async function GET() {
    try {
        const data = await getSliders();
        return Response.json(data);
    } catch (error) {
        return handleApiError(error)
    }
}
