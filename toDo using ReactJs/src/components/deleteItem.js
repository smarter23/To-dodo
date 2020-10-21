import React from 'react';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.
*/
const deleteItem = props => {
    const handleDeleteLastItem = event => {
        props.onDeleteLastItem();
    };

    return (
        <button onClick={handleDeleteLastItem} disabled={props.noItemsfind}>
            Delete Last Item
        </button>
    );
};

deleteItem.propTypes = {
    buttonDisabled: PropTypes.func.isRequired,
    onDeleteLastItem: PropTypes.func.isRequired,
};

export default deleteItem;
