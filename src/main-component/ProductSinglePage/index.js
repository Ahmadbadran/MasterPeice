import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import { addToCart } from "../../store/actions/action";
import Product from "./product";
import axios from "axios";
import ProductTabs from "./alltab";
import Logo from "../../images/logo.svg";
import Footer from "../../components/footer";

const ProductSinglePage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/products/single/${id}`
      );
      const data = response.data;
      setProduct(data);
    } catch (error) {
      console.log("Failed to fetch product", error);
    }
  };

  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={`hello `} pagesub={"Product Single"} />
      <section className="wpo-shop-single-section section-padding">
        <div className="container">
          {product ? <Product item={product} addToCart={addToCart} /> : null}
          <ProductTabs />
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart })(ProductSinglePage);
