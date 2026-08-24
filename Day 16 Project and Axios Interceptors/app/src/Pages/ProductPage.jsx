import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { axiosInstance } from "../Config/axiosInstance";

function ProductPage() {
  const [productsData, setProductsData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const getProducts = async () => {
    try {
      let result = await axiosInstance.get("/products");

      console.log("products data =>", result.data);
      setProductsData(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log("product data api error", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) return <h1>Loading Users... </h1>;

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Our Products</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
