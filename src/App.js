import React, {useState} from 'react';
import './App.scss';
import  ColorPicker from './Components/ColorPicker/index'

const colors = [
    {title: 'red', color: '#ff0000'},
    {title: 'yellow', color: '#ffff00'},
    {title: 'green', color: '#008000'},
    {title: 'blue', color: '#0000ff'}];

function App() {

  const [ color, setColor ] = useState('#ff0000' );

  return (
    <div className="App">
      <div className="wrapper-picker">
         <ColorPicker
          value={color}
          onChange={setColor}
          colors={colors}
        />
      </div>
    </div>
  );
}

export default App;
