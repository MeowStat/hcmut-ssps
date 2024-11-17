import ContactInfo from "./js/ContactInfo";
import SPSOMenu from "./js/SPSOMenu";
import Navbar from "./js/Navbar";
import Footer from "./js/Footer";

const SPSOApp = () => {
    return (
        <div className="App">
      <Navbar />
      <div className="content-wrap">
        <SPSOApp/>
      </div>
      <Footer />
    </div>
    )
}

export default SPSOApp;