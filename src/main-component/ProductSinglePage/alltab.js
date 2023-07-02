import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

import rv1 from "../../images/360_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg";
import rv2 from "../../images/shop/shop-single/review/img-2.jpg";

const ProductTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/reviews")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  const handleSubmitReview = (event) => {
    event.preventDefault();

    const reviewData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      rating: event.target.elements.rating.value,
      comment: event.target.elements.comment.value,
    };

    axios
      .post("http://localhost:8800/api/reviews", reviewData)
      .then((response) => {
        setReviews([...reviews, response.data]);
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });
  };

  return (
    <div className="row">
      <div className="col col-xs-12">
        <div className="product-info">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  setActiveTab("1");
                }}
              >
                Description
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  setActiveTab("2");
                }}
              >
                Review
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <div id="Schedule">
                    <p>
                      Samsa woke from troubled dreams, he found himself
                      transformed in his bed into a horrible vermin. He lay on
                      his armour-like back, and if he lifted his head a little
                      he could see his brown belly, slightly domed and divided
                      by arches into stiff sections. The bedding was hardly able
                      to cover it and seemed ready to slide off any moment. His
                      many legs, pitifully thin compared with the size of the
                      rest of him.
                    </p>
                    <p>
                      The bedding was hardly able to cover it and seemed ready
                      to slide off any moment. His many legs, pitifully thin
                      compared with the size of the rest of himSamsa woke from
                      troubled dreams, he found himself transformed in his bed
                      into a horrible vermin.
                    </p>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <div className="row">
                <div className="col col-lg-10 col-12">
                  {reviews.map((review) => (
                    <div className="client-rv" key={review._id}>
                      <div className="client-pic">
                        <img src={rv1} alt="" />
                      </div>
                      <div className="details">
                        <div className="name-rating-time">
                          <div className="name-rating">
                            <div>
                              <h4>{review.name}</h4>
                            </div>
                            <div className="product-rt">
                              <span>{review.date}</span>
                              <div className="rating">
                                {Array(review.rating).fill(
                                  <i className="fa fa-star"></i>
                                )}
                                {Array(5 - review.rating).fill(
                                  <i className="fa fa-star-o"></i>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review-body">
                          <p>{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="client-rv">
                    <div className="client-pic">
                      <img src={rv2} alt="" />
                    </div>
                    <div className="details">
                      <div className="name-rating-time">
                        <div className="name-rating">
                          <div>
                            <h4>Maria Bannet</h4>
                          </div>
                          <div className="product-rt">
                            <span>28 Sep 2021</span>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="review-body">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-lg-12 col-12 review-form-wrapper">
                  <div className="review-form">
                    <h4>Add a review</h4>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form onSubmit={handleSubmitReview}>
                      <div className="give-rat-sec">
                        <p>Your rating *</p>
                        <div className="give-rating">
                          <label>
                            <input type="radio" name="rating" value="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="rating" value="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="rating" value="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="rating" value="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="rating" value="5" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name *"
                          name="name"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email *"
                          name="email"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          className="form-control"
                          placeholder="Review *"
                          name="comment"
                        ></textarea>
                      </div>
                      <div className="rating-wrapper">
                        <div className="submit">
                          <button type="submit" className="theme-btn-s2">
                            Post review
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
