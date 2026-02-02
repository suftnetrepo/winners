
'use client';
import useSWR from 'swr';

const useRegularServices = () => {
  const { data, error, isLoading } = useSWR('/api/regularServices');

  return {
    data, error, loading: isLoading
  };
};

export { useRegularServices };
