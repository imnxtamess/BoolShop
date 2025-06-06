import { Link } from "react-router-dom";
import MostPopular from "../components/home_page_components/MostPopular";
import PopularProducts from "../components/home_page_components/PopularProducts";
import { useCart } from "../context/CartContext";
import IncreaseDecrease from "../components/IncreaseDecrease";

export default function CartPage() {
  const { cart, removeItem, total } = useCart();

  return (
    <div className="cart-page my-4 container">
      {/* Carrello */}
      <h1 className="fs-3 fs-md-2 fw-bold">Your Cart</h1>
      {cart.length > 0 ? (
        <div
          className="cart-items mb-4 rounded-3 p-4"
          style={{ backgroundColor: "var(--bs-secondary)" }}
        >
          {cart.map((item) => (
            <div key={item.sku} className="cart-item card mb-2">
              <div className="card-body d-flex align-items-center">
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center">
                    {/* Cerchietto con immagine */}
                    <div
                      className="me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
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
                    <h6>{item.name}</h6>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                    <span className="mb-2 mb-md-0" style={{ width: "150px" }}>
                      Price: {Number(item.price).toFixed(2)} €
                    </span>
                    <IncreaseDecrease item={item} />
                  </div>
                </div>
                <span className="mb-0">
                  Total: {(item.price * item.quantity).toFixed(2)} €
                </span>
                <button
                  className="btn btn-sm btn-danger ms-3"
                  onClick={() => removeItem(item.sku)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          ))}

          {/* Totale */}
          <div className="cart-total d-flex justify-content-between align-items-center text-light mt-3">
            <h5 className="m-0">Total: {total.toFixed(2)}€</h5>
            <Link
              to="/checkout"
              className={`btn btn-main-light mt-3 mb-3 ${
                cart.length > 0 ? "" : "disabled"
              }`}
            >
              Go to checkout
            </Link>
          </div>
        </div>
      ) : (
        <div
          className="cart-items mb-4 container rounded-3 p-4 d-flex align-items-center justify-content-between"
          style={{ backgroundColor: "var(--bs-secondary)" }}
        >
          <h3 className="text-light m-0">Your cart is empty!</h3>
          <Link
            type="button"
            to={"/all-products"}
            className="btn btn-main-light"
          >
            All shoes
          </Link>
        </div>
      )}

      {/* Hero Section */}
    </div>
  );
}
