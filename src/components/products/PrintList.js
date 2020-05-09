import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PrintItem from './PrintItem';

const PrintList = ({ product: { printItems } }) => {
    return (
        <Fragment>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                {printItems.length > 0 ? <button style={{width: '400px', height: '60px'}} className='btn btn-primary' onClick={e => {
                    window.print();
                }}>Print</button>: (<h1>Nu ati selectat niciun produs</h1>)}
            </div>
            <div style={{marginTop: '50px'}}>
            {
                printItems.map((printItem, index) => (
                    <PrintItem key={index} name={printItem.name} price={printItem.price} code={printItem.code} />
                ))
            }
            </div>
        </Fragment>
    )
}

PrintList.propTypes = {
    product: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps)(PrintList);
