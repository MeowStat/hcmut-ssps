import ContactInfo from "./ContactInfo";
import SPSOMenu from "./SPSOMenu";

const SPSOApp = () => {
    return (
        <div className="spso-app-container">
            <SPSOMenu/>
            <ContactInfo/>
        </div>
    )
}

export default SPSOApp;