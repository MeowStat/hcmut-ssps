import React from 'react';
import PrinterItem from './PrinterItem';
import '../css/PrinterList.css';

const PrinterList = () => {
  const printers = [
    { name: 'H6-1', status: 'Active', remain: 200 },
    { name: 'H6-2', status: 'Active', remain: 200 },
    { name: 'H6-3', status: 'Offline', remain: 10 },
    { name: 'H3-1', status: 'Active', remain: 200 },
    { name: 'H6-2', status: 'Active', remain: 200 },
    { name: 'H6-3', status: 'Offline', remain: 10 },
    { name: 'H3-1', status: 'Active', remain: 200 },
    { name: 'H6-2', status: 'Active', remain: 200 },
    { name: 'H6-3', status: 'Offline', remain: 10 },
    { name: 'H3-1', status: 'Active', remain: 200 },
    { name: 'H6-2', status: 'Active', remain: 200 },
    { name: 'H6-3', status: 'Offline', remain: 10 },
    { name: 'H3-1', status: 'Active', remain: 200 },
    { name: 'H6-2', status: 'Active', remain: 200 },
    { name: 'H6-3', status: 'Offline', remain: 10 },
    { name: 'H3-1', status: 'Active', remain: 200 },
  ];

  return (

    <div className="printer-list">
      {printers.map((printer, index) => (
        <PrinterItem
          key={index}
          name={printer.name}
          status={printer.status}
          remain={printer.remain}
        />
      ))}
    </div>

  );
};

export default PrinterList;
