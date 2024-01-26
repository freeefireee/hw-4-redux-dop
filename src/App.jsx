import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuComponent from './components/MenuComponent';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

const App = () => {
  return (
    <div>
      <MenuComponent />
      <Routes>
        <Route path="/component1" element={<Component1 />} />
        <Route path="/component2" element={<Component2 />} />
        <Route path="/component3" element={<Component3 />} />
      </Routes>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

export default App;
