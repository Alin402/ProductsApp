import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux';
import { setPrintMod } from '../../actions/product';

const Navbar = ({ history, setPrintMod }) => {
    return (
        <div id='navbar' className='fixed-top'>
            <ul>
                <li className='nav-item'>
                    <div className='dropdown'>
                        <button className='btn btn-warning dropdown-toggle' data-toggle='dropdown'>Produse</button>

                        <div className='dropdown-menu'>
                            <Link to='/'><button className='btn btn-link' style={{height: '100%'}}>Toate Produsele</button></Link>
                            <Link to='/productlist'><button className='btn btn-link' style={{height: '100%'}}>Liste</button></Link>
                        </div>
                    </div>
                </li>

                <li className='nav-item'>
                    <Link to='/product/add'><button className='btn btn-warning' style={{height: '100%'}}>Adauga</button></Link>
                </li>

                <li className='nav-item'>
                    <button onClick={() => {
                       history.push('/');
                       setPrintMod();
                    }} className='btn btn-warning' style={{height: '100%'}}>Printeaza Preturi</button>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    setPrintMod: PropTypes.func.isRequired
}

export default connect(null, { setPrintMod })(withRouter(Navbar));
