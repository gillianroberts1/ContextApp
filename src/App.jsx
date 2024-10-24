import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import ThemeContextProvider from "./contexts/ThemeContext";
import "./index.css";
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <AuthContextProvider>
        <NavBar />
        <BookList />
        <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
