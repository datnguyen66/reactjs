import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'component/form-control/InputField';
import PasswordField from 'component/form-control/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';  
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const useStyles = makeStyles((theme) =>({
    root: {
        paddingTop : theme.spacing(2),
    },
    avatar:{
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title:{
        textAlign: 'center',
        margin : theme.spacing(2, 0, 3, 0 ),
    },
    submit :{
        margin: theme.spacing(2, 0, 2, 0),
    },
    loginform:{
        width: theme.spacing(51),
    }

}))

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};


function LoginForm(props) {
    const schema = yup.object().shape({
        
        identifier : yup.string().email('vui lòng nhập đúng email').required('vui lòng điển vào email'),
        password: yup.string().required('vui lòng nhập vào password').min(6, 'vui lòng nhập hơn 6 ký tự'),
        
      });

    const classes = useStyles();
    const form = useForm({
        defaultValues : {            
            identifier : '',
            password: '',
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = async (values) => {
        const {onSubmit} = props;
        if(onSubmit){
            await onSubmit(values);
        }

    }

    const {isSubmitting} = form.formState;
    return (
        
        <div className={classes.root}>
                {isSubmitting && <LinearProgress/> }
            <Avatar className={classes.avatar}> 
                <LockOutlined>

                </LockOutlined>
            </Avatar>
            <Typography className={classes.title}> 
                Sign In  
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)} className={classes.loginform}>
            <InputField form={form} name="identifier" label="Email" />
            <PasswordField form={form} name="password" label="Pass Word" />
            <Button disabled = {isSubmitting}  type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
                Sign In
            </Button>
            </form>
        </div>
    );
}

export default LoginForm;