import React from 'react';
import { useNavigate } from "react-router-dom";
import PrinterItem from './PrinterItem';
import '../css/PrinterList.css';

const PrinterList = () => {
  const navigate = useNavigate();
  const printers = [
    { id: "H6-1", name: "H6-1", remain: 200, status: "Active" },
    { id: "H6-2", name: "H6-2", remain: 200, status: "Active" },
    { id: "H6-3", name: "H6-3", remain: 10, status: "Offline" },
    { id: "H3-1", name: "H3-1", remain: 200, status: "Active" },
  ];
  const handleCardClick = (id) => {
    navigate(`/printer/${id}`); // Chuyển hướng tới trang chi tiết
  };
  return (

    <div className="printer-list">
      {printers.map((printer) => (
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
