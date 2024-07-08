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
  // dark:bg-primary-50 dark:text-white-10
  return (
    <div className="bg-white-20 text-primary-text h-auto ">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
