export interface FetchResult<T> {
   data: T | null;
   loading: boolean;
   error: Error | null;
}

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
