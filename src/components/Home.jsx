// import React from "react";

// const Home = () => {
//   return (
//     <div style={{ padding: 20 }}>
//       <h3> Welcome to Homble Frontend Assessment</h3>
//       <p>Pages overview:</p>
//       <ul>
//         <li>Page 1 - Product list page and create button</li>
//         <li>Page 2 - Product detail page</li>
//         <li>Page 3 - Product dashboard</li>
//       </ul>
//     </div>
//   );
// };

// export default Home;

// import React from "react";

// const Home = () => {
//   return (
//     <div style={{ padding: 20 }}>
// {
/* <h3> Welcome to Homble Frontend Assessment</h3>
      <p>Pages overview:</p>
      <ul>
        <li>Page 1 - Product list page and create button</li>
        <li>Page 2 - Product detail page</li>
        <li>Page 3 - Product dashboard</li>
      </ul> */
// }

//       <hr />

//       <h3>Dashboard</h3>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 5 }}>
//           <h4>Total Products</h4>
//           <p>10</p>
//         </div>
//         <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 5 }}>
//           <h4>Products in Stock</h4>
//           <p>8</p>
//         </div>
//         <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 5 }}>
//           <h4>Products Sold</h4>
//           <p>2</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// src/components/Home.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <header className="home-header">
//         <h1>Welcome to Homble Frontend Assessment</h1>
//         <p>Navigate to different pages from here</p>
//       </header>
//       <main className="home-main">
//         <div className="home-card">
//           <h2>Product List</h2>
//           <p>View all products and sort them by price.</p>
//           <Link to="/products" className="home-button">
//             Go to Product List
//           </Link>
//         </div>
//         <div className="home-card">
//           <h2>Product Detail</h2>
//           <p>View details of a specific product.</p>
//           <Link to="/product/1" className="home-button">
//             Go to Product Detail
//           </Link>
//         </div>
//         <div className="home-card">
//           <h2>Product Dashboard</h2>
//           <p>Manage and add new products.</p>
//           <Link to="/dashboard" className="home-button">
//             Go to Product Dashboard
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [welcomeText, setWelcomeText] = useState("");

  useEffect(() => {
    const text = "Weelcome to Homble Frontend Assessment";
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setWelcomeText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>{welcomeText}</h1>
        {/* <p>Navigate to different pages from here</p> */}
      </header>
      <main className="home-main">
        <div className="home-card">
          <h2>Product List</h2>
          <p>View all products and sort them by price.</p>
          <Link to="/products" className="home-button">
            Go to Product List
          </Link>
        </div>
        <div className="home-card">
          <h2>Product Detail</h2>
          <p>View details of a specific product.</p>
          <Link to="/product/1" className="home-button">
            Go to Product Detail
          </Link>
        </div>
        <div className="home-card">
          <h2>Product Dashboard</h2>
          <p>Manage and add new products.</p>
          <Link to="/dashboard" className="home-button">
            Go to Product Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
