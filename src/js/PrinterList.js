import React from 'react';
import { useNavigate } from "react-router-dom";
import PrinterItem from './PrinterItem';
import printerData from '../db/printer';
import '../css/PrinterList.css';

const PrinterList = () => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/printer/${id}`); // Chuyển hướng tới trang chi tiết
  };
  return (

    <div className="printer-list">
      {printerData.map((printer) => (
        <PrinterItem
          key={printer.id}
          onClick={() => handleCardClick(printer.id)}
          name={printer.name}
          status={printer.status}
          remain={printer.remain}
        />
      ))}
    </div>

  );
};

export default PrinterList;
