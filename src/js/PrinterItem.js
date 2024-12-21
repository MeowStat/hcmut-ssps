import React from 'react';
import '../css/PrinterList.css';

const PrinterItem = ({ name, status, remain , onClick }) => {
  return (
    <div className="printer-item" onClick={onClick}>
      <p className='printer-id'>{name}</p>
      <div className="printer-icon">
      <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M76.4999 29.75H25.4999V12.75H76.4999V29.75ZM76.4999 53.125C77.7041 53.125 78.7135 52.7177 79.5281 51.9031C80.3426 51.0885 80.7499 50.0792 80.7499 48.875C80.7499 47.6708 80.3426 46.6615 79.5281 45.8469C78.7135 45.0323 77.7041 44.625 76.4999 44.625C75.2958 44.625 74.2864 45.0323 73.4718 45.8469C72.6572 46.6615 72.2499 47.6708 72.2499 48.875C72.2499 50.0792 72.6572 51.0885 73.4718 51.9031C74.2864 52.7177 75.2958 53.125 76.4999 53.125ZM67.9999 80.75V63.75H33.9999V80.75H67.9999ZM76.4999 89.25H25.4999V72.25H8.49994V46.75C8.49994 43.1375 9.73952 40.1094 12.2187 37.6656C14.6979 35.2219 17.7083 34 21.2499 34H80.7499C84.3624 34 87.3906 35.2219 89.8343 37.6656C92.2781 40.1094 93.4999 43.1375 93.4999 46.75V72.25H76.4999V89.25Z" fill="#1C1B1F"/>
      </svg>
      </div>
      <p className='printer-remaining'>Remain: {remain}</p>
      <p className={status === 'Active' ? 'status active' : 'status offline'}>
        {status}
      </p>
    </div>
  );
};

export default PrinterItem;
