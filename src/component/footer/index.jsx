import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor : '#3f51b5',
    },
    headerfooter:{
        display: 'flex',
        justifyContent : 'space-between',
        padding : '50px 140px 33px 140px',
        alignItems : 'center',
        borderBottom: '1px solid #fff',
       
    },
    iconfooter:{
        color : 'white',
        width : '55px'
    },
    nametext:{
        color : 'white',
        fontSize : '30px',
        fontWeight : '700'
    },
    mainfooter:{
        padding: '40px 0px 40px 140px',
        color :'white',
        fontSize : '16px',
    },
    foortertext:{
        padding : '8px 0px',

    },
    foortertexttitle:{
        padding : '8px 0px',
        fontWeight : '700',
    },
    footerfooter:{
        display :'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        padding : '40px 140px',
        color : "white "
    },
    text:{
        fontSize : '13px'
    },
    lefttext:{
        paddingRight :'28px',
        fontWeight :'500'
    }
}))
Footer.propTypes = {

};

function Footer(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.headerfooter}>
                <Typography className={classes.nametext}>Dat1</Typography>
                <Box>
                    <PinterestIcon className={classes.iconfooter}></PinterestIcon>
                    <FacebookIcon className={classes.iconfooter}></FacebookIcon>
                    <TwitterIcon className={classes.iconfooter}></TwitterIcon>
                </Box>
            </Box>
            <Box>
                <Grid container className={classes.mainfooter}>
                    <Grid item xs={3}>
                        <Grid className={classes.foortertexttitle} >Earn</Grid>
                        <Grid className={classes.foortertext}>Become an Affiliate</Grid>
                        <Grid className={classes.foortertext}>Open a Shop</Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid className={classes.foortertexttitle} >Resources</Grid>
                        <Grid className={classes.foortertext}>Blog</Grid>
                        <Grid className={classes.foortertext}>Collections</Grid>
                        <Grid className={classes.foortertext}>Community</Grid>
                        <Grid className={classes.foortertext}>Help Center</Grid>
                        <Grid className={classes.foortertext}>Licenses</Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid className={classes.foortertexttitle}>The Goods</Grid>
                        <Grid className={classes.foortertext}>Branding eBook</Grid>
                        <Grid className={classes.foortertext}>Free Goods</Grid>
                        <Grid className={classes.foortertext}>Gift Cards</Grid>
                        <Grid className={classes.foortertext}>Purchase Credits</Grid>
                        <Grid className={classes.foortertext}>Enterprise Sales</Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid className={classes.foortertexttitle}>Company</Grid>
                        <Grid className={classes.foortertext}>About</Grid>
                        <Grid className={classes.foortertext}>Brand</Grid>
                        <Grid className={classes.foortertext}>Careers</Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.footerfooter}>
                <Box>
                <Grid container>
                    <Grid item className={classes.lefttext}>Terms Conditions</Grid>    
                    <Grid item className={classes.lefttext}>Privacy Policy</Grid>    
                    <Grid item className={classes.lefttext}>CA Privacy Policy</Grid>    
                    <Grid item className={classes.lefttext}>Cookie Policy</Grid>    
                </Grid>
                </Box>
                <Typography className={classes.text}>© 2021 Creative Market, a Dribbble company. All rights reserved.</Typography>
            </Box>
        </Box>
    );
}

export default Footer;