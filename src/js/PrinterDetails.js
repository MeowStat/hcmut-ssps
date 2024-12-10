import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import printerData from '../db/printer';
import printerImg from '../assets/img/pngwing.com.png'
import '../css/PrinterDetails.css';

const PrinterDetails = () => {
  const { id } = useParams(); // Lấy ID máy in từ URL
  const navigate = useNavigate(); 
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [printerStatus, setPrinterStatus] = useState("Active"); // Quản lý trạng thái máy in
  const [printers, setPrinters] = useState(printerData); // Lưu trữ danh sách máy in trong state
  const [inputName, setInputName] = useState(""); // Trạng thái lưu tên máy in nhập vào
  const [error, setError] = useState(""); // Quản lý lỗi nếu tên máy in không đúng

  const printer = printerData.find((printer) => printer.id === id);
  if (!printer) {
    return <div>Printer not found!</div>;
  }
  // Hàm xử lý khi nhấn nút Disable hoặc Enable
  const handleActionClick = (action) => {
    const updatedPrinters = printers.map((printerItem) => {
      if (printerItem.id === printer.id) {
        if (action === "disable") {
          printerItem.status = "Offline"; // Thay đổi trạng thái máy in thành "Offline"
        } else if (action === "enable") {
          printerItem.status = "Active"; // Thay đổi trạng thái máy in thành "Active"
        }
      }
      return printerItem;
  });
  setPrinters(updatedPrinters); // Cập nhật lại danh sách máy in trong state
    setPrinterStatus(updatedPrinters.find((printerItem) => printerItem.id === printer.id).status); // Cập nhật lại trạng thái hiển thị
  };
  const handleDeleteClick = () => {
    setShowDeleteModal(true); // Hiển thị modal khi nhấn nút Delete
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
  };
  const handleButtonDeleteClick = () => {
    if (inputName === printer.name) {
      const remainingPrinters = printers.filter((printerItem) => printerItem.id !== printer.id);
      setPrinters(remainingPrinters);
      setShowDeleteModal(false); // Đóng modal
        alert("Printer has been successfully deleted.")
        navigate("/printer"); // Điều hướng về trang "Manage Printers"
    } else {
      setError("Printer name does not match!"); // Hiển thị lỗi nếu tên không khớp
    }
  };

  const handleModifyClick = () => {
    navigate(`/printer/edit/${printer.id}`); // Navigate to the EditPrinterDetails page
  };

  return (
    <div className="main-content">
      <div className="content">
    <h1 className='title'>Printer Management</h1>
    <div className="printer-details-container">
    <button className="modify-btn" onClick={handleModifyClick}>Modify</button>
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
      {printer.status === "Active" ? (
              <button
                className="disable-printer-btn"
                onClick={() => handleActionClick("disable")}
              >
                Disable Printer
              </button>
            ) : (
              <button
                className="disable-printer-btn"
                onClick={() => handleActionClick("enable")}
              >
                Enable Printer
              </button>
            )}
          <button 
          className="delete-printer-btn"
          onClick={handleDeleteClick}
          >Delete</button>
        </div>
    </div>
    {/* Modal Xác Nhận Xóa */}
    {showDeleteModal && (
          <div class="modal-overlay">
          <div class="modal">
            <button class="modal-close"
            onClick={handleCloseModal}> <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.15428 18.0128L0.195312 16.0539L7.14518 9.104L0.195312 2.20018L2.15428 0.241211L9.10415 7.19108L16.008 0.241211L17.9669 2.20018L11.0171 9.104L17.9669 16.0539L16.008 18.0128L9.10415 11.063L2.15428 18.0128Z" fill="#555555"/>
            </svg></button>
            <div className="cancel-icon">
            <svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="44.5" cy="44.5" r="43" fill="white" stroke="#FF0000" stroke-width="3"/>
            <mask id="mask0_498_827" maskUnits="userSpaceOnUse" x="14" y="14" width="62" height="62">
            <rect x="14" y="14" width="61.208" height="61.208" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_498_827)">
            <mask id="path-3-inside-1_498_827" fill="white">
            <path d="M30.322 60.1619L29.0469 58.8868L43.3287 44.6049L29.0469 30.323L30.322 29.0479L44.6039 43.3297L58.8858 29.0479L60.1609 30.323L45.8791 44.6049L60.1609 58.8868L58.8858 60.1619L44.6039 45.8801L30.322 60.1619Z"/>
            </mask>
            <path d="M30.322 60.1619L29.0469 58.8868L43.3287 44.6049L29.0469 30.323L30.322 29.0479L44.6039 43.3297L58.8858 29.0479L60.1609 30.323L45.8791 44.6049L60.1609 58.8868L58.8858 60.1619L44.6039 45.8801L30.322 60.1619Z" fill="#FF0000"/>
            <path d="M30.322 60.1619L26.7865 63.6975L30.322 67.233L33.8576 63.6975L30.322 60.1619ZM29.0469 58.8868L25.5113 55.3512L21.9758 58.8868L25.5113 62.4223L29.0469 58.8868ZM43.3287 44.6049L46.8643 48.1404L50.3998 44.6049L46.8643 41.0694L43.3287 44.6049ZM29.0469 30.323L25.5113 26.7875L21.9758 30.323L25.5113 33.8586L29.0469 30.323ZM30.322 29.0479L33.8576 25.5123L30.322 21.9768L26.7865 25.5123L30.322 29.0479ZM44.6039 43.3297L41.0684 46.8653L44.6039 50.4008L48.1394 46.8653L44.6039 43.3297ZM58.8858 29.0479L62.4213 25.5123L58.8858 21.9768L55.3502 25.5123L58.8858 29.0479ZM60.1609 30.323L63.6965 33.8586L67.232 30.323L63.6965 26.7875L60.1609 30.323ZM45.8791 44.6049L42.3435 41.0694L38.808 44.6049L42.3435 48.1404L45.8791 44.6049ZM60.1609 58.8868L63.6965 62.4223L67.232 58.8868L63.6965 55.3512L60.1609 58.8868ZM58.8858 60.1619L55.3502 63.6975L58.8858 67.233L62.4213 63.6975L58.8858 60.1619ZM44.6039 45.8801L48.1394 42.3445L44.6039 38.809L41.0684 42.3445L44.6039 45.8801ZM33.8576 56.6264L32.5824 55.3512L25.5113 62.4223L26.7865 63.6975L33.8576 56.6264ZM32.5824 62.4223L46.8643 48.1404L39.7932 41.0694L25.5113 55.3512L32.5824 62.4223ZM46.8643 41.0694L32.5824 26.7875L25.5113 33.8586L39.7932 48.1404L46.8643 41.0694ZM32.5824 33.8586L33.8576 32.5834L26.7865 25.5123L25.5113 26.7875L32.5824 33.8586ZM26.7865 32.5834L41.0684 46.8653L48.1394 39.7942L33.8576 25.5123L26.7865 32.5834ZM48.1394 46.8653L62.4213 32.5834L55.3502 25.5123L41.0684 39.7942L48.1394 46.8653ZM55.3502 32.5834L56.6254 33.8586L63.6965 26.7875L62.4213 25.5123L55.3502 32.5834ZM56.6254 26.7875L42.3435 41.0694L49.4146 48.1404L63.6965 33.8586L56.6254 26.7875ZM42.3435 48.1404L56.6254 62.4223L63.6965 55.3512L49.4146 41.0694L42.3435 48.1404ZM56.6254 55.3512L55.3502 56.6264L62.4213 63.6975L63.6965 62.4223L56.6254 55.3512ZM62.4213 56.6264L48.1394 42.3445L41.0684 49.4156L55.3502 63.6975L62.4213 56.6264ZM41.0684 42.3445L26.7865 56.6264L33.8576 63.6975L48.1394 49.4156L41.0684 42.3445Z" fill="#FF0000" mask="url(#path-3-inside-1_498_827)"/>
            </g>
            </svg>
            </div>
            <h2>Delete Printer Confirmation</h2>
            <p className="text1">Are you sure you want to delete this printer? This action cannot be undone.</p>
            <div class="modal-info">
                      <div class="modal-row">
              <strong>Printer name:</strong>
              <span>{printer.name}</span>
            </div>
            <div class="modal-row">
              <strong>Location:</strong>
              <span>{printer.location.building}, Floor {printer.location.floor}</span>
            </div>
            </div>
            <div class="warning">
              <div>Warning:</div>
              <p>This printer has 3 pending jobs in the queue. Deleting it will cancel these jobs immediately.</p>
            </div>
            <div class="horizontal-line"></div>
            <p>To confirm deletion, please type the <b>printer name</b> below:</p>
            <input type="text" value={inputName}
                onChange={(e) => setInputName(e.target.value)} />
                 {error && <p className="error-message">{error}</p>} {/* Hiển thị lỗi nếu tên không khớp */}
            <button class="confirm-delete-btn" onClick={handleButtonDeleteClick}>Delete this printer</button>
          </div>
        </div>
        
        )}
    </div>
    </div>
  );
};

export default PrinterDetails;
