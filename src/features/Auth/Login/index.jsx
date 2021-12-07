import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import { login, } from '../userSlice';
Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async(values) =>{
        
        try {
            // set username = email 
            
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            
            // closedialog
            const {closeDialog} = props;
            if(closeDialog){
                closeDialog();
            }
            // do something here on register     succesfully 
            console.log('new user', user);
        } catch (error) {
            console.log('faild', error);
            enqueueSnackbar('error', {variant: 'error'})
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;