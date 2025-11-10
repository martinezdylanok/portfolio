import { useEffect, useState } from "react";
import type { FetchResult } from "./data/useFetchDataData";
import { API_BASE_URL } from "./data/useFetchDataData";

if (!API_BASE_URL) {
   console.error("FATAL: VITE_API_BASE_URL environment variable is not set.");
   throw new Error("VITE_API_BASE_URL environment variable is not set.");
}

const useFetchData = <T = unknown,>(apiPath: string | null): FetchResult<T> => {
   const [data, setData] = useState<T | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<Error | null>(null);

   useEffect(() => {
      if (!apiPath) {
         setData(null);
         setLoading(false);
         setError(null);
         return;
      }

      const cleanApiPath = apiPath.startsWith("/") ? apiPath.substring(1) : apiPath;
      const url = `${API_BASE_URL}/${cleanApiPath}`;
      console.log(`Fetching data from: ${url}`);

      const abortController = new AbortController();
      const signal = abortController.signal;

      async function fetchData() {
         setLoading(true);
         setError(null);
         setData(null);

         try {
            const response = await fetch(url, { signal });

            if (!response.ok) {
               let errorBody = null;
               try {
                  errorBody = await response.json();
               } catch (e) {
                  console.log(e);
               }
               const errorMessage = (errorBody as { message?: string })?.message || `HTTP error! status: ${response.status}`;
               throw new Error(errorMessage);
            }

            const apiResponse = await response.json();

            if (apiResponse && apiResponse.success === true && apiResponse.data !== undefined) {
               setData(apiResponse.data as T);
            } else if (apiResponse && apiResponse.success === false) {
               throw new Error(apiResponse.message || `API returned success: false`);
            } else {
               console.warn("Unexpected API response format. Expected { success: boolean, data: T }.", apiResponse);
               throw new Error("Unexpected API response format.");
            }
         } catch (error: unknown) {
            if (error instanceof Error && error.name === "AbortError") {
               console.log("Fetch aborted");
            } else if (error instanceof Error) {
               console.error("Failed to fetch data:", error);
               setError(error);
            } else {
               console.error("Failed to fetch data:", error);
               setError(new Error(String(error)));
            }
         } finally {
            if (!signal.aborted) {
               setLoading(false);
            }
         }
      }

      fetchData();

      return () => {
         abortController.abort();
      };
   }, [apiPath]);

   return { data, loading, error };
};

export default useFetchData;
