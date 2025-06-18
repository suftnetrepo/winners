import { useState, useEffect, useCallback } from 'react';
import { zat } from '../utils/api';
import { VERBS } from '../config';
import { PUSH_NOTIFICATION } from '../utils/apiUrl';
import { pushNotificationValidator } from '@/validator/rules';

const usePushNotification = (searchQuery= '') => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null,
    fields: pushNotificationValidator.fields,
    totalCount: 0,
    success: false
  });

  const handleError = (error) => {
    setState((pre) => {
      return { ...pre, error: error, success: false, loading: false };
    });
  };

  const handleChange = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [name]: value
      }
    }));
  };

  async function handleSelect(body) {
    setState((prevState) => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        ...body,
        error: null,
        success: false,
        loading: false
      }
    }));
  }

  async function handleSave(body) {
    setState((prev) => ({ ...prev, loading: true }));
    const { success, errorMessage, data } = await zat(PUSH_NOTIFICATION.createOne, body, VERBS.POST);

    if (success) {
      setState((prevState) => {
        return {
          ...prevState,
          data: [data, ...prevState.data],
          loading: false,
          success: true
        };
      });
      return true;
    } else {
      handleError(errorMessage || 'Failed to update the push notification.');
      return false;
    }
  }

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      fields: {
        ...pushNotificationValidator.reset()
      },
      error: null,
      loading: false,
      success: false
    }));
  };

  const handleDelete = async (id) => {
    const { success, errorMessage } = await zat(PUSH_NOTIFICATION.removeOne, null, VERBS.DELETE, {
      id: id
    });

    if (success) {
      setState((prevState) => ({
        ...prevState,
        data: prevState.data.filter((j) => j._id !== id),
        loading: false
      }));
      return true;
    } else {
      handleError(errorMessage || 'Failed to delete the push notification.');
      return false;
    }
  };

  const handleFetch = useCallback(async ({ pageIndex = 1, pageSize = 10, sortBy = [], searchQuery = '' }) => {
    setState((prev) => ({ ...prev, loading: true }));
    const {
      success,
      errorMessage,
      data = []
    } = await zat(PUSH_NOTIFICATION.fetch, null, VERBS.GET, {
      status: false
    });

    if (success) {
      setState((prev) => ({ ...prev, data: data, totalCount: data?.lenght, loading: false }));
      return true;
    } else {
      handleError(errorMessage || 'Failed to update the push notification.');
      return false;
    }
  }, []);

    async function handleEdit(body, id) {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      const { success, errorMessage } = await zat(PUSH_NOTIFICATION.updateOne, body, VERBS.PUT, { id: id });
  
      if (success) {
        setState((prevState) => ({
          ...prevState,
          data: prevState.data.map((j) => (j._id === id ? body : j)),
          loading: false,
          success:true
        }));
        return true;
      } else {
        handleError(errorMessage || 'Failed to update the push notification.');
        return false;
      }
    }

  useEffect(() => {
    handleFetch();
  }, [searchQuery, handleFetch]);

  return {
    ...state,
    handleChange,
    handleSave,
    handleDelete,
    handleReset,
    handleFetch,
    handleEdit,
    handleSelect
  };
};

export { usePushNotification };
