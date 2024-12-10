import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Không cần useParams vì không load thông tin máy in
import printerImg from '../assets/img/pngwing.com.png';
import '../css/EditPrinterDetails.css';

const NewPrinter = () => {
  const navigate = useNavigate();

  // Khởi tạo state cho các trường dữ liệu cần nhập
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [paperTrayStatus, setPaperTrayStatus] = useState({ remainingPages: "", paperSize: "" });
  const [ipv4Address, setIpv4Address] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!id) newErrors.id = "ID is required.";
    if (!name) newErrors.name = "Printer name is required.";
    if (!type) newErrors.type = "Printer type is required.";
    if (!location) newErrors.location = "Location is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSave = () => {
    if (!validateForm()) return;
    const newPrinter = {
      id,
      name,
      type,
      location,
      description,
      paperTrayStatus,
      network: { ipv4Address },
    };
    console.log("New Printer:", newPrinter);
    alert("Printer added successfully!"); // Thông báo thành công
    navigate("/printer"); // Chuyển hướng về trang danh sách máy in
  };

  return (
    <div className="main-content">
      <div className="content">
        <h1 className='title'>Printer Management</h1>
        <div className="edit-printer-container">
          <div className="printer-background">
            <img src={printerImg} alt="Printer" />
          </div>
          <h1 className="title2">New Printer Registration</h1>
          <p className="note">
            Fill in the details for the new printer. <br />
            Fields marked with an asterisk <span className="text-style-1">(*)</span> are required.
          </p>
          <span className="title3">Printer Details</span>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="printer-id">ID:</label>
              <input
                type="text"
                id="printer-id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <span className="required">(*)</span>
              {errors.id && <p className="error-message">{errors.id}</p>}
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
              {errors.name && <p className="error-message">{errors.name}</p>}
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
              {errors.type && <p className="error-message">{errors.type}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="printer-location">Location:</label>
              <textarea
                id="printer-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <span className="required">(*)</span>
              {errors.location && <p className="error-message">{errors.location}</p>}
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

          <span className="title3">Paper Tray Status</span>
          <div className="form-container-2">
            <div className="form-group">
              <label>Page remaining:</label>
              <input
                type="text"
                value={paperTrayStatus.remainingPages}
                onChange={(e) =>
                  setPaperTrayStatus({
                    ...paperTrayStatus,
                    remainingPages: e.target.value,
                  })
                }
              />
              <span className="required-none">(*)</span>
            </div>
          </div>

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

          <div className="form-actions">
            <button className="cancel-btn" onClick={() => navigate("/printer")}>
              Cancel
            </button>
            <button className="save-btn" onClick={handleSave}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H17L21 7ZM19 7.85L16.15 5H5V19H19V7.85ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM6 10H15V6H6V10Z"
                  fill="white"
                />
              </svg>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPrinter;
