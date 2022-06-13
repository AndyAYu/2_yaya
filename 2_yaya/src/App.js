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
      <Dropdown
        label="What will we see?"
        options={options}
        value={value}
        onChange={handleChange}
      />

      <p>We will see {value} animals!</p>  
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange}) => {
  return (
  <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
            ))}
        </select>
      </label>
  );
};

export default App;
