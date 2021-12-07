import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort : PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({currentSort, onChange}) {
    const handleCurrentSort = (e, newValue) => {
        if(onChange) onChange(newValue)
    }
    return (
        <Tabs
            value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleCurrentSort}
            aria-label="disabled tabs example"
        >
            <Tab label="Giá thấp tới cao" value="salePrice:asc"> </Tab>
            <Tab label="Giá cao tới thấp" value="salePrice:desc"> </Tab>    
        </Tabs>
    );
}

export default ProductSort;