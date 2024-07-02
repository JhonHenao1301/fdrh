import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Application from "./pages/Application";
import ApplicationForm from "./pages/ApplicationForm";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/admin", element: <Admin /> },
    // Application routes
    { path: "/application", element: <Application /> },
    { path: "/application/:id", element: <ApplicationForm /> },
    { path: "/*", element: <NotFoundPage /> },
  ]);

  return routes;
};

function App() {
  return (
    <div className="text-primary-text">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
