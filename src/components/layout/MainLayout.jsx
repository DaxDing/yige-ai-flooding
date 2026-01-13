import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-app)' }}>
            <Sidebar />
            <div style={{ flex: 1, marginLeft: '240px', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <main style={{ flex: 1, padding: 'var(--space-xl)', overflowY: 'auto' }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
