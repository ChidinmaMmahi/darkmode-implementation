import "./App.css";
import { useTheme } from "./provider/ThemeProvider";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900 dark:text-white space-y-5">
      <h1 className="text-2xl">DarkMode Implementation</h1>
      <button
        onClick={toggleTheme}
        className="bg-green-500 px-5 py-2.5 rounded-md"
      >
        Change Theme
      </button>
      {theme === "dark" ? <p>Dark theme</p> : <p>Light Theme</p>}
    </div>
  );
}

export default App;
