import './index.css';
import App from './App.tsx';
import { createRoot } from 'react-dom/client';
import { QueryProvider } from '@/lib/query/QueryProvider.tsx';
import { ThemeProvider } from '@/lib/provider/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </QueryProvider>
);
