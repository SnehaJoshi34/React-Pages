// src/screens/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockService from "../mockService";
import "./ProductDetail.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockService
      .getProductById(id)
      .then((response) => {
        setProduct(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-allergen-info">
          <strong>Allergen Info:</strong> {product.allergenInfo}
        </p>
        <p className="product-price">
          <strong>Price:</strong> ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
