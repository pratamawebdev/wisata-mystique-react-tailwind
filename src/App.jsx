import "./App.css";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import CategoryPage from "./pages/category";
import LoginPage from "./pages/login";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/category", element: <CategoryPage /> },
  { path: "/login", element: <LoginPage /> },
];

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
