import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import './index.css'
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index  element={<HomePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
