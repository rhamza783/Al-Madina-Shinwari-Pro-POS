import React from 'react';
import TablesView from '../../views/TablesView';
import MenuView from '../../views/MenuView';
import OrderView from '../../views/OrderView';

const DesktopLayout = () => {
  return (
    <div className="desktop-grid">
      <aside className="left-panel">
        <TablesView />
      </aside>
      <main className="center-panel">
        <MenuView />
      </main>
      <aside className="right-panel">
        <OrderView />
      </aside>
    </div>
  );
};
export default DesktopLayout;
