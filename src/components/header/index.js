import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-2.svg";

import MobileMenu from "../../components/MobileMenu";
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
    // toast("wow!");
  };

  const { carts } = props;

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home4"
                  >
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/home4">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        About
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/service-s2">Service</Link>
                    </li>

                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/blog-left-sidebar">
                        Blog
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/shop">
                        Shop
                      </Link>
                    </li>

                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/Login">
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn"
                      >
                        <i
                          className={`fi ti-search ${
                            menuActive ? "ti-close" : "fi "
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? "header-search-content-toggle" : ""
                        }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="fi ti-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="mini-cart">
                    <button
                      className="cart-toggle-btn"
                      onClick={() => setcartState(!cartActive)}
                    >
                      {" "}
                      <i className="fi ti-shopping-cart"></i>{" "}
                      <span className="cart-count">{carts.length}</span>
                    </button>
                    <div
                      className={`mini-cart-content ${
                        cartActive ? "mini-cart-content-toggle" : ""
                      }`}
                    >
                      <button
                        className="mini-cart-close"
                        onClick={() => setcartState(!cartActive)}
                      >
                        <i className="ti-close"></i>
                      </button>
                      <div className="mini-cart-items">
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <div className="mini-cart-item clearfix" key={crt}>
                              <div className="mini-cart-item-image">
                                <span>
                                  <img src={catItem.proImg} alt="icon" />
                                </span>
                              </div>
                              <div className="mini-cart-item-des">
                                <p>{catItem.title} </p>
                                <span className="mini-cart-item-price">
                                  ${catItem.price} x {catItem.qty}
                                </span>
                                <span className="mini-cart-item-quantity">
                                  <button
                                    onClick={() =>
                                      props.removeFromCart(catItem)
                                    }
                                    className="btn btn-sm btn-danger"
                                  >
                                    <i className="ti-close"></i>
                                  </button>{" "}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">
                          Subtotal: <span> ${totalPrice(carts)}</span>
                        </span>
                        <div className="mini-btn">
                          <Link to="/checkout" className="view-cart-btn s1">
                            Checkout
                          </Link>
                          <Link to="/cart" className="view-cart-btn">
                            View Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, { removeFromCart })(Header);
