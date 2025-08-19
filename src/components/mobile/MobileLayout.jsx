import React, { useState } from 'react';
import TablesView from '../../views/TablesView';
import MenuView from '../../views/MenuView';
import OrderView from '../../views/OrderView';
import BottomNavBar from './BottomNavBar';

const MobileLayout = () => {
  const [activeView, setActiveView] = useState('menu');

  const renderActiveView = () => {
    switch (activeView) {
      case 'tables': return <TablesView />;
      case 'order': return <OrderView />;
      case 'menu': default: return <MenuView />;
    }
  };

  return (
    <div className="mobile-layout">
      <main className="mobile-content">{renderActiveView()}</main>
      <BottomNavBar activeView={activeView} setActiveView={setActiveView} />
    </div>
  );
};
export default MobileLayout;
