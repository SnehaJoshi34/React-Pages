// src/screens/ProductList.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import mockService from "../mockService";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    allergenInfo: "",
    price: 0,
  });

  useEffect(() => {
    mockService
      .getAllProducts()
      .then((response) => {
        const sortedProducts = response.sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    mockService
      .addProduct(newProduct)
      .then((response) => {
        setProducts([...products, response]);
        setModalOpen(false);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-grid">
        {loading
          ? Array(9)
              .fill()
              .map((_, i) => <Skeleton key={i} height={250} />)
          : products.map((product) => (
              <div key={product.id} className="product-tile">
                <Link to={`/product/${product.id}`}>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </Link>
              </div>
            ))}
      </div>
      <button onClick={() => setModalOpen(true)}>Add Product</button>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Product</h2>
            <label>
              Product Name:
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Product Description:
              <input
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Product Allergen Info:
              <input
                type="text"
                name="allergenInfo"
                value={newProduct.allergenInfo}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Product Price:
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={handleAddProduct}>Add</button>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
