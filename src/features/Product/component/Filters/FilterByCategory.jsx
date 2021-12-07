import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) =>({
    root:{
        padding: theme.spacing(2),
    },
    menu:{
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        '&>li':{
            marginTop: theme.spacing(1),
            '&:hover':{
                color: theme.palette.primary.main,
                cursor: 'pointer',
            },
        },
    },
    
}))
function FilterByCategory() {
    const classes = useStyles();
    return (
        <Box className={classes.root}> 
            <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>  
            <ul className={classes.menu}>
                <li><Typography variant="body2"> Thời trang</Typography></li>
                <li><Typography variant="body2">Khẩu trang</Typography></li>
                <li><Typography variant="body2">Làm đẹp</Typography></li>
                <li><Typography variant="body2">Laptop</Typography></li>
                <li><Typography variant="body2">Điện Thoại</Typography></li>
            </ul>
        </Box>
    );
}

export default FilterByCategory;