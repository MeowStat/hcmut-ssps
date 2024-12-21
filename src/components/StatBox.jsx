import { Box, Typography } from "@mui/material";

/**
 * StatBox component
 *
 * @param {object} param0 - Props của component
 * @param {string} param0.title - Tiêu đề của component
 * @param {string} param0.content - Nội dung của component
 * @param {string} param0.subtitle - Tiêu đề phụ của component
 * @param {string} param0.type - Loại cơ sở hình của component
 * @param {ReactNode} param0.icon - Icon của component
 * @returns {JSX.Element} - Thành phần JSX của component
 */

const StatBox = ({ title, content, subtitle, icon, type }) => {
  const backgroundColor = type === "2" ? "#FFFFFF" : "#E1F3FF";
  const boxShadow = type === "2" ? "0px 0px 4px rgba(0, 0, 0, 0.25)" : "none";
  const paddingLeft = type === "2" ? "15%" : "5%";

  return (
    <Box
      width="100%"
      m="0 0px"
      display="flex"
      flexDirection="row"
      borderRadius="10px"
      overflow="hidden"
      sx={{
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
      }}
    >
      {icon && (
        <Box
          flex="0.3"
          textAlign={"center"}
          backgroundColor={"#1488D8"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {icon}
        </Box>
      )}
      <Box
        flex="1"
        textAlign={"left"}
        paddingLeft={paddingLeft}
        backgroundColor={backgroundColor}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          variant="p"
          sx={{
            color: "#000000",
            fontFamily: "Roboto Medium",
            fontSize: "18px",
            marginBottom: "12px",
            marginTop: "12px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#000000",
            fontFamily: "Roboto Black",
            fontSize: "22px",
            marginBottom: "12px",
          }}
        >
          {content}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#888888",
            fontFamily: "Roboto Medium",
            fontSize: "13px",
            marginBottom: "12px",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
