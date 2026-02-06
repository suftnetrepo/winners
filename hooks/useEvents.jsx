
'use client';
import useSWR from 'swr';

const useEvent = () => {
  const { data, error, isLoading } = useSWR('/api/event');

  return {
    data, error, loading: isLoading
  };
};

export { useEvent };
