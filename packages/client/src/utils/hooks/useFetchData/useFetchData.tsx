import { useEffect, useState } from "react";
import type { FetchResult } from "./data/useFetchDataData";
import { API_BASE_URL } from "./data/useFetchDataData";

if (!API_BASE_URL) {
   console.error("FATAL: HOST environment variable is not set.");
   throw new Error("VITE_API_BASE_URL environment variable is not set.");
}

const useFetchData = <T = unknown,>(apiPath: string | null): FetchResult<T> => {
   const [data, setData] = useState<T | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<Error | null>(null);

   useEffect(() => {
      if (!apiPath || !API_BASE_URL) {
         setData(null);
         setLoading(false);
         setError(null);
         return;
      }

      const relativeApiPath = apiPath.startsWith("/") ? apiPath : `/api/${apiPath}`;

      let url: string;

      try {
         url = new URL(relativeApiPath, API_BASE_URL).href;
         console.log(`Fetching data from: ${url}`);
      } catch (error) {
         console.log(`Invalid URL constructed: Base="${API_BASE_URL}", Path="${relativeApiPath}"`, error);
         setError(new Error(`Invalid API URL configuration`));
         setLoading(false);
         return;
      }

      const abortController = new AbortController();
      const signal = abortController.signal;

      async function fetchData() {
         setLoading(true);
         setError(null);
         setData(null);

         try {
            const response = await fetch(url, { signal });

            if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
            }

            const apiResponse = await response.json();

            if (apiResponse && apiResponse.success && apiResponse.data !== undefined) {
               setData(apiResponse.data as T);
            } else if (apiResponse && !apiResponse.success) {
               throw new Error(apiResponse.message || `API returned success: false`);
            } else {
               console.error("Unexpected API response format:", apiResponse);
               throw new Error("Unexpected API response format");
            }
         } catch (error: any) {
            if (error.name === "AbortError") {
               console.log("Fetch aborted");
            } else {
               console.error("Failed to fetch data", error);
               setError(error);
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
