import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { getProducts } from '../services/api';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Assuming we have an endpoint to get a specific product by ID.
    // Replace with actual endpoint to get product details.
    getProducts()
      .then(response => {
        const productData = response.data.find(p => p.productId === productId);
        setProduct(productData);
      })
      .catch(error => console.error(error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ProductDetail product={product} />;
};

export default ProductPage;