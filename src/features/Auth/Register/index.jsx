import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from '../userSlice';
import PropTypes from 'prop-types';
Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async(values) =>{
        
        try {
            // set username = email 
            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            
            // closedialog
            const {closeDialog} = props;
            if(closeDialog){
                closeDialog();
            }
            // do something here on register     succesfully 
            enqueueSnackbar('Thành Công rồi heheh', {variant: 'success'})
            console.log('new user', user);
        } catch (error) {
            console.log('faild', error);
            enqueueSnackbar('Đăng ký chưa thành công', {variant: 'error'})
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;