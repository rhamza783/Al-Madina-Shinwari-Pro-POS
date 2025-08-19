import React from 'react';
import { AppProvider } from './context/AppContext';
import { useScreenSize } from './hooks/useScreenSize';
import DesktopLayout from './components/desktop/DesktopLayout';
import MobileLayout from './components/mobile/MobileLayout';
import AdminAuth from './components/common/AdminAuth';

function App() {
  const { isDesktop } = useScreenSize();

  return (
    <AppProvider>
      <div className="app-container">
        {isDesktop ? <DesktopLayout /> : <MobileLayout />}
        <AdminAuth />
      </div>
    </AppProvider>
  );
}

export default App;
