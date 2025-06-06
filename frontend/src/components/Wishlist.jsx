import { Link } from "react-router-dom";
import { useWishlist } from "../context/WhishlistContext";
import { useState } from "react";

export default function Wishlist({ isOpen, toggleWishlist }) {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [isDeleted, setisDeleted] = useState("")


  return (
    <div
      className={`cart-content d-flex flex-column cart-fullscreen-mobile ${isOpen ? "open" : ""
        }`}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="btn close-cart " onClick={toggleWishlist}>
            <i className="d-flex bi bi-x"></i>
          </button>
          <span>
            <Link to="/wishlist" className="nav-link cart-link">
              View the wishlist
            </Link>
          </span>
        </div>

        <h5 className="mt-3 mb-3">Your Whishlist</h5>

        <div className="cart-items mt-3">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div
                key={item.sku}
                className="cart-item d-flex justify-content-between align-items-center mb-3"
              >
                <div className="d-flex flex-column flex-row align-items-start">
                  {/* Cerchietto con immagine */}
                  <div className="d-flex align-items-center">
                    <div
                      className="me-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "20%",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={`/assets/${item.image}`}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="d-flex flex-column justify-content-between h-100">
                      <span style={{ maxWidth: "150px" }}>{item.name}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <i className={isDeleted === item.sku ? "bi bi-heartbreak-fill delete-wish text-danger fs-4 fs-md-2 ms-3" : "bi bi-heartbreak delete-wish text-danger fs-4 fs-md-2 ms-3"}
                    onClick={() => removeFromWishlist(item.sku)}
                    onMouseOver={() => { setisDeleted(item.sku) }}
                    onMouseLeave={() => { setisDeleted("") }}></i>
                </div>
              </div>
            ))
          ) : (
            <p>Your Whishlist is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}
