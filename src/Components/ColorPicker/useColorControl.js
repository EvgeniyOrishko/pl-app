import {useState} from 'react'

export default function  useColorControl(startColor) {

    const [ toggleName, changeToggle ] = useState(null);
    const [ colorPreview, changeColorPreview ] = useState(null);
    const [ ranges, changeRanges ] = useState({r: 0, g: 0, b: 0});

    function onRangeChange (e){
        const { value, id } = e.target;
        changeRanges({...ranges, [id]:value});
        changeColorPreview( `rgb(${ranges.r}, ${ranges.g}, ${ranges.b})`);
    }

     function rgbToHex(rgb) {
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    }

     function generateHexColor(){
        const {r, g, b} = ranges;
         return `#${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`;
     }

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? changeRanges({
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
                })
            : null;
    }

    function onToggleButtonClick( name = null ) {
        changeToggle(name === toggleName ? null : name)
        changeColorPreview(null)
        hexToRgb(startColor)
    }

    return {
        ranges,
        onRangeChange,
        colorPreview,
        generateHexColor,
        toggleName,
        changeToggle,
        onToggleButtonClick,
        changeColorPreview
    }
}
