import "../css/ContactInfo.css";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="technician-section">
        <h4>Technician</h4>
        <p>Email: ddthu@hcmut.edu.vn</p>
        <p>Tel: (84-8) 38647256 - 5258</p>
      </div>

      <div className="support-section">
        <p>
          For HCMUT account, please contact to: Data and Information Technology
          Center at Room 109A5 for support
        </p>
        <p>Email: di-cnt@hcmut.edu.vn</p>
        <p>DT (Tel.): (84-8) 38647256 - 5200</p>
      </div>

      <div className="copyright">
        <p>Copyright © 2024 HCMUT</p>
      </div>
    </div>
  );
}

export default ContactInfo;
