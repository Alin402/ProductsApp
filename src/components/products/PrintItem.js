import React from 'react';
import PropTypes from 'prop-types';
import './PrintItem.css';

const PrintItem = ({
    name, 
    price,
    code
}) => {
    return (
        <div id='item'>
            <div id='top'>
                <h2>{name}</h2>
            </div>

            <div id='middle'>
                <div id='left'>
                    <h1>{code}</h1>
                </div>

                <div id='right'>
                    <h1>Lei: {price}</h1>
                </div>
            </div>

            <div style={{paddingBottom: '5px'}}>
                <h4>SC CAAN IMPEX SRL</h4>
            </div>
        </div>
    )
}

PrintItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    code: PropTypes.number.isRequired
}

export default PrintItem;
