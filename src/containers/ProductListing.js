import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from './Redux/Action/productActions';

const ProductListing = () => {
    const products = useSelector(state => state)
    const dispatch=useDispatch()
    console.log(products);

    const fetchProducts=async()=>{
        const response =await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log("Err",err);
        })
    dispatch(setProducts(response.data));
    }
    // console.log("products:",products);
    useEffect(()=>{
      fetchProducts()
    },[])
    return (
        <div className="ui grid container">
            <ProductComponent></ProductComponent>
        </div>
    );
};

export default ProductListing;