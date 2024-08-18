import './App.css';
import Portal from './portal';
import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      <h1>Outside the portal</h1>
      <button type='button' onClick={handleOpen}>Open Portal</button>
      <Portal isOpen={open} onClose={handleClose}>
        <>
        <h1>Inside the portal</h1>
        <button type='button' onClick={handleClose} >Close</button>
        </>
      </Portal>
    </div>
  );
}

export default App;
