import menuIcon from "../assets/img/menu-icon.svg";
import "../css/SPSOMenu.css";
import dashboard_icon from "../assets/img/grid_view.svg";
import printer_management_icon from "../assets/img/print.svg";
import config_icon from "../assets/img/manufacturing.svg";
import log_icon from "../assets/img/calendar_view_month.svg";
import stat_icon from "../assets/img/bar_chart.svg";
import manual_icon from "../assets/img/developer_guide.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/material";

const tabs = [
  {
    id: "dashboard_tab",
    label: "Dashboard",
    icon: dashboard_icon,
    path: "/dashboard",
  },
  {
    id: "printer_tab",
    label: "Printer Management",
    icon: printer_management_icon,
    path: "/printer",
  },
  {
    id: "config_tab",
    label: "Configuration",
    icon: config_icon,
  },
  {
    id: "log_tab",
    label: "All Printing Logs",
    icon: log_icon,
  },
  {
    id: "stat_tab",
    label: "Statistics & Report",
    icon: stat_icon,
  },
  {
    id: "manual_tab",
    label: "Manual & Tips",
    icon: manual_icon,
  },
];

const SPSOMenu = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  const toggleMenu = () => {
    setIsShrunk(!isShrunk);
  };

  return (
    <Box>
      <div className={`spso-menu ${isShrunk ? "shrink" : ""}`} >
        <div className="menu-title">
          <button id="menu-btn" onClick={toggleMenu}>
            <img id="menu-btn-icon" src={menuIcon} />
          </button>
          {isShrunk ? "" : "Menu"}
        </div>
        <div className="spso-menu-tab-container">
          {tabs.map((tab) => (
            <Link to={tab.path} key={tab.id}>
              <button
                key={tab.id}
                className="tabs"
                id={tab.id}
              >
                <img id={tab.label} src={tab.icon} alt={`${tab.label} Icon`} />
                {isShrunk ? "" : tab.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default SPSOMenu;
