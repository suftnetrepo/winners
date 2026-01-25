
'use client';
import useSWR from 'swr';

const useSlider = () => {
  const { data, error, isLoading } = useSWR('/api/slider');

  return {
    data, error, loading: isLoading
  };
};

export { useSlider };
