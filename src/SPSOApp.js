import ContactInfo from "./js/ContactInfo";
import SPSOMenu from "./js/SPSOMenu";
import Navbar from "./js/Navbar";
import Footer from "./js/Footer";
import Dashboard from "./SPSOApp/dashboard";
import Config from "./SPSOApp/config";
import { Route, Routes } from "react-router-dom";
import "./css/SPSOApp.css";

const SPSOApp = () => {
    return (
        <>
        <Navbar/>
        <div className="app">
            <div class="app-menu">
                <SPSOMenu/>
            </div>
            <main className="content">
                <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/config" element={<Config />} />
                    <Route path="/" element={<p>Path not found</p>} />
                </Routes>
            </main>
        </div>
        <Footer/>
        </>
    )
}

export default SPSOApp;