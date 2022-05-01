import Home from "./pages/Home";
import CountryPage from './pages/CountryPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}> </Route>e
        <Route path="/home/:name" element={<CountryPage />}> </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
