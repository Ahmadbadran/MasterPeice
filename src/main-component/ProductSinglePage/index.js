import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import ProductTabs from './alltab';
import Logo from '../../images/logo.svg'
import Footer from '../../components/footer';



const ProductSinglePage =(props) => {
    const { id } = useParams()

    
    const productsArray = api();
    const Allproduct = productsArray

    
    const {addToCart} = props;
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        setProduct(Allproduct.filter(Allproduct => Allproduct.id === Number(id)))
    }, []);
    
    const item = product[0];

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Product Single'} pagesub={'Product Single'}/> 
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {item ? <Product
                        item={item}
                        addToCart={addToCart}
                    /> : null}
                    <ProductTabs/>
                </div>
            </section>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);