import categories from '../data/categories';

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="category-tabs">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={active === cat.id ? 'active' : ''}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
