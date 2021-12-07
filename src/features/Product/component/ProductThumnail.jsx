import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import { STATIC_HOST } from 'constants/index';
import { THUMBNAIL_PLACEHODER } from 'constants/common';



const useStyle = makeStyles((theme) =>({
    img:{
        padding: theme.spacing(2),
        borderRight : `1px soild ${theme.palette.grey[300]}`,
    }
}))

ProductThumnail.propTypes = {
    product : PropTypes.object,
};

function ProductThumnail({product}) {
    const classes = useStyle();
    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHODER;
    return (
        <Box className={classes.img}>
            <img src={thumbnailUrl} width="100%" />
        </Box>
    );
}

export default ProductThumnail;