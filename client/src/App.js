import { AppStyle } from "./AppStyle";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Shop from "./components/pages/shop/Shop";
import Catalogue from "./components/pages/catalogue/Catalogue";
import Contact from "./components/pages/contact/Contact";
import Trolley from "./components/pages/trolley/Trolley";
import Header from "./components/layouts/header/Header";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <AppStyle className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trolley" element={<Trolley />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
