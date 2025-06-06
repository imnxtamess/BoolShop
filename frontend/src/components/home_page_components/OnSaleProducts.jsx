import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";

export default function OnSaleProducts() {
  const [onSaleSneakers, setOnSaleSneakers] = useState({
    state: "loading",
  });
  useEffect(() => {
    fetch(`${API_URL}/boolshop/api/v1/shoes/sale`)
      .then((res) => res.json())
      .then((data) => {
        setOnSaleSneakers({
          state: "success",
          result: data,
        });
      })
      .catch((err) => {
        setOnSaleSneakers({
          state: "error",
          message: err.message,
        });
        console.error(err);
      });
  }, []);

  console.log(onSaleSneakers);
  switch (onSaleSneakers.state) {
    case "loading":
      return (
        <h1>Loading...{/* Create a loader component to replace this */}</h1>
      );
    case "error":
      return (
        <>
          <h1>Error loading products</h1>
          <p>{onSaleSneakers.message}</p>
        </>
      );
    case "success":
      const images = JSON.parse(onSaleSneakers.result[6].image_urls);
      return (
        <>
          <section className="on-sale-displayer container my-5">
            <div className="row pt-5">
              <div className="col-12 col-lg-6">
                <div className="superbold-title mb-5 d-flex flex-column align-items-start">
                  <span className="d-block newest-superbold">CHECK THE</span>
                  <span
                    className="d-block newest-superbold ps-3"
                    style={{ fontSize: "8rem", color: "var(--main-secondary)" }}
                  >
                    BEST DEALS
                  </span>
                  <p className="mt-5 text-muted" style={{ fontSize: "1.5rem" }}>
                    Discover unbeatable deals on top-tier sneakers, carefully
                    selected to upgrade your collection without the high price
                    tag. Explore discounted favorites, limited-time offers, and
                    must-have styles at prices you won't believe. Don't miss the
                    chance to score big on the best in footwear.
                  </p>
                  <Link
                    className="align-self-start"
                    to={"/all-products?onsale=true"}
                  >
                    <button className="btn btn-main-light p-3 mt-5">
                      <i className="bi bi-arrow-right"></i> Explore all our Deals
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <Link to={"/all-products?onsale=true"}>
                  <img className="img-fluid" src="./sale.jpg" alt="" />
                </Link>
              </div>
            </div>
          </section>
        </>
      );
  }
}
