import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ChoosePrinter.css';

const ChoosePrinter = () => {
  const navigate = useNavigate(); // Thêm hook useNavigate
  const [selectedCampus, setSelectedCampus] = useState('HCMUT 2');
  const [selectedBuilding, setSelectedBuilding] = useState('H6');
  const [timeLeft, setTimeLeft] = useState(300);
  const [selectedPrinter, setSelectedPrinter] = useState(null);

  // Định nghĩa danh sách máy in theo campus
  const printersByCampus = {
    'HCMUT 1': [
      { id: 'A1-1', status: 'Available' },
      { id: 'A1-2', status: 'Pending' },
      { id: 'A1-3', status: 'Unavailable' },
    ],
    'HCMUT 2': [
      { id: 'H6-1', status: 'Available' },
      { id: 'H6-2', status: 'Pending' },
      { id: 'H6-3', status: 'Unavailable' },
    ]
  };
  // Lấy danh sách máy in dựa trên campus được chọn
  const getCurrentPrinters = () => {
    return printersByCampus[selectedCampus] || [];
  };

  // Reset selectedPrinter khi chuyển campus
  // const handleCampusChange = (e) => {
  //   setSelectedCampus(e.target.value);
  //   setSelectedPrinter(null); // Reset máy in đã chọn
  // };

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handlePrinterSelect = (printerId) => {
    setSelectedPrinter(printerId);
  };
  const handleBack = () => {
    navigate('/'); // Điều hướng đến trang UploadFile
  };
  const handleNext = () => {
    navigate('/Checkout'); // Điều hướng đến trang Checkout
  };
  return (
    <div className="choose-printer-container">
      <div className="header">
        <h2>Choose Printer</h2>
        <div className="timer">
          <div className="time-left">Time left</div>
          <div className="countdown">{formatTime(timeLeft)}</div>
        </div>
      </div>

      <div className="location-selectors">
        <div className="selector">
          <label>Campus</label>
          <select 
            value={selectedCampus}
            onChange={(e) => setSelectedCampus(e.target.value)}
          >
            <option>HCMUT 1</option>
            <option>HCMUT 2</option>
          </select>
        </div>

        <div className="selector">
          <label>Building</label>
          <select 
            value={selectedBuilding}
            onChange={(e) => setSelectedBuilding(e.target.value)}
          >
            <option>{selectedCampus === 'HCMUT 1' ? 'A1' : 'H6'}</option>
          </select>
        </div>
      </div>

      <div className="printer-section">
        <p>Choose a Printer</p>
        <div className="printer-grid">
          {getCurrentPrinters().map((printer) => (  // Sử dụng hàm getCurrentPrinters
            <div
              key={printer.id}
              className={`printer-card ${printer.status.toLowerCase()} ${
                selectedPrinter === printer.id ? 'selected' : ''
              }`}
              onClick={() => printer.status === 'Available' && handlePrinterSelect(printer.id)}
            >
              <div className="printer-name">{printer.id}</div>
              <div className="printer-icon">🖨️</div>
              <div className={`status-indicator ${printer.status.toLowerCase()}`}>
                <span className="dot"></span>
                {printer.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="note">
        <h2>Note:</h2>
        <p>After choosing a printer, you will have 5 minutes to checkout </p>
      </div>

      <div className="buttons-choose-printer">
        <button className="back-button" onClick={handleBack}>Back</button>
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ChoosePrinter;