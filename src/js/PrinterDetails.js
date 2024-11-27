import React from "react";
import { useParams } from "react-router-dom";
import '../css/PrinterDetails.css';

const PrinterDetails = () => {
  const { id } = useParams(); // Lấy ID máy in từ URL

  const printerDetails = {
    "H6-1": { name: "H6-1", type: "HP LaserJet Pro", status: "Active", location: "Building H6, Floor 1" },
    "H6-2": { name: "H6-2", type: "HP LaserJet Pro", status: "Active", location: "Building H6, Floor 2" },
    "H6-3": { name: "H6-3", type: "HP LaserJet Pro", status: "Offline", location: "Building H6, Floor 3" },
    "H3-1": { name: "H3-1", type: "HP LaserJet Pro", status: "Active", location: "Building H3, Floor 1" },
  };
  const printer = printerDetails[id];

  if (!printer) {
    return <div>Printer not found!</div>;
  }
  return (
    <div className="main-content">
      <div className="content">
    <h1 className='title'>Printer Management</h1>
    <div className="printer-details-container">
    <button className="modify-btn">Modify</button>
      <header className="printer-header">
      Printer H1-3
      </header>

      <div className="printer-info">
        <div className="printer-main-info">
        <h1>{printer.name} - Details</h1>
      <p>Type: {printer.type}</p>
      <p>Status: {printer.status}</p>
      <p>Location: {printer.location}</p>
        </div>
        
      </div>
      <div className="center-button">
          <button className="disable-printer-btn">Disable Printer</button>
          <button className="delete-printer-btn">Delete</button>
        </div>
    </div>
    </div>
    </div>
  );
};

export default PrinterDetails;
