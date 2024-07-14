import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Application from "./pages/Application";
import ApplicationSelTypeEd from "./pages/ApplicationSelTypeEd";
// import ApplicationForm from "./pages/ApplicationForm";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/admin", element: <Admin /> },
    // Application routes
    { path: "/application", element: <Application /> },
    { path: "/application/:id", element: <ApplicationSelTypeEd /> },
    { path: "/*", element: <NotFoundPage /> },
  ]);

  return routes;
};

function App() {
  //
  return (
    <div className="bg-white-10 text-primary-text h-auto dark:bg-primary-50 dark:text-white-10">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
