import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListingPage from './page';
import DetailProducts from './page/DetailProducts';

ProductFeatures.propTypes = {
    
};
const useStyles = makeStyles((theme) =>({
    root:{
        backgroundColor : theme.palette.grey[100],
        padding : '60px'
    },
    
}))
function ProductFeatures(props) {
   const classes = useStyles();
    const math = useRouteMatch();
    return (
        <Box pt={4} className={classes.root}>
            <Switch>
                <Route path={math.url} exact component={ListingPage} />
                <Route path={`${math.url}/:productId`} component={DetailProducts} />
            </Switch>
        </Box>
    );
}

export default ProductFeatures;