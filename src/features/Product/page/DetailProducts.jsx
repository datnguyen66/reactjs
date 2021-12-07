import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import ProductThumnail from '../component/ProductThumnail';
import useProductDetail from '../hooks/useProductDetail';



const useStyle = makeStyles((theme) =>({
    root:{   
    },
    left:{
        width : '350px',
        borderRight : `1px soild ${theme.palette.grey[300]}`,
    },
    right:{
        flex : '1 1 0',
        padding: theme.spacing(1.5)
    },
}))

function DetailProducts() {
    const classes = useStyle();
    const {
        params: {productId}
    } = useRouteMatch();
    
    const {product} = useProductDetail(productId);

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}> 
                        <Paper >
                            <ProductThumnail product={product} /> 
                        </Paper >
                    </Grid>
                    <Grid item className={classes.right}> 
                        <Paper  >
                            Product Info
                        </Paper>
                        
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default DetailProducts;