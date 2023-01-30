import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

export default function Cart() {
  const state = useSelector((state) => state);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: "15px",
        marginTop: "200px",
      }}
    >
      {state?.cart?.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}
