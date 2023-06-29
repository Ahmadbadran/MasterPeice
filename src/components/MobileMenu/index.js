import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home4",
  },

  {
    id: 2,
    title: "About",
    link: "/about",
  },

  {
    id: 3,
    title: "Services",
    link: "/service-s2",
  },

  {
    id: 5,
    title: "Blog",
    link: "/blog-left",
  },
  {
    id: 88,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 100,
    title: "Login",
    link: "/login",
  },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          <div className="menu-close">
            <div className="clox" onClick={this.menuHandler}>
              <i className="ti-close"></i>
            </div>
          </div>

          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p onClick={this.setIsOpen(item.id)}>
                      {item.title}
                      {item.submenu ? (
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  ) : (
                    <Link onClick={ClickHandler} to={item.link}>
                      {item.title}
                    </Link>
                  )}
                  {item.submenu ? (
                    <Collapse isOpen={item.id === isOpen}>
                      <Card>
                        <CardBody>
                          <ul>
                            {item.submenu.map((submenu) => (
                              <li key={submenu.id}>
                                <Link
                                  onClick={ClickHandler}
                                  className="active"
                                  to={submenu.link}
                                >
                                  {submenu.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </CardBody>
                      </Card>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <button type="button" className="navbar-toggler open-btn">
            <span className="icon-bar first-angle"></span>
            <span className="icon-bar middle-angle"></span>
            <span className="icon-bar last-angle"></span>
          </button>
        </div>
      </div>
    );
  }
}
