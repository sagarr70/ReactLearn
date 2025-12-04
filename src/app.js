import ReactDom from "react-dom/client";
import HeaderComponent from "./components/Header.js";
import BodyComponent from "./components/BodyComponent.js";
import FooterComponent from "./components/FooterComponent.js";
import AboutComponent from "./components/AboutComponent.js";
import ContactComponent from "./components/ContactComponent.js";
import ErrorComponent from "./components/ErrorComponent.js";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

// App Component Layout
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuComponent />,
      }
    ],
    errorElement: <ErrorComponent />,
  },
]);

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);
