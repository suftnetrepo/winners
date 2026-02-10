import { postEvent } from '../../services/eventServices';
import { handleApiError } from '../../lib/apiError'

export async function POST(req) {
    try {
        const body = await req.json()
        const data = await postEvent(body);
        return Response.json(data);
    } catch (error) {
        return handleApiError(error)
    }
}
