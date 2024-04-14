import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import './sass/index.sass'
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/" element={<HomePage/>}/>
          <Route path="/products/:id" element={<ProductPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
