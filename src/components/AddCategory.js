import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Alexandra Daddario');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                autoFocus
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Introduce el nombre de un artista, anime o lo que se te ocurra'
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}