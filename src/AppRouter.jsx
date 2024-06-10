// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./screens/ProductList";
import ProductDetail from "./screens/ProductDetail";
import ProductDashboard from "./screens/ProductDashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<ProductDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
