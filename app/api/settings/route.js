import { getSettings } from '../services/settingsServices';
import { handleApiError } from '../lib/apiError'

export async function GET() {
    try {
        const data = await getSettings();
        return Response.json(data);
    } catch (error) {
        return handleApiError(error)
    }
}
