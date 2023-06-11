import { Navigate, Route, Routes } from 'react-router-dom';

import Home from 'routes/Home';

const Router = () => (
  <Routes>
    <Route index element={<Home />} />

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default Router;
