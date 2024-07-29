import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductList from '../components/ProductList';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'Laptop',
    top: 10,
    minPrice: 0,
    maxPrice: 10000,
  });

  useEffect(() => {
    getProducts(filters.company, filters.category, filters.top, filters.minPrice, filters.maxPrice)
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, [filters]);

  return (
    <div>
      <h1>All Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default AllProductsPage;