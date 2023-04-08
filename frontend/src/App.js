import {Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
        <Routes>
          <Route index element={<Login/>} />
          {/* <Route index element={<Home/>} /> */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
    </>
  );
}

export default App;
