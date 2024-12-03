import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm import này
import "../css/UploadFile.css";
import Navbar from './Navbar'; // Add this import 
import Footer from "./Footer";

const UploadFile = () => {
  const navigate = useNavigate(); // Thêm hook useNavigate
  const [files, setFiles] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isSeparated, setIsSeparated] = useState(false);
  const [printConfig, setPrintConfig] = useState({
    copies: 1,
    orientation: "Auto",
    mode: "Double-sided",
    pageSize: "A4",
  });

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf': return '/pdf_icon.png';
      case 'doc':
      case 'docx': return 'docx_icon.png';
      case 'txt': return 'txt_icon.png';
      default: return null;
    }
  };

  // Ước tính số trang dựa trên kích thước file
  const estimatePages = (file) => {
    const extension = file.name.split('.').pop().toLowerCase();
    // Giả định trung bình mỗi trang
    const bytesPerPage = {
      'pdf': 3500,
      'doc': 3000,
      'docx': 3000,
      'txt': 2000
    };
    
    const avgBytesPerPage = bytesPerPage[extension] || 3000;
    return Math.max(1, Math.ceil(file.size / avgBytesPerPage));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    
    const newFiles = droppedFiles.map(file => {
      const pages = estimatePages(file);
      return {
        name: file.name,
        size: file.size,
        status: "uploaded",
        pages: pages,
        icon: getFileIcon(file.name)
      };
    });

    setFiles(prev => [...prev, ...newFiles]);
    setTotalPages(prev => prev + newFiles.reduce((sum, file) => sum + file.pages, 0));
  };

  const handleBrowse = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    const newFiles = selectedFiles.map(file => {
      const pages = estimatePages(file);
      return {
        name: file.name,
        size: file.size,
        status: "uploaded",
        pages: pages,
        icon: getFileIcon(file.name)
      };
    });

    setFiles(prev => [...prev, ...newFiles]);
    setTotalPages(prev => prev + newFiles.reduce((sum, file) => sum + file.pages, 0));
  };

  const removeFile = (index) => {
    const removedFile = files[index];
    setTotalPages(prev => prev - removedFile.pages);
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    navigate('/ChoosePrinter'); // Điều hướng đến trang ChoosePrinter
  };
  return (
    <>
    <Navbar/>
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
          {file.icon && <img src={file.icon} alt="" className="file-type-icon" />}
          <div className="file-info">
            <div className="file-name">{file.name}</div>
            <div className="file-size">
              {(file.size / 1024).toFixed(1)} KB - {file.pages} pages
            </div>
          </div>
          <div className="file-status">{file.status}</div>
          <button 
            className="remove-file-btn"
            onClick={() => removeFile(index)}
          >
            ×
          </button>
        </div>
      ))}
      {files.length > 0 && (
        <div className="totalAndPrint">
          <div className="separated-files">
            <input
              type="checkbox"
              id="separatedFiles"
              checked={isSeparated}
              onChange={(e) => setIsSeparated(e.target.checked)}
            />
            <label htmlFor="separatedFiles">Printing separated files</label>
          </div>
          <div className="total-pages">
            Total: {totalPages} pages
          </div>
        </div>
      )}
    </div>
      </div>
      <div className="config-section">
        <h2
          style={{
            border: "none",
            borderTop: "2px dashed #000000",
            width: "100%", // Làm cho đường kẻ dài hơn
            marginLeft: "-1.7%", // Để căn chỉnh lại cho cân đối
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
    <Footer/>
  </>
  );
};

export default UploadFile;
