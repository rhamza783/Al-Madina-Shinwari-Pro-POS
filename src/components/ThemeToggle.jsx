export default function ThemeToggle({ darkMode, toggle }) {
  return (
    <button onClick={toggle} className="theme-toggle">
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
