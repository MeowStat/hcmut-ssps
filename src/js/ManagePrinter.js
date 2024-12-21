
import React from 'react';
import SearchBar from './SearchBar';
import '../css/ManagePrinter.css';

function ManagePrinter() {
  return (
    <div className="main-content">
      <div className='content'>
      <h1 className='title'>Printer Management</h1>
      <SearchBar />
      </div>
      
    </div>
  );
}

export default ManagePrinter;