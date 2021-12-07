import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPince from './Filters/FilterByPince';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({filters, onChange}) {
    const handleChangeCategory = (newCategoryId) => {
        if (!onChange) return;
        const newFilters = {
            "category.id" : newCategoryId,
        };
        onChange(newFilters);
    };
    const handlePriceChange = (values) =>{
        console.log(values);
        if(onChange) {
            onChange(values);
        }
    };
    const handleChange = (values) =>{
        console.log(values);
        if(onChange) {
            onChange(values);
        }
    }
    return (
        <Box>
            <FilterByCategory onChange={handleChangeCategory}/>
            <FilterByPince onChange={handlePriceChange} />
            <FilterByService filters={filters} onChange={handleChange}/>
        </Box>
    );
}

export default ProductFilters;