import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { 
    getProducts, 
    deleteProduct, 
    toggleAv, 
    searchProduct, 
    setPrintMod,
    setPrintItems
} from '../../actions/product';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './productStyle.css';
import xlsx from 'xlsx';

const Products = ({ product: {products, printMod}, getProducts, deleteProduct, toggleAv, searchProduct, setPrintMod, setPrintItems, history}) => {
    useEffect(() => {
        getProducts();
    }, [getProducts]);

    let productsToPrint = [];

    return (
        <div className='container'>
            <div style={{width: '100%', margin: '0 auto ', marginTop: '20px'}}>
                {!printMod && <input onChange={e => searchProduct(e.target.value)} className='form-control' type='text'  placeholder='Cauta' />}
                {printMod && <button style={{position: 'fixed', width: '200px', height: '70px', left: '5px', top: '100px'}} 
                className='btn btn-primary' onClick={e => {
                    setPrintItems(productsToPrint);
                    setPrintMod();
                    history.push('/printlist');
                }}>Print</button>}
            </div>
            {
                products.map(product => (
                <div id='product'>
                        <h1>{product.name}</h1>
                        <h3>Pret: {product.price} lei</h3>
                        <h3>Cod: {product.code}</h3>
                        <h3>{product.available ? 
                            <span style={{color: 'green'}}>Disponibil</span>: 
                            <span style={{color: 'red'}}>Nedisponibil</span>}
                        </h3>
                        {
                        !printMod ? 
                    <Fragment>
                        <Link to={`/product/${product._id}`} className='btn btn-primary'>Editeaza</Link>
                        <button onClick={() => deleteProduct(product._id)} className='btn btn-danger'>Sterge</button>
                        <button onClick={() => toggleAv(product._id)} className='btn btn-danger' className={`btn btn-${product.available? 'danger': 'success'}`}>{product.available ? 'Fa-l nedisponibil': 'Fa-l disponibil'}</button>
                    </Fragment>:
                   
                        <input style={{width: '30px', height: '30px'}} type='checkbox' onChange={e => {
                            if(e.target.checked) {
                                productsToPrint.push(product);
                            } else {
                                let index = productsToPrint.indexOf(product);

                                productsToPrint.splice(index, 1);
                            }
                        }}>

                        </input>
                    }
                 </div>
                )) 
            }
        </div>
    )
}

Products.propTypes = {
    product: PropTypes.object.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
    toggleAv: PropTypes.func.isRequired,
    searchProduct: PropTypes.func.isRequired,
    setPrintMod: PropTypes.func.isRequired,
    setPrintItems: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { getProducts, deleteProduct, toggleAv, searchProduct, setPrintMod, setPrintItems })(withRouter(Products));
