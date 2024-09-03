import Login from "./Login";
import Main from "./Main";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";
import Navigation from "./Navigation";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
