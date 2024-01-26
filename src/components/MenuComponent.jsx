import React from 'react';
import { Link } from 'react-router-dom';
import './menucomponent.css';

const MenuComponent = () => {
  return (
    <div className='menu'>
      <Link to="/component1"><h2 className='menuu'>Component 1</h2></Link>
      <Link to="/component2"><h2 className='menuu'>Component 2</h2></Link>
      <Link to="/component3"><h2 className='menuu'>Component 3</h2></Link>
    </div>
  );
};

export default MenuComponent;
