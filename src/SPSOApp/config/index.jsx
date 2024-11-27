import { Box } from "@mui/material";
import Header from "../../components/header";

const Config = () => {
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="CONFIG" subtitle="Welcome to your dashboard" />
        </Box>
    </Box>
    );
}

export default Config;