import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootEl = document.querySelector("#root");
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl);

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError(e: any) {
        if (e.status !== 401) {
          console.error(e.message);
        }
      },
    },
    queries: {
      //   staleTime: 1000 * 60 * 4,
      refetchOnWindowFocus: false,

      retry: (failureCount, error: any) => {
        if (
          error.status === 404 ||
          error.status === 401 ||
          error.status === 403
        ) {
          return false;
        }
        if (error.status === 502) {
          if (failureCount < 3) {
            return true;
          } else {
            console.error(error.message);
            return false;
          }
        }
        if (error.status === 500) {
          console.error(error.message);
          return false;
        }
        return true;
      },
      // retryDelay: (failureCount, error: any) => {
      //   if (error.status === 502 && failureCount < 3) {
      //     return randomInt(5, 10) * 1000;
      //   }
      //   return 1000;
      // },
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);