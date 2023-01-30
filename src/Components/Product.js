import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToCart, removeToCart } from "./Redux/allActions/allActions";

export default function Product(props) {
  const { description, title, image,id} = props.product;

  const dispatch = useDispatch();
   let location = useLocation();
   let path = location.pathname;

  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={`${image}`} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        {path !== "/cart" ? (
          <Link
            to={`#`}
            onClick={() => dispatch(addToCart(props.product))}
            className="btn btn-primary"
          >
            Add To Cart
          </Link>
        ) : (
          ""
        )}
        {path === "/cart" ? (
          <Link
            to={`#`}
            onClick={() => dispatch(removeToCart(props.product))}
            className="btn btn-danger ms-5"
          >
            Remove
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

