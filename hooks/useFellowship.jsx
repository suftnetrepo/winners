
'use client';
import useSWR from 'swr';

const useFellowship = () => {
  const { data, error, isLoading } = useSWR('/api/fellowship');

  return {
    data, error, loading: isLoading
  };
};

export { useFellowship };
