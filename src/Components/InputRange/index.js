import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import './styles.scss'

export default function InputRange ({ value, handleChange, label, id, ...props }) {
    return (
            <Fragment >
                <label htmlFor={id}>{label}</label>
                <input
                       onChange={handleChange}
                       value={value}
                       type="range"
                       id={id}
                       {...props}
                />
            </Fragment>
    )
}

InputRange.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
};
