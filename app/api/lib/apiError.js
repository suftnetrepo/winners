import { logger } from '@/utils/logger';
import axios from 'axios';


export class ApiError extends Error {
  constructor(message, status = 500, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

export function normalizeApiError(error) {
  if (axios.isAxiosError(error)) {
    return new ApiError(
      error.response?.data?.message || error.message || 'Request failed',
      error.response?.status || 500,
      error.response?.data
    );
  }

  if (error instanceof Error) {
    logger.error(error)
    return new ApiError(error.message);
  }

  return new ApiError('Unknown error');
}

export function handleApiError(error) {
  if (error instanceof ApiError) {
    return Response.json(
      {
        message: error.message,
        data: error.data,
      },
      { status: error.status }
    );
  }

  console.error('[Unhandled API Error]', error);

  return Response.json(
    { message: 'Internal server error' },
    { status: 500 }
  );
}

export {
    handleApiError,
    normalizeApiError,
    ApiError
}