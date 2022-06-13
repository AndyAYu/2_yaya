import logo from './logo.svg';
import * as React from 'react';

const App = () => {
  const options = [
    {label: 'Sky' , value: 'sky' , color: 'lightblue'},
    {label: 'Land' , value: 'land' , color: 'brown' },
    {label: 'Sea' , value: 'sea' , color: 'navyblue' },
  ]
  const [value, setValue] = React.useState('sky');
  const [color, setColor] = React.useState('lightblue')

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  const handleColorChange = (event) => {
    debugger
    setColor(event.target.color);
    debugger
  };
  
  


  return (
    <div>
      <Dropdown
        label="What will we see?"
        options={options}
        value={value}
        color={color}
        onValueChange={handleValueChange}
        onColorChange={handleColorChange}
      />

      <p>We will see {value} animals! {color}</p>  
    </div>
  );
};

const Dropdown = ({ label, value, options, onValueChange}) => {
  return (
  <label>
        {label}
        <select value={value} onChange={onValueChange} >
          {options.map((option) => (
            <option 
            color={option.color}
            value={option.value}>
              {option.label}
            </option>
            ))}
        </select>
      </label>
  );
};

export default App;
