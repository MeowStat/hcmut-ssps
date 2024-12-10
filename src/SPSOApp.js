import SPSOMenu from "./js/SPSOMenu";
import Navbar from "./js/Navbar";
import Footer from "./js/Footer";
import Dashboard from "./SPSOApp/dashboard";
import Config from "./SPSOApp/configuration";
import FileConfig from "./SPSOApp/configuration/FileConfig";
import ManagePrinter from "./js/ManagePrinter";
import PrinterDetails from "./js/PrinterDetails";
import EditPrinterDetails from "./js/EditPrinterDetails";
import NewPrinter from "./js/NewPrinter";
import { Route, Routes } from "react-router-dom";
import "./css/SPSOApp.css";

const SPSOApp = () => {
    return (
        <>
        <Navbar/>
        <div className="app">
            <div className="app-menu">
                <SPSOMenu/>
            </div>
            <main className="content">
                <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/config" element={<Config />} />
                    <Route path="/config/fileconfig" element={<FileConfig />} />
                    <Route path="/printer" element={<ManagePrinter/>} />
                    <Route path="/printer/:id" element={<PrinterDetails />} />
                    <Route path="/printer/edit/:id" element={<EditPrinterDetails />} />
                    <Route path="/printer/new" element={<NewPrinter />} />
                    <Route path="/" element={<p>Path not found</p>} />
                </Routes>
            </main>
        </div>
        <Footer/>
        </>
    )
}

export default SPSOApp;