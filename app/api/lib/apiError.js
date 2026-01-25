import { logger } from '@/utils/logger';
import axios from 'axios';

 class ApiError extends Error {
  constructor(message, status = 500, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

 function normalizeApiError(error) {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.message || 'Request failed';
    const data = error.response?.data;
    return new ApiError(message, status, data);
  }

  if (error instanceof Error) {
    logger.error(error);
    return new ApiError(error.message);
  }

  return new ApiError('Unknown error');
}

 function handleApiError(error) {
  if (error instanceof ApiError) {
    return Response.json(
      {
        message: error.message,
        data: error.data,
      },
      { status: error.status }
    );
  }

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