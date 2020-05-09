import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './itemStyle.css';

const ProductListItem = ({ name }) => {
    return (
        <div id='list'>
            <h2>{name}</h2>
        </div>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired
}

export default ProductListItem;
