import React from 'react'
import PropTypes from 'prop-types';
import './styles.scss'

export default function Button ({className, onClick, style, disabled,children,  ...rest }) {
    return (
        <button {...{ className, onClick, style, disabled, ...rest }}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string
};
