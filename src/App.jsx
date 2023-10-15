import "./App.css";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import CategoryPage from "./pages/category";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";
import AdminLayout from "./components/Layouts/Admin";
import UsersPage from "./pages/users";
import RegisterPage from "./pages/register";
import BannerPage from "./pages/banner";
import PromosPage from "./pages/promos";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/category", element: <CategoryPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/dashboard",
    element: (
      <AdminLayout>
        <DashboardPage />
      </AdminLayout>
    ),
  },
  {
    path: "/users",
    element: (
      <AdminLayout>
        <UsersPage />
      </AdminLayout>
    ),
  },
  {
    path: "/banner",
    element: (
      <AdminLayout>
        <BannerPage />
      </AdminLayout>
    ),
  },
  {
    path: "/promos",
    element: (
      <AdminLayout>
        <PromosPage />
      </AdminLayout>
    ),
  },
];

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
