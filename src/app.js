import ReactDom from "react-dom/client";
import HeaderComponent from "./components/Header.js";
import BodyComponent from "./components/BodyComponent.js";
import FooterComponent from "./components/FooterComponent.js";
import AboutComponent from "./components/AboutComponent.js";
import ContactComponent from "./components/ContactComponent.js";
import ErrorComponent from "./components/ErrorComponent.js";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { useState} from "react";

// App Component Layout
const AppLayout = () => {

  const [counter,setCounter]= useState(0);



  return (
    <div className="app">
      <HeaderComponent counterprop={counter} />
      {/* pass counter and Increment to routed children via Outlet context */}
      <Outlet context={{ counter, setCounter }} />
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
        errorElement: <ErrorComponent />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuComponent />,
        errorElement: <ErrorComponent />,
      }
    ],
    errorElement: <ErrorComponent />,
  },
]);

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);
