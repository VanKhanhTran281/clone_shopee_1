import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Page from "./Page";
import Login from './register_log-in/login'
import Signup from "./register_log-in/sign_up";
import Details from "./product_details/details";
function App() {
  return (
  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/page" element={<Page />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/details/:itemid" element={<Details/>} />

  </Routes>
  
  
  )
}

export default App;
