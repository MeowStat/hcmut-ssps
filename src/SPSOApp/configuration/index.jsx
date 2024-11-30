import React from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  TextField,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import dateconfig from "../../assets/img/pic1config.svg";
import fileconfig from "../../assets/img/pic2config.svg";
import calenda from "../../assets/img/calendar_popup.svg";
import close from "../../assets/img/close_small.svg";
import save from "../../assets/img/save.svg";

const Config = () => {
  //Begin Pop up support
  const [open, setOpen] = React.useState(false);
  const [inputDate, setInputDate] = React.useState("15");
  const [inputPage, setInputPage] = React.useState("10");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputDate = (event) => {
    setInputDate(event.target.value);
  };

  const handleInputPage = (event) => {
    setInputPage(event.target.value);
  };

  //End Pop up support
  const navigate = useNavigate();

  const dateicon = <img src={dateconfig} alt={`${dateconfig} Icon`} />;
  const fileicon = <img src={fileconfig} alt={`${fileconfig} Icon`} />;
  return (
    <Box m="20px" height={"75vh"}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Configuration Management" subtitle="" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="173px" //from 145px in figma + mt 25px
        gap="10px"
      >
        {/* ROW 1 */}
        <Box gridColumn="span 1" display="flex">
          <Box
            width="100%"
            height="120%"
            m="0 30px"
            flexDirection="column"
            borderRadius="10px"
            overflow="hidden"
            sx={{
              backgroundColor: "#2BA6DA",
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
              "&:hover": {
                backgroundColor: "#3498db",
                cursor: "pointer",
              },
            }}
            onClick={handleClickOpen}
          >
            {dateicon && (
              <Box
                textAlign={"center"}
                justifyContent="center"
                alignItems="center"
                mb={1}
              >
                {dateicon}
              </Box>
            )}
            <Box
              textAlign={"center"}
              justifyContent="center"
              whiteSpace="nowrap"
              margin="0 10px"
            >
              <Typography
                variant="p"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Roboto Black",
                  fontSize: "17px",
                }}
              >
                {"Page Allocation Date"}
              </Typography>
            </Box>
          </Box>
          <Box
            onClick={() => navigate("./fileconfig")}
            width="100%"
            height="120%"
            m="0 30px"
            display="flex"
            flexDirection="column"
            borderRadius="10px"
            overflow="hidden"
            sx={{
              backgroundColor: "#E4E5FF",
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
              "&:hover": {
                backgroundColor: "#d9d9d9",
                cursor: "pointer",
              },
            }}
          >
            {fileicon && (
              <Box
                textAlign={"center"}
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={1}
              >
                {fileicon}
              </Box>
            )}
            <Box
              flex="1"
              textAlign={"center"}
              display="grid"
              justifyContent="center"
              whiteSpace="nowrap"
              margin="0 10px"
            >
              <Typography
                variant="p"
                sx={{
                  color: "#333333",
                  fontFamily: "Roboto Black",
                  fontSize: "17px",
                }}
              >
                {"File Configuration"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="md"
        sx={{
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
          "& .MuiDialog-paperWidthSm": {
            width: "1009px", //Max width in figma
            height: "465px", //Max height in figma
          },
          "& .MuiDialog-paper": {
            border: "1px solid #ccc",
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
            position: "relative",
          },
        }}
      >
        <img
          src={calenda}
          alt={`${calenda} Icon`}
          style={{
            position: "absolute",
            top: "27%",
            left: "27%",
            width: "50%",
            height: "50%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <Box
          onClick={handleClose}
          p={"10px"}
          sx={{
            position: "absolute",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: "500",
            fontStyle: "SemiBold",
            top: "5%",
            right: "3%",
            color: "#555555",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#d9d9d9",
              cursor: "pointer",
            },
          }}
        >
          Cancel
          <img
            src={close}
            alt={`${close} Icon`}
            style={{
              width: "17.17px",
              height: "17.17px",
              marginLeft: "5px",
            }}
          />
        </Box>
        <Typography
          variant="p"
          sx={{
            color: "#000000",
            fontFamily: "Roboto Black",
            fontSize: "25px",
            textAlign: "center",
            marginTop: "8%",
            marginBottom: "2%",
          }}
        >
          PAGE ALLOCATION
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontStyle: "italic",
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          Specify a specific date each month for when the free pages are
          available
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                marginTop: "2%",
              }}
            >
              <Typography
                variant="p"
                textAlign={"right"}
                sx={{
                  marginTop: "1%",
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#000000",
                  marginRight: "3%",
                }}
              >
                Allocation Date:
              </Typography>
              <TextField
                label="Input"
                variant="outlined"
                value={inputDate}
                onChange={handleInputDate}
                size="small"
                style={{ width: "200px" }}
                sx={{ fontSize: "12px" }}
                margin="normal"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <Typography
                variant="p"
                textAlign={"right"}
                sx={{
                  marginTop: "1%",
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#000000",
                  marginRight: "1%",
                }}
              >
                Number of Pages:
              </Typography>
              <TextField
                label="Input"
                variant="outlined"
                value={inputPage}
                onChange={handleInputPage}
                size="small"
                style={{ width: "200px" }}
                sx={{ fontSize: "12px" }}
                margin="normal"
              />
            </Box>
          </Grid>
        </Grid>
        {/* <DialogActions> */}
        <Button
          onClick={handleClose}
          sx={{
            width: "133px",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: "500",
            fontStyle: "Bold",
            marginTop: "10%",
            marginBottom: "8%",
            marginLeft: "45%",
            backgroundColor: "#0057FF",
            textTransform: "none",
            color: "#FFFFFF",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#3498db",
              cursor: "pointer",
            },
          }}
        >
          <img
            src={save}
            alt={`${save} Icon`}
            style={{
              width: "24px",
              height: "24px",
              marginRight: "5px",
            }}
          />
          Save
        </Button>
        {/* </DialogActions> */}
      </Dialog>
    </Box>
  );
};

export default Config;
