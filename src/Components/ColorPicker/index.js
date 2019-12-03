import React, {useRef} from 'react'
import PropTypes from 'prop-types';
import useColorControl  from './useColorControl'
import useOutsideClick from "./useOutsideClick";
import InputRange from '../InputRange/index'
import Button from '../Button/index'

const RANGE_DROP_DOWN_FLAG = 'RANGE_DROP_DOWN_FLAG';
const LIST_DROP_DOWN_FLAG = 'LIST_DROP_DOWN_FLAG';

export default function ColorPicker({value, onChange, colors}) {

    const { ranges, onRangeChange, colorPreview, generateHexColor, toggleName, onToggleButtonClick } = useColorControl(value)

    const ref = useRef();

    useOutsideClick(ref, () => onToggleButtonClick(null) );

    return (
        <div className="picker" ref={ref}>
            <span className='active-color'>{value} </span>
            <div className="controls">
                <div className='menu ranges-menu '>
                    <Button className='toggleButton colored-square'
                           onClick={() => onToggleButtonClick(RANGE_DROP_DOWN_FLAG)}
                           style={{background: colorPreview || value }}
                    />
                    {
                        toggleName === RANGE_DROP_DOWN_FLAG &&
                        <div className='dropdown-menu'>
                            {
                                [ 'r', 'g', 'b' ].map( (item) =>
                                    <div key={item} className='menu-item'>
                                        <InputRange
                                            className="color-slider"
                                            id={item}
                                            value={ranges[item]}
                                            handleChange={onRangeChange}
                                            label={item}
                                            min={0}
                                            max={255}
                                        />
                                    </div>
                                )
                            }
                            <div className='menu-item'>
                                <Button className={'button button-default'}
                                       onClick={onToggleButtonClick}>
                                    Cancel
                                </Button>
                                <Button className='button button-green'
                                       onClick={() => {
                                            onChange(generateHexColor());
                                            onToggleButtonClick()
                                       }}>
                                    Ok
                                </Button>
                            </div>
                        </div>
                    }
                </div>
                <div className='menu colors-menu'>
                    <Button className='toggleButton'
                           onClick={() => onToggleButtonClick(LIST_DROP_DOWN_FLAG )}>
                        <i className={` arrow ${ toggleName === LIST_DROP_DOWN_FLAG ? 'down' : 'right' }`}/>
                    </Button>
                    {
                        toggleName === LIST_DROP_DOWN_FLAG &&
                        <div className='dropdown-menu'>
                            {
                                colors.map( ({ title, color }) =>
                                    <div className={`menu-item ${ color === value ? 'active' : '' }`}
                                         key={color}
                                         onClick={() => {
                                             onChange(color);
                                             onToggleButtonClick(null)}
                                         }>
                                        <span>{title.toUpperCase()}</span>
                                        <span className='colored-square' style={{background: color}}/>
                                    </div>
                                )
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

ColorPicker.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    colors: PropTypes.array,
};
