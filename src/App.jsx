import "./App.css";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home";

const routes = [{ path: "/", element: <HomePage /> }];

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
