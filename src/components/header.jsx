import { Typography, Box } from "@mui/material";

/**
 * Header component
 * 
 * @param {object} props - Props của component
 * @param {string} props.title - Tiêu đề của component
 * @param {string} props.subtitle - Tiêu đề phụ của component
 * @returns {JSX.Element} - Thành phần JSX của component
 */

const Header = ({ title, subtitle }) => {
    return (
        <Box mb="30px">
            <Typography
                variant="h5"
                color="#000000"
                fontWeight="600"
                sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
            <Typography variant="body2" color="#888888">
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;