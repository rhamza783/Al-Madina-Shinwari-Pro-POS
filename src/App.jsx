import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import TotalSummary from './components/TotalSummary';
import SearchBar from './components/SearchBar';
import CategoryTabs from './components/CategoryTabs';
import ThemeToggle from './components/ThemeToggle';
import AdminPanel from './components/AdminPanel';
import './styles/App.css';

function App() {
  // 🔍 Search functionality
  const [searchTerm, setSearchTerm] = useState('');

  // 🏷️ Category filter
  const [activeCategory, setActiveCategory] = useState('all');

  // 🌙 Dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // 🔐 Admin mode (PIN protected)
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPin, setAdminPin] = useState('');

  // Handle admin toggle with PIN
  const toggleAdminMode = () => {
    if (!showAdmin) {
      const pin = prompt('Enter Admin PIN:');
      if (pin === '1234') {
        setShowAdmin(true);
        setAdminPin(pin);
      } else {
        alert('❌ Wrong PIN! Access denied.');
      }
    } else {
      setShowAdmin(false);
      setAdminPin('');
    }
  };

  // Apply dark mode to HTML tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return (
    <div className="pos-app">
      {/* ===== Header ===== */}
      <header>
        <h1>Al-Madina Shinwari POS</h1>
        <div className="controls">
          {/* Dark Mode Toggle */}
          <ThemeToggle darkMode={darkMode} toggle={() => setDarkMode(!darkMode)} />
          
          {/* Admin Button */}
          <button onClick={toggleAdminMode} className="admin-btn">
            {showAdmin ? '🔒 Admin ON' : '🛠️ Admin Mode'}
          </button>
        </div>
      </header>

      {/* ===== Main Layout ===== */}
      <main>
        {/* ===== Left: Menu Section ===== */}
        <div className="menu-section">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
          <Menu 
            searchTerm={searchTerm} 
            activeCategory={activeCategory} 
            showAdmin={showAdmin}
          />
        </div>

        {/* ===== Right: Cart & Summary ===== */}
        <div className="cart-section">
          <Cart />
          <TotalSummary />
        </div>
      </main>

      {/* ===== Admin Panel (Conditional) ===== */}
      {showAdmin && (
        <AdminPanel onClose={() => setShowAdmin(false)} />
      )}
    </div>
  );
}

export default App;
