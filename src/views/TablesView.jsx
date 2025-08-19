import React from 'react';
import { useApp } from '../hooks/useApp';
import './TablesView.css';

const TablesView = () => {
  const { tables, savedOrders, currentTable, selectTable } = useApp();

  return (
    <div className="tables-view">
      <h2>Select a Table</h2>
      <div className="tables-grid">
        {tables.map(table => {
          const isOccupied = savedOrders[table.id] && savedOrders[table.id].items.length > 0;
          const isActive = currentTable === table.id;
          return (
            <button
              key={table.id}
              className={`table-btn ${isOccupied ? 'occupied' : ''} ${isActive ? 'active' : ''}`}
              onClick={() => selectTable(table.id)}
            >
              {table.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default TablesView;
