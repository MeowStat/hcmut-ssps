import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrinterItem from './PrinterItem';
import printerData from '../db/printer';
import '../css/PrinterList.css';
import '../css/SearchBar.css';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(''); // State để lưu giá trị tìm kiếm

  const handleAddPrinterClick = () => {
    navigate('new'); // Điều hướng đến trang thêm máy in
  };

  // Lọc danh sách máy in dựa trên giá trị tìm kiếm
  const filteredPrinters = searchTerm
    ? printerData.filter((printer) =>
        printer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        printer.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : printerData; // Hiển thị tất cả máy in nếu trường tìm kiếm trống

  return (
    <>
      <div className="search-bar">
        <div className='search-bar-input'> 
          <input
            type="text"
            className="search-input"
            placeholder="Search Printer by Name or ID"
            value={searchTerm} // Hiển thị giá trị tìm kiếm
            onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật giá trị tìm kiếm
          />
        </div>
        <button onClick={handleAddPrinterClick}>
          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03814 18.2083V13.8749H0.020874V7.70833C0.020874 6.94097 0.283041 6.29774 0.807374 5.77865C1.33171 5.25955 1.97232 5 2.72921 5H17.2708C18.0382 5 18.6814 5.25955 19.2005 5.77865C19.7196 6.29774 19.9791 6.94097 19.9791 7.70833V8.55198C19.6247 8.38677 19.2537 8.25695 18.8663 8.16252C18.479 8.06809 18.0854 8.02087 17.6854 8.02087C16.3674 8.02087 15.1663 8.3781 14.0823 9.09256C12.9982 9.8072 12.193 10.7624 11.6667 11.9582H5.66667V16.5833H11.3896C11.4814 16.8832 11.5948 17.1668 11.7301 17.4342C11.8655 17.7016 12.0214 17.9596 12.1978 18.2083H4.03814ZM4.04167 4.04152V0.125H15.9583V4.04152H4.04167ZM16.8228 18.5311V15.2811H13.5728V13.6561H16.8228V10.4061H18.4478V13.6561H21.6978V15.2811H18.4478V18.5311H16.8228Z" fill="white"/>
          </svg>  
          Add Printer
        </button>
      </div>

      {/* Danh sách máy in hiển thị */}
      <div className="printer-list">
        {filteredPrinters.map((printer) => (
          <PrinterItem
            key={printer.id}
            onClick={() => navigate(`${printer.id}`)}
            name={printer.name}
            status={printer.status}
            remain={printer.remain}
          />
        ))}
      </div>
    </>
  );
};

export default SearchBar;
