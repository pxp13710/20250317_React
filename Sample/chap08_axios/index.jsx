import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}
      future={{
        v7_startTransition: true, // 라우터 전환 추적, 특정 작업을 준비 (내부적으로 호출)
        v7_relativeSplatPath: true, // Enables relative paths in nested routes
        v7_fetcherPersist: true,   // Retains fetcher state during navigation
        v7_normalizeFormMethod: true, // Normalizes form methods (e.g., POST or GET)
        v7_partialHydration: true, // Supports partial hydration for server-side rendering
        v7_skipActionErrorRevalidation: true, // Prevents revalidation when action errors occur
      }}
    ></RouterProvider>
  </React.StrictMode>
);

