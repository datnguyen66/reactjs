import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import productApi from 'api/productsApi';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import ProductFilters from '../component/ProductFilters.jsx';
import ProductList from '../component/ProductList.jsx';
import ProductSkeletonList from '../component/ProductSkeletonList';
import ProductSort from '../component/ProductSort.jsx';
import queryString from 'query-string';

ListingPage.propTypes = {
    
};
const useStyle = makeStyles((theme) =>({
    root:{
   
    },
    left:{
        width : '250px',
    },
    right:{
        flex : '1 1 0'
    },
    pagination:{
        display: 'flex',
        flexFlow : 'row nowrap',
        justifyContent: 'center',
        marginTop: '20px',
        paddingBottom: '20px'
    }
}))
function ListingPage(props) {
    const classes = useStyle();

    const history = useHistory();
    const location = useLocation();
    const queryParams = queryString.parse(location.search)

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page : 1,
    });
    const [loading, setLoading] = useState(true);
    // const [filters, setFilters] = useState({
    //     _page:1, 
    //     _limit: 12,
    //     _sort: "salePrice:asc"
    // })
    const [filters, setFilters] = useState(() => ({
        ...queryParams,
        _page: Number.parseInt(queryParams._page) || 1, 
        _limit: Number.parseInt(queryParams._limit) || 12,
        _sort: queryParams._sort || "salePrice:asc"
        
    }))
    useEffect(() =>{
        history.push({
            pathname: history.location.pathname,
            search : queryString.stringify(filters),
        })
    }, [history, filters])
    useEffect(() =>{
        (async() =>{
            try {
                const {data, pagination} = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination)
            } catch (error) {
                console.log('failed', error);
            }
            setLoading(false);
        })();
    }, [filters]);
    const handlePageChange = (e, page) =>{
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: page,
        }))
    }
    const handleChangeSort = (newSortValue) =>{
        setFilters((prevFilters) => ({
            ...prevFilters,
            _sort: newSortValue,
        }))
    }
    const handleFilterChange = (newFilters) =>{
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }))
    
    }
    return (
        <Box className={classes.root}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}> 
                        <Paper elevation={3}>
                            <ProductFilters onChange={handleFilterChange} filters={filters}/>
                        </Paper >
                    </Grid>
                    <Grid item className={classes.right}> 
                        <Paper elevation={3} >
                            <ProductSort currentSort={filters._sort} onChange={handleChangeSort} />
                            {loading ? <ProductSkeletonList  /> : <ProductList data={productList} />}
                            <Box className={classes.pagination}>
                                <Pagination onChange={handlePageChange} color="primary" count={Math.ceil(pagination.total / pagination.limit)} page={pagination.page}></Pagination>
                            </Box>
                        </Paper>                        
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListingPage;