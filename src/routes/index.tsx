import { Route, Routes } from 'react-router-dom';
import Playground from '@/pages/Playground';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Playground />} />
    </Routes>
  );
};
