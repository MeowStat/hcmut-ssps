import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import printerData from '../db/printer';
import printerImg from '../assets/img/pngwing.com.png';
import '../css/EditPrinterDetails.css';

const EditPrinterDetails = () => {
  const { id: paramsId } = useParams();
  const navigate = useNavigate();
  const printer = printerData.find((printer) => printer.id === paramsId);

  // Thêm useState để quản lý ID, Network Configuration và các thông tin khác
  const [id, setId] = useState(printer?.id || "");
  const [name, setName] = useState(printer?.name || "");
  const [type, setType] = useState(printer?.type || "");
  const [location, setLocation] = useState(printer?.location || { building: "", floor: "" });
  const [description, setDescription] = useState(printer?.description || "");
  const [paperTrayStatus, setPaperTrayStatus] = useState(printer?.paperTrayStatus || { remainingPages: 0, paperSize: "" });
  const [ipv4Address, setIpv4Address] = useState(printer?.network?.ipv4Address || "");

  if (!printer) {
    return <div>Printer not found!</div>;
  }

  const handleSave = () => {
    const updatedPrinter = {
      ...printer,
      id, // Thêm ID
      name,
      type,
      location,
      description,
      paperTrayStatus,
      network: { ipv4: ipv4Address },
    };
    console.log("Updated Printer:", updatedPrinter);
    navigate(`/printer/${paramsId}`);
  };

  return (
    <div className="main-content">
      <div className="content">
        <h1 className='title'>Printer Management</h1>
        <div className="edit-printer-container">
          <div className="printer-background">
            <img src={printerImg} alt="Printer" />
          </div>
          <h1 className="title2">Edit Printer Details</h1>
          <p className="note">
            Make changes to the printer's details and preferences. <br />
            Fields marked with an asterisk <span class="text-style-1">(*)</span> are required.
          </p>
          <span className="title3">Printer Details</span>
          <div className="form-container">
            {/* ID Input */}
            <div className="form-group">
              <label htmlFor="printer-id">ID:</label>
              <input
                type="text"
                id="printer-id"
                value={id}
                onChange={(e) => setId(e.target.value)} // Gán giá trị thông qua onChange
              />
              <span className="required">(*)</span>
            </div>
            <div className="form-group">
              <label htmlFor="printer-name">Name:</label>
              <input
                type="text"
                id="printer-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="required">(*)</span>
            </div>
            <div className="form-group">
              <label htmlFor="printer-type">Type:</label>
              <input
                type="text"
                id="printer-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <span className="required">(*)</span>
            </div>
            <div className="form-group">
              <label htmlFor="printer-location">Location:</label>
              <textarea
                id="printer-location"
                value={location?.building + ", Floor " + location?.floor}
                onChange={(e) => setLocation({ ...location, building: e.target.value })}
              />
              <span className="required">(*)</span>
            </div>
            <div className="form-group">
              <label htmlFor="printer-description">Description:</label>
              <textarea
                id="printer-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span className="required-none">(*)</span>
            </div>
          </div>

          {/* Paper Tray Status */}
          <span className="title3">Paper Stray Status</span>
          <div className="form-container-2">
            <div className="form-group">
              <label>Page remaining:</label>
              <input
                type="text"
                value={paperTrayStatus.remainingPages}
                onChange={(e) => setPaperTrayStatus({ ...paperTrayStatus, remainingPages: e.target.value })}
              />
              <span className="required-none">(*)</span>
            </div>
          </div>

          {/* Network Configuration */}
          <span className="title3">Network Configuration</span>
          <div className="form-container-2">
            <div className="form-group">
              <label>IPv4 Address:</label>
              <input
                type="text"
                value={ipv4Address}
                onChange={(e) => setIpv4Address(e.target.value)}
              />
              <span className="required-none">(*)</span>
            </div>
          </div>

          {/* Form actions */}
          <div className="form-actions">
            <button className="cancel-btn" onClick={() => navigate(`/printer/${paramsId}`)}>Cancel</button>
            <button className="save-btn" onClick={handleSave}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_498_506"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_498_506)">
            <path d="M21 7V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H17L21 7ZM19 7.85L16.15 5H5V19H19V7.85ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z" fill="white"/>
            </g>
            </svg>
            Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPrinterDetails;
