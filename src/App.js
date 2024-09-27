import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { settext, additem } from './CreateSlice';

function App() {
  const newstate = useSelector((state) => state.text.items);
  const newtext = useSelector((state) => state.text.text);
  

  // Fix: Invoke useDispatch as a function
  const dispatch = useDispatch(); // Parentheses added here

  return (
    <div>
      <input
        type="text"
        value={newtext}
        onChange={(e) => dispatch(settext(e.target.value))}
      />
      <button onClick={() => dispatch(additem())}>Add Item</button>
     
      <ol>
        {newstate.map((item, index) => (
          <li key={index}>{item}</li> // key helps React optimize re-rendering
        ))}
      </ol>
    </div>
  );
}

export default App;
