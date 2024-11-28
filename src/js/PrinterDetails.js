import React from "react";
import { useParams } from "react-router-dom";
import printerData from '../db/printer';
import '../css/PrinterDetails.css';

const PrinterDetails = () => {
  const { id } = useParams(); // Lấy ID máy in từ URL

  const printer = printerData.find((printer) => printer.id === id);
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
      Printer {printer.name}
      </header>

      <div className="printer-info">
        <div className="printer-main-info">
              <p>ID: {printer.id}</p>
              <p>Name: {printer.name}</p>
              <p>Type: {printer.type}</p>
              <p>Status: {printer.status}</p>
              <p>
                Location: {printer.location.building}, Floor{" "}
                {printer.location.floor}
              </p>
              <p>
                Paper Tray Status: {printer.paperTrayStatus.remainingPages}{" "}
                {printer.paperTrayStatus.paperSize} pages remaining
              </p>
              <p>
                Error Alerts:{" "}
                {printer.errorAlerts ? printer.errorAlerts : "None"}
              </p>
              <p>
                Description:{" "}
                {printer.description
                  ? printer.description
                  : "No description available"}
              </p>
              <p>IPv4 Address: {printer.network.ipv4Address}</p>
              <p>Connection Speed: {printer.network.connectionSpeed}</p>
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
