import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import './sass/index.sass'
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import KitchensPage from "./pages/KitchensPage/KitchensPage";
import KitchensTypePage from "./pages/KitchensTypePage/KitchensTypePage";
import Model from "./pages/ModelPage/Model";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/" element={<HomePage/>}/>
          <Route path="/kitchens" element={<KitchensPage/>}/>
          <Route path="/kitchens/:type" element={<KitchensTypePage/>}/>
          <Route path="/kitchens/:type/:model" element={<Model/>}/>
          <Route path="/products/:id" element={<ProductPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
