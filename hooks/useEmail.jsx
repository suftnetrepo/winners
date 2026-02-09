
'use client';
import useSWRMutation from 'swr/mutation';

async function sendRequest(url, { arg }) {
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

const usePrayerRequest = () => {
    const { trigger, isMutating, error, data } = useSWRMutation(
        '/api/email/prayer-request',
        sendRequest
    );

    return {
        submit: trigger,
        isSubmitting: isMutating,
        error,
        success: !!data,
    };
};

const useTestimony = () => {
    const { trigger, isMutating, error, data } = useSWRMutation(
        '/api/email/testimony',
        sendRequest
    );

    return {
        submit: trigger,
        isSubmitting: isMutating,
        error,
        success: !!data,
    };
};

const useContact = () => {
    const { trigger, isMutating, error, data } = useSWRMutation(
        '/api/email/contact-us',
        sendRequest
    );

    return {
        submit: trigger,
        isSubmitting: isMutating,
        error,
        success: !!data,
    };
};

export { usePrayerRequest, useTestimony, useContact };
