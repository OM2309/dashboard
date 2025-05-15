import axiosInstance from './axiosInstance';

export const apiGet = async <T>(url: string, params?: object): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPost = async <T, D>(url: string, data: D): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPut = async <T, D>(url: string, data: D): Promise<T> => {
  try {
    const response = await axiosInstance.put<T>(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiDelete = async <T>(url: string): Promise<T> => {
  try {
    const response = await axiosInstance.delete<T>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
