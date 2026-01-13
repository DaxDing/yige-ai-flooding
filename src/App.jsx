import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import ProjectLayout from './pages/ProjectLayout';
import PreDelivery from './pages/PreDelivery';
import InDelivery from './pages/InDelivery';
import Assets from './pages/Assets';
import PostDelivery from './pages/PostDelivery';

import ProjectIndex from './pages/ProjectIndex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          {/* Project Routes */}
          <Route path="project/:id" element={<ProjectLayout />}>
            <Route index element={<ProjectIndex />} />
            <Route path="pre-delivery" element={<PreDelivery />} />
            <Route path="in-delivery" element={<InDelivery />} />
            <Route path="post-delivery" element={<PostDelivery />} />
            <Route path="assets" element={<Assets />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
