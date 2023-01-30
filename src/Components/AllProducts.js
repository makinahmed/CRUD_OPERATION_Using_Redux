import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "./Product";
import {
  toggleElectronics,
  toggleJewelery,
  toggleMen,
  toggleWomen,
} from "./Redux/allActions/allActions";

export default function AllProducts() {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const state = useSelector((state) => state);

  console.log(state,'STATEEEEEEEEEEEEEEEE');

  return (
    <div className="products-container" style={{ marginTop: "200px" }}>
      <div style={{ margin: "50px 50px 50px", textAlign: "center" }}>
        <Link
          to="#"
          className={`btn ${
            state.filter.filter.includes("WOMEN") ? "btn-primary" : ""
          }`}
          onClick={() => dispatch(toggleWomen("WOMEN"))}
        >
          Women's clothing
        </Link>
        <Link
          to="#"
          className={`btn ${
            state.filter.filter.includes("MEN") ? "btn-primary" : ""
          }`}
          onClick={() => dispatch(toggleMen("MEN"))}
        >
          Men's clothing
        </Link>
        <Link
          to="#"
          className={`btn ${
            state.filter.filter.includes("ELECTRONICS") ? "btn-primary" : ""
          }`}
          onClick={() => dispatch(toggleElectronics("ELECTRONICS"))}
        >
          Electronics
        </Link>
        <Link
          to="#"
          className={`btn ${
            state.filter.filter.includes("JEWELERY") ? "btn-primary" : ""
          }`}
          onClick={() => dispatch(toggleJewelery("JEWELERY"))}
        >
          Jewelery
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "15px",
        }}
      >
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
