import menuIcon from "../assets/img/menu-icon.svg"
import "../css/SPSOMenu.css"
import dashboard_icon from "../assets/img/grid_view.svg"
import printer_management_icon from "../assets/img/print.svg"
import config_icon from "../assets/img/manufacturing.svg"
import log_icon from "../assets/img/calendar_view_month.svg"
import stat_icon from "../assets/img/bar_chart.svg"
import manual_icon from "../assets/img/developer_guide.svg"
import { useNavigate } from "react-router-dom";


const tabs = [
    {
        id: 'dashboard_tab',
        label: 'Dashboard',
        icon: dashboard_icon,
    },
    {
        id: 'printer_tab',
        label: 'Printer Management',
        icon: printer_management_icon,
    },
    {
        id: 'config_tab',
        label: 'Configuration',
        icon: config_icon,
    },
    {
        id: 'log_tab',
        label: 'All Printing Logs',
        icon: log_icon,
    },
    {
        id: 'stat_tab',
        label: 'Statistics & Report',
        icon: stat_icon,
    },
    {
        id: 'manual_tab',
        label: 'Manual & Tips',
        icon: manual_icon,
    },
]

const SPSOMenu = () => {
    return (
        <div className="spso-menu">
            <div className="menu-title">
                <button id="menu-btn">
                    <img id= "menu-btn-icon" src={menuIcon}/>
                </button>
                Menu
            </div>
            <div className="spso-menu-tab-container">
            {tabs.map((tab) => (
                    
                    <button key={tab.id} className="tabs" id={tab.id}>
                        <img id={tab.label} src={tab.icon} alt={`${tab.label} Icon`} />
                        {tab.label}
                    </button>
                    
                ))}
            </div>
        </div>
    )
}

export default SPSOMenu;