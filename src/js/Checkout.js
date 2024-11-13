import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Checkout.css";

const Checkout = () => {
  const navigate = useNavigate(); // Thêm hook useNavigate
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Add these near the top of your component
  const [printerDetails] = useState({
    campus: "Campus 1",
    building: "H1",
    printer: "HP LaserJet 001",
    config: {
      copies: 1,
      pageSize: "A4",
      orientation: "Portrait",
      mode: "Black & White",
    },
  });
  const [files] = useState([
    { name: "File 1", pages: 10 },
    { name: "File 2", pages: 5 },
    { name: "File 3", pages: 7 },
  ]);
  // Tính tổng số trang
  const totalPages = files.reduce((sum, file) => sum + file.pages, 0);
  const handleBack = () => {
    navigate("/ChoosePrinter"); // Điều hướng đến trang ChoosePrinter
  };
  // const handleNext = () => {
  //   navigate('/Checkout'); // Điều hướng đến trang Checkout
  // };
  return (
    <div className="checkout-container">
      <div className="header">
        <h1>Check Out</h1>
        <div className="timer">
          <div className="time-left">Time left</div>
          <div className="countdown">{formatTime(timeLeft)}</div>
        </div>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "1px dashed #000000",
          width: "60%", // Làm cho đường kẻ dài hơn
          marginLeft: "10%", // Để căn chỉnh lại cho cân đối
          height: "0.1px",
        }}
      />
      <div className="content">
        <div className="address">
          <div className="address-item">
            <h2>Campus:</h2>
            <h2>{printerDetails.campus}</h2>
          </div>
          <div className="address-item">
            <h2>Building:</h2>
            <h2>{printerDetails.building}</h2>
          </div>
          <div className="address-item">
            <h2>Printer:</h2>
            <h2>{printerDetails.printer}</h2>
          </div>
        </div>
        <div className="config">
          <div className="config-header">
            <h2>Configuration: </h2>
          </div>
          <div className="config-content">
            <div className="config-column">
              <div className="config-item">
                Copies : {printerDetails.config.copies}
              </div>
              <div className="config-item">
                Orientation : {printerDetails.config.orientation}
              </div>
            </div>
            <div className="config-column">
              <div className="config-item">
                Page size : {printerDetails.config.pageSize}
              </div>
              <div className="config-item">
                Mode : {printerDetails.config.mode}
              </div>
            </div>
          </div>
        </div>
        <div className="table-container">
          <div className="table-header">List of files</div>
          <table className="files-table">
            <tbody>
              {files.map((file, index) => (
                <tr key={index}>
                  <td>{file.name}</td>
                  <td>{file.pages} pages</td>
                </tr>
              ))}
              <tr className="total-row">
                <td>
                  <strong>Total:</strong>
                </td>
                <td>
                  <strong>{totalPages} pages</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "1px dashed #000000",
          width: "60%", // Làm cho đường kẻ dài hơn
          marginLeft: "10%", // Để căn chỉnh lại cho cân đối
          height: "0.1px",
        }}
      />
      <div className="note">
        <h2>Note:</h2>
        <p>After choosing a printer, you will have 5 minutes to checkout </p>
      </div>
      <div className="button-group">
        <button className="back-button-checkout" onClick={handleBack}>Back</button>
        <button className="next-button-checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
