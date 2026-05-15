import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        <svg className="w-6 h-6 text-yellow-400 animate-spin" style={{ animationDuration: '20s' }} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.39 0l.707.707a1 1 0 11-1.39 1.39L15.22 3.22a1 1 0 010-1.39zm2.83 2.83a1 1 0 011.39 0l.707.707a1 1 0 11-1.39 1.39l-.707-.707a1 1 0 010-1.39zm0 2.83a1 1 0 011.39 0l.707.707a1 1 0 11-1.39 1.39l-.707-.707a1 1 0 010-1.39zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm0 4a1 1 0 100-2h-1a1 1 0 100 2h1zM4.22 4.22a1 1 0 011.39 0l.707.707a1 1 0 11-1.39 1.39L4.22 5.61a1 1 0 010-1.39zm2.83 2.83a1 1 0 011.39 0l.707.707a1 1 0 11-1.39 1.39l-.707-.707a1 1 0 010-1.39zM3 11a1 1 0 100-2H2a1 1 0 100 2h1zm0 4a1 1 0 100-2H2a1 1 0 100 2h1zm2.22 2.22a1 1 0 011.39 0l.707.707a1 1 0 11-1.39 1.39l-.707-.707a1 1 0 010-1.39zm2.83 2.83a1 1 0 011.39 0l.707.707a1 1 0 11-1.39 1.39l-.707-.707a1 1 0 010-1.39zm0-2.83a1 1 0 011.39 0l.707.707a1 1 0 11-1.39 1.39l-.707-.707a1 1 0 010-1.39zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}