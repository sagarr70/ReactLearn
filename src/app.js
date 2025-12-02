import ReactDom from "react-dom/client";
import HeaderComponent from "./components/Header.js";
import BodyComponent from "./components/BodyComponent.js";
import FooterComponent from "./components/FooterComponent.js";


// App Component Layout
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

root.render(<AppLayout />);
