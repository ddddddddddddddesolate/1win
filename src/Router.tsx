import { Navigate, Route, Routes } from 'react-router-dom';

import Home from 'routes/Home';
import Admin from 'routes/Admin';

const Router = () => (
  <Routes>
    <Route index element={<Home />} />

    <Route path="admin" element={<Admin />} />

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default Router;
