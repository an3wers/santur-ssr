import { useAuthStore } from '@/stores/auth';

export const useCustomFetch = async (url, method = 'GET', params = {}) => {
  const { API_BASE_URL } = useConfig();
  const authStore = useAuthStore();

  if (process.server) {
    const response = await $fetch.raw(url, {
      method: method,
      baseURL: API_BASE_URL,
      credentials: 'include',
      headers: {
        Cookie: `ASP.NET_SessionId=${authStore.sessionCookie}`,
      },
      params: params,
    });
    return response._data;
  } else if (process.client) {
    const response = await $fetch.raw(url, {
      method: method,
      baseURL: API_BASE_URL,
      credentials: 'include',
      params: params,
    });
    return response._data;
  }
};
