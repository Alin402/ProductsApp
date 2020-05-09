import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../../actions/product';
import { connect } from 'react-redux';

const Product = ({ product: { product, loading }, getProduct, match }) => {
    useEffect(() => {
        getProduct(match.params.id);
    }, []);
    return loading || !product ? <h2>Loading...</h2> : (
        <div className='container'>
            <h1>
                {product.name}
            </h1>

            <h2>
                {product.price}
            </h2>

            <h2>
                {product.code}
            </h2>

            {
                product && product.available? (
                    <span style={{color: 'green'}}><h2>Disponibil</h2></span>
                ) : (
                    <span style={{color: 'red'}}><h2>Nedisponibil</h2></span>
                )
            }
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { getProduct })(Product);


