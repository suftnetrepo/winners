
'use client';

import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export async function sendRequest(url, { arg }) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Something went wrong');
    }

    return res.json();
}

const useEvent = () => {
  const { data, error, isLoading } = useSWR('/api/event');

  return {
    data, error, loading: isLoading
  };
};

const useRegister = () => {
    const { trigger, isMutating, error, data } = useSWRMutation(
        '/api/event/register',
        sendRequest
    );

    return {
        submit: trigger,
        isSubmitting: isMutating,
        error,
        success: !!data,
    };
};

export { useEvent, useRegister };
