import React from "react";
import { useParams } from "react-router-dom";
import printerData from '../db/printer';
import printerImg from '../assets/img/pngwing.com.png'
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
        <table>
          <tr>
            <th>ID:</th>
            <td>{printer.id}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td id="printer-name">{printer.name}</td>
          </tr>
          <tr>
            <th>Status:</th>
            <td id="printer-status" className={printer.status}>{printer.status}</td>
          </tr>
          <tr>
            <th>Type:</th>
            <td>{printer.type}</td>
          </tr>
          <tr>
            <th>Location:</th>
            <td>{printer.location.building}, Floor {printer.location.floor}</td>
          </tr>
          <tr>
            <th>Paper Tray Status:</th>
            <td><span id="paper-remain">{printer.paperTrayStatus.remainingPages}</span>{" "}
            {printer.paperTrayStatus.paperSize} pages remaining</td>
          </tr>
          <tr>
            <th>Error Alerts:</th>
            <td id="printer-error" className={`${printer.errorAlerts ? "error-text" : ""}`}>
              {printer.errorAlerts ? printer.errorAlerts : "None"}
            </td>
          </tr>
          <tr>
            <th>Description:</th>
            <td className={`${printer.description ? "" : "empty-description"}`}>
                {printer.description
                  ? printer.description
                  : "No description available"}</td>
          </tr>
          <tr>
            <th>IPv4 address:</th>
            <td>{printer.network.ipv4Address}</td>
          </tr>
          <tr>
            <th>Connection Speed:</th>
            <td>{printer.network.connectionSpeed}</td>
          </tr>
        </table>
        
        </div>
        <img id="printer-img" src={printerImg}></img>
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
