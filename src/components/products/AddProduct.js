import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAlert } from '../../actions/alert';
import axios from 'axios';

const AddProduct = ({ addAlert }) => {

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        code: '',
        available: false
    });

    const submit = async e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify(formData);

        try {
            await axios.post('https://myproductsapp.herokuapp.com//products', body, config);

            console.log(body);

            addAlert('Produsul a fost introdus', 'success');
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors) {
                errors.forEach(error => {
                    addAlert(error.msg, 'danger');
                });
            }
        }
    }

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const { name, price, code, available } = formData;

    return (
        <div className='container' style={{marginTop: '50px'}}>
            <h1 style={{color: '#20b2aa'}}>Adauga un nou produs</h1>
            <form onSubmit={e => submit(e)}>
                <div className='form-group'>
                    <label for='name'>Nume</label>
                    <input className='form-control' value={name} onChange={e => onChange(e)} type='text' id='name' name='name' />
                </div>

                <div className='form-group'>
                    <label for='price'>Pret</label> <br></br>
                    <input className='form-control' value={price} onChange={e => onChange(e)} type='text' id='price' name='price' />
                </div>

                <div className='form-group'>
                    <label for='code'>Cod</label> <br></br>
                    <input className='form-control' value={code} onChange={e => onChange(e)} type='text' id='code' name='code' /> 
                </div>

                <div className='form-group'>
                    <input className='form-check-input' value={available} onChange={e => setFormData({...formData, available: e.target.checked})} type='radio' id='available' name='available' />
                    <label className='form-check-label' for='available'>Disponibil</label> <br></br>

                    <input className='form-check-input' value={available} onChange={e => setFormData({...formData, available: !e.target.checked})} type='radio' id='not_available' name='available' />
                    <label className='form-check-label' for='not_available'>Nedisponibil</label>
                </div>

                <input type='submit' className='btn btn-primary' />
            </form>
        </div>
    )
}

AddProduct.propTypes = {
    addAlert: PropTypes.func.isRequired
}

export default connect(null, { addAlert })(AddProduct);
