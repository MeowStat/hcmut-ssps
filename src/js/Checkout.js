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

  const files = [
    { name: "file1.txt", pages: 1 },
    { name: "file2.docx", pages: 34 },
    { name: "file3.pdf", pages: 15 },
  ];

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
            borderTop: "2px dashed #000000",
            width: "100%", // Làm cho đường kẻ dài hơn
            marginLeft: "10%", // Để căn chỉnh lại cho cân đối
            height: "0.5px",
          }}
        />
      <div className="content">
        <div className="address">
          <h2>Campus: </h2>
          <h2>Building: </h2>
          <h2>Printer: </h2>
        </div>
        <div className="config">
          <h2>Config: </h2>
          <div className="config-item">
            <h2>Copies: </h2>
            <h2>Page size: </h2>
            <h2>Orientation: </h2>
            <h2>Mode: </h2>
          </div>
        </div>
        <div className="list-file">
          <h2>List of file: </h2>
          {files.map((file, index) => (
            <div className="file-item" key={index}>
              <h3>{file.name}</h3>
              <h3>{file.pages} pages</h3>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleBack}>Back</button>
      {/* <button onClick={handleNext}>Checkout</button> */}
    </div>
  );
};

export default Checkout;
