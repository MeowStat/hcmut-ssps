import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm import này
import "../css/UploadFile.css";

const UploadFile = () => {
  const navigate = useNavigate(); // Thêm hook useNavigate

  const [files, setFiles] = useState([]);
  const [printConfig, setPrintConfig] = useState({
    copies: 1,
    orientation: "Auto",
    mode: "Double-sided",
    pageSize: "A4",
  });

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([
      ...files,
      ...droppedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        status: "uploading",
      })),
    ]);
  };

  const handleBrowse = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([
      ...files,
      ...selectedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        status: "uploading",
      })),
    ]);
  };
  const handleNext = () => {
    navigate('/ChoosePrinter'); // Điều hướng đến trang ChoosePrinter
  };
  return (
    <div className="upload-container">
      <h2 className="upload-header">
        <h2
          className="config-header-text"
          style={{ color: "#0088ff", fontSize: "1cm" }}
        >
          Upload
        </h2>
        <h2
          className="config-header-text"
          style={{ fontSize: "1cm", color: "#000000" }}
        >
          Files
        </h2>
      </h2>
      <div className="upload-content">
        <div className="right-section">
          <div
            className="upload-area"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>
              Drag and drop files here
            </p>
            <p style={{ fontSize: "1.2em" }}>or</p>
            <input
              type="file"
              onChange={handleBrowse}
              multiple
              style={{ display: "none" }}
              id="file-input"
            />
            <label
              htmlFor="file-input"
              style={{ fontSize: "1.2em", fontWeight: "bold" }}
            >
              Browse Files
            </label>
          </div>
          <div className="required-format-container">
            <div className="required-format-text">PDF</div>
            <div className="required-format-text">DOC</div>
            <div className="required-format-text">DOCX</div>
            <div className="required-format-text">TXT</div>
            <div className="required-format-normal">&lt;</div>
            <div className="required-format-normal">100 MB</div>
          </div>
        </div>
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <div className="file-info">
                <div className="file-name">{file.name}</div>
                <div className="file-size">
                  {(file.size / 1024).toFixed(1)} KB
                </div>
              </div>
              <div className="file-status">{file.status}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="config-section">
        <hr
          style={{
            border: "none",
            borderTop: "2px dashed #000000",
            width: "100%", // Làm cho đường kẻ dài hơn
            marginLeft: "10%", // Để căn chỉnh lại cho cân đối
            height: "0.5px",
          }}
        />
        <h2 className="config-header">
          <h2
            className="config-header-text"
            style={{ color: "#0088ff", fontSize: "1cm" }}
          >
            Configuration
          </h2>
          <h2
            className="config-header-text"
            style={{ fontSize: "1cm", color: "#000000" }}
          >
            Print
          </h2>
        </h2>
        <div className="config-grid">
          <div className="config-item">
            <label>Copies</label>
            <input
              type="number"
              min="1"
              value={printConfig.copies}
              onChange={(e) =>
                setPrintConfig({
                  ...printConfig,
                  copies: parseInt(e.target.value),
                })
              }
            />
          </div>

          <div className="config-item">
            <label>Orientation</label>
            <select
              value={printConfig.orientation}
              onChange={(e) =>
                setPrintConfig({
                  ...printConfig,
                  orientation: e.target.value,
                })
              }
            >
              <option>Auto</option>
              <option>Portrait</option>
              <option>Landscape</option>
            </select>
          </div>

          <div className="config-item">
            <label>Mode</label>
            <select
              value={printConfig.mode}
              onChange={(e) =>
                setPrintConfig({ ...printConfig, mode: e.target.value })
              }
            >
              <option>Double-sided</option>
              <option>Single-sided</option>
            </select>
          </div>

          <div className="config-item">
            <label>Page Size</label>
            <select
              value={printConfig.pageSize}
              onChange={(e) =>
                setPrintConfig({
                  ...printConfig,
                  pageSize: e.target.value,
                })
              }
            >
              <option>A4</option>
              <option>A3</option>
              <option>A5</option>
            </select>
          </div>
        </div>

        <button 
          className="next-button" 
          onClick={handleNext} 
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadFile;
