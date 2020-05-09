import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alert }) => {
    return (
        <div>
            {
                alert.map(al => (
                    <div key={al.id} style={{width: '80%', height: '60px', margin: '0 auto', marginTop: '20px', borderRadius: '10px', padding: '10px'}} className={`alert-${al.type}`}>
                        {al.msg}
                    </div>
                ))
            }
        </div>
    )
}

Alert.propTypes = {
    alert: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    alert: state.alert
});

export default connect(mapStateToProps)(Alert);
