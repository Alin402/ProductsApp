import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getProductsForList } from '../../actions/product';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';

const ProductList = ({ product: { productsList }, getProductsForList }) => {
    useEffect(() => {
        getProductsForList();
    }, [productsList]);
    return (
       <div className='container'>
           {
               productsList.length > 0 ? (
               <h1 style={{marginTop: '20px'}}>Iti lipsesc:</h1>
               ): <h1>Toate produsele sunt disponibile</h1>
           }
           {
               productsList.map((product, index) => 
                 <ProductListItem name={product.name} key={index} />
               )
           }
        </div>
    )
}

ProductList.propTypes = {
    product: PropTypes.object.isRequired,
    getProductsForList: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { getProductsForList })(ProductList);
