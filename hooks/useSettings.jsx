
'use client';
import useSWR from 'swr';

const useSettings = () => {
  const { data, error, isLoading } = useSWR('/api/settings');

  return {
    data : data, error, loading: isLoading
  };
};

export { useSettings };
