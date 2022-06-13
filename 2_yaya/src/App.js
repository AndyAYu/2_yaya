import logo from './logo.svg';
import * as React from 'react';

const App = () => {
  const options = [
    {label: 'Sky' , value: 'sky' },
    {label: 'Land' , value: 'land' },
    {label: 'Sea' , value: 'sea' },
  ]
  const [value, setValue] = React.useState('sky');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        What animals should we see?
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <p>We will see {value} animals!</p>
    </div>
  );
}

export default App;
