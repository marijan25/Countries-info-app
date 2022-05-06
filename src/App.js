import Home from "./pages/Home";
import CountryPage from './pages/CountryPage'
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const switchMode = () => {
    setDarkMode((prevState) => !prevState)
  }
  return (
    <BrowserRouter>
      <Header switchMode={switchMode} darkMode={darkMode}/>
      <Routes>
        <Route exact path="/" element={<Home darkMode={darkMode} />}> </Route>
        <Route path={"/home/:code"} element={<CountryPage darkMode={darkMode} />}> </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
