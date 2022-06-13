import logo from './logo.svg';
import * as React from 'react';

const App = () => {
  return (
    <div>
      <label>
        What animals should we see?
        <select>
          <option value='Sky'>Sky</option>
          <option value='Land'>Land</option>
          <option value='Sea'>Sea</option>
        </select>
      </label>
    </div>
  );
}

export default App;
