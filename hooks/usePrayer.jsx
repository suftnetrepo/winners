
'use client';
import useSWR from 'swr';

const usePrayer = () => {
  const { data, error, isLoading } = useSWR('/api/prayer');

  return {
    data, error, loading: isLoading
  };
};

export { usePrayer };
