import { useThemeStore } from '@/lib/store/useThemeStore';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="p-4">
      <h1 className="text-xl">Current theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
