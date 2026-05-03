import { RouterProvider } from 'react-router';
import { router } from './routes';
import { HelmetProvider } from 'react-helmet-async';
import { ThirdwebProvider } from 'thirdweb/react';

export default function App() {
  return (
    <HelmetProvider>
      <ThirdwebProvider>
        <RouterProvider router={router} />
      </ThirdwebProvider>
    </HelmetProvider>
  );
}