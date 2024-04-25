import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import './sass/index.sass'
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import KitchensPage from "./pages/KitchensPage/KitchensPage";
import KitchensTypePage from "./pages/KitchensTypePage/KitchensTypePage";
import Model from "./pages/ModelPage/Model";
import Fasads from "./pages/FasadsPage/Fasads";
import HardWrobes from './pages/HardWrobePage/HardWrobe'
import Cloakrooms from "./pages/CloakroomsPage/Cloakrooms";
import TvZonePage from "./pages/tvZonePage/TvZonePage";
import ChildrenPage from "./pages/ChildrenPage/ChildrenPage";
import { useEffect } from "react";
import AboutUs from "./pages/aboutUs/aboutUs";
import ForDesignerPage from "./pages/forDesignerPage/ForDesignerPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {

  return (
    <div className="App">

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/" element={<HomePage/>}/>
          <Route path="/kitchens" element={<KitchensPage/>}/>
          <Route path="/kitchens/:type" element={<KitchensTypePage/>}/>
          <Route path="/kitchens/:type/:model" element={<Model/>}/>
          <Route path="/products/:id" element={<ProductPage/>}/>
          <Route path="/Fasads" element={<Fasads/>}/>
          <Route path="/furniture/HardWrobes" element={<HardWrobes/>}/>
          <Route path="/furniture/cloakrooms" element={<Cloakrooms/>}/>
          <Route path="/furniture/tv-zone" element={<TvZonePage/>}/>
          <Route path="/furniture/children" element={<ChildrenPage/>}/>
          <Route path="/portfolio" element={<PortfolioPage/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/designers" element={<ForDesignerPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
