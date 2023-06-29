import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ShopTabs from "./shoptabs";

import "./style.css";

const ShopSingle = () => {
  const [productDetails, setProductDetails] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/single/${_id}`); // Replace with your actual API endpoint
        setProductDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [_id]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="page-content">
      <div className="container">
        <div className="page-content-row">
          <div className="shop-page">
            <div className="row">
              <div className="col-lg-12">
                <div className="shop-page-details section-padding">
                  <div className="shop-items">
                    <div className="shop-item single">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="shop-img">
                            <img src={productDetails.shopImg} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="shop-info">
                            <h3>{productDetails.title}</h3>
                            <ul className="rating">
                              <li>
                                <span>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                            </ul>
                            <span className="review_count">
                              (3 Customer Reviews)
                            </span>
                            <div className="clearfix"></div>
                            <span className="price-num">
                              ${productDetails.price}
                            </span>
                            <div className="des">
                              <p>{productDetails.description}</p>
                            </div>
                            <form onSubmit={submitHandler}>
                              <button type="submit" className="btn-style2">
                                Add To Cart
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-area">
                      <ShopTabs />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSingle;
