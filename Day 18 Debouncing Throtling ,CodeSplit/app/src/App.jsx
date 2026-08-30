import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  const [searchData, setSearchData] = useState(null);
  const [productsData, setProductsDAta] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const allProducts = useRef([]);
  const throttle = useRef(false);

  useEffect(() => {
    let cancelled = false;

    const loadProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      if (cancelled) return;

      allProducts.current = res.data;
      setProductsDAta(res.data);
    };

    void loadProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  // Throttling
  useEffect(() => {
    const handleScroll = () => {
      if (throttle.current) return;
      throttle.current = true;

      console.log("Scroll triggering...");
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle.current = false;
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Debouncing

  useEffect(() => {
    if (!searchData) return;

    const timeout = setTimeout(() => {
      const query = searchData.toLowerCase();
      setProductsDAta(
        allProducts.current.filter((product) =>
          product.title.toLowerCase().includes(query),
        ),
      );
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchData]);

  return (
    <div>
      <h1>Debouncing... </h1>
      <p>Scroll position: {scrollY}</p>

      <input
        className="p-2 border "
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
        type="text"
        placeholder="Search Products"
      />

      <div>
        {productsData.map((val) => {
          return <h3 key={val.id}>{val.title} </h3>;
        })}
      </div>
    </div>
  );
}

export default App;
