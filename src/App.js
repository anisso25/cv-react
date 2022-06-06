import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Home  from  "./pages/Home";

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/"           exact element={<Home />}></Route>
          <Route path="/competence" exact element={<Knowledges />}></Route>
          <Route path="/Portfolio"  exact element={<Portfolio />}></Route>
          <Route path="/contact"    exact element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
