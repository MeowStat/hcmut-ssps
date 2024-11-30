import React from "react";
import { Box, Typography, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import save from "../../assets/img/save.svg";

const FileConfig = () => {
  const navigate = useNavigate();
  //Begin set hightlight

  const [TXT, setTXT] = React.useState(false);
  const [DOC, setDOC] = React.useState(true);
  const [DOCX, setDOCX] = React.useState(true);
  const [PDF, setPDF] = React.useState(true);
  const [JPG, setJPG] = React.useState(false);
  const [PNG, setPNG] = React.useState(false);

  const handleTXT = () => {
    setTXT(!TXT);
  };
  const handleDOC = () => {
    setDOC(!DOC);
  };
  const handleDOCX = () => {
    setDOCX(!DOCX);
  };
  const handlePDF = () => {
    setPDF(!PDF);
  };
  const handleJPG = () => {
    setJPG(!JPG);
  };
  const handlePNG = () => {
    setPNG(!PNG);
  };

  //End set hightlight

  //Begin set price
  const [price, setPrice] = React.useState("100");

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  //End set price

  //Begin print setting
  const [maxPage, setMaxPage] = React.useState("100");
  const [A5, setA5] = React.useState(false);
  const [A4, setA4] = React.useState(true);
  const [A3, setA3] = React.useState(true);
  const [horizontal, setHorizontal] = React.useState(true);
  const [vertical, setVertical] = React.useState(true);
  const [double, setDouble] = React.useState(true);
  const [single, setSingle] = React.useState(false);

  const handleMaxPage = (event) => {
    setMaxPage(event.target.value);
  };

  const handleA5 = () => {
    setA5(!A5);
  };
  const handleA4 = () => {
    setA4(!A4);
  };
  const handleA3 = () => {
    setA3(!A3);
  };
  const handleHorizontal = () => {
    setHorizontal(!horizontal);
  };
  const handleVertical = () => {
    setVertical(!vertical);
  };

  const handleDouble = () => {
    setDouble(!double);
  };
  const handleSingle = () => {
    setSingle(!single);
  };

  //End print setting

  return (
    <Box m="20px" height={"75vh"}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="File Configuration" subtitle="" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridAutoRows="173px" //from 145px in figma + mt 25px
        gap="10px"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="100%"
          marginTop="20%"
        >
          <Box
            display="flex"
            flexDirection="column"
            border={"0.5px solid #888888"}
            borderRadius="5px"
            m="5px"
            marginRight="32%"
          >
            <Box margin="7%">
              <Typography
                fontFamily="Roboto"
                fontWeight="600"
                fontSize="15px"
                color="#000000"
              >
                File Format Upload
              </Typography>
              <Typography
                fontFamily="Roboto"
                fontWeight="200"
                fontSize="12px"
                fontStyle="italic"
                color="#888888"
              >
                Choose allowed format for uploaded file
              </Typography>
            </Box>
            <Box display="flex" marginLeft="7%">
              <Box
                onClick={handleTXT}
                sx={{
                  backgroundColor: TXT ? "#0057FF" : "#D9D9D9",
                  color: TXT ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  marginBottom: "10px",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  TXT
                </Typography>
              </Box>
              <Box
                onClick={handleDOC}
                sx={{
                  backgroundColor: DOC ? "#0057FF" : "#D9D9D9",
                  color: DOC ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  marginBottom: "10px",
                  marginLeft: "25%",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  DOC
                </Typography>
              </Box>
            </Box>
            <Box display="flex" marginLeft="7%">
              <Box
                onClick={handleDOCX}
                sx={{
                  backgroundColor: DOCX ? "#0057FF" : "#D9D9D9",
                  color: DOCX ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 5.5px",
                  marginBottom: "10px",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  DOCX
                </Typography>
              </Box>
              <Box
                onClick={handlePDF}
                sx={{
                  backgroundColor: PDF ? "#0057FF" : "#D9D9D9",
                  color: PDF ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  marginBottom: "10px",
                  marginLeft: "25%",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  PDF
                </Typography>
              </Box>
            </Box>
            <Box display="flex" marginLeft="7%" marginBottom="7%">
              <Box
                onClick={handleJPG}
                sx={{
                  backgroundColor: JPG ? "#0057FF" : "#D9D9D9",
                  color: JPG ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  marginBottom: "10px",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  JPG
                </Typography>
              </Box>
              <Box
                onClick={handlePNG}
                sx={{
                  backgroundColor: PNG ? "#0057FF" : "#D9D9D9",
                  color: PNG ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 9px",
                  marginBottom: "10px",
                  marginLeft: "25%",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  PNG
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            // alignItems="center"
            justifyContent="center"
            height="100%"
            marginTop="5%"
          >
            <Box
              display="flex"
              flexDirection="column"
              border={"0.5px solid #888888"}
              borderRadius="5px"
              m="5px"
              marginRight="32%"
            >
              <Box margin="7%" marginBottom="12%">
                <Typography
                  fontFamily="Roboto"
                  fontWeight="600"
                  fontSize="15px"
                  color="#000000"
                >
                  Page Price
                </Typography>
                <Box display="flex" flexDirection="row">
                  <Typography
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize="12px"
                    fontStyle="normal"
                    color="#000000"
                    marginTop="3%"
                  >
                    Each A4 page cost:
                  </Typography>
                  <Input
                    type="number"
                    inputProps={{
                      style: {
                        fontSize: 13,
                        width: 55,
                        height: 10,
                        textAlign: "right",
                      },
                    }}
                    value={price}
                    onChange={handlePrice}
                    sx={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "2%",
                      border: "0.5px solid #888888",
                      borderRadius: "5px",
                      fontFamily: "Roboto",
                      fontWeight: "300",
                      fontSize: "13px",
                      color: "#000000",
                    }}
                  />
                  <Typography
                    fontFamily="Roboto"
                    fontWeight="400"
                    fontSize="12px"
                    fontStyle="italic"
                    color="#000000"
                    marginTop="3%"
                  >
                    VND
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          //   alignItems="center"
          justifyContent="center"
          height="100%"
          marginTop="20%"
        >
          <Box
            display="flex"
            flexDirection="column"
            border={"0.5px solid #888888"}
            borderRadius="5px"
            m="5px"
            marginRight="-15%"
          >
            <Box margin="7%" marginBottom="2%" marginTop="5%">
              <Typography
                fontFamily="Roboto"
                fontWeight="600"
                fontSize="15px"
                color="#000000"
              >
                Print Settings
              </Typography>
              <Typography
                fontFamily="Roboto"
                fontWeight="200"
                fontSize="12px"
                fontStyle="italic"
                color="#888888"
              >
                These settings allow the student to configure print parameters
                for the uploaded files
              </Typography>
            </Box>
            <Box
              display="flex"
              marginLeft="7%"
              alignItems="center"
              marginBottom="3%"
            >
              <Typography
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="12px"
                color="#000000"
                marginTop="2%"
              >
                Max Pages for each printing :
              </Typography>
              <Input
                type="number"
                inputProps={{
                  style: {
                    fontSize: 13,
                    width: 41,
                    height: 10,
                    textAlign: "right",
                  },
                }}
                value={maxPage}
                onChange={handleMaxPage}
                sx={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "2%",
                  border: "0.5px solid #888888",
                  borderRadius: "5px",
                  fontFamily: "Roboto",
                  fontWeight: "300",
                  fontSize: "13px",
                  color: "#000000",
                }}
              />
            </Box>
            <Box
              display="flex"
              marginLeft="7%"
              alignItems="center"
              marginBottom="3%"
            >
              <Typography
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="12px"
                color="#000000"
                marginRight="25%"
              >
                Page Size :
              </Typography>
              <Box
                onClick={handleA5}
                sx={{
                  backgroundColor: A5 ? "#0057FF" : "#D9D9D9",
                  color: A5 ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  margin: "0 6px",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  A5
                </Typography>
              </Box>
              <Box
                onClick={handleA4}
                sx={{
                  backgroundColor: A4 ? "#0057FF" : "#D9D9D9",
                  color: A4 ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  margin: "0 10px",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  A4
                </Typography>
              </Box>
              <Box
                onClick={handleA3}
                sx={{
                  backgroundColor: A3 ? "#0057FF" : "#D9D9D9",
                  color: A3 ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  margin: "0 10px",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  A3
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              marginLeft="7%"
              alignItems="center"
              marginBottom="3%"
            >
              <Typography
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="12px"
                color="#000000"
                marginRight="25%"
              >
                Orientation :
              </Typography>
              <Box
                onClick={handleHorizontal}
                sx={{
                  backgroundColor: horizontal ? "#0057FF" : "#D9D9D9",
                  color: horizontal ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  Horizontal
                </Typography>
              </Box>
              <Box
                onClick={handleVertical}
                sx={{
                  backgroundColor: vertical ? "#0057FF" : "#D9D9D9",
                  color: vertical ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  margin: "0 10px",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  Vertical
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              marginLeft="7%"
              alignItems="center"
              marginBottom="3%"
            >
              <Typography
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="12px"
                color="#000000"
                marginRight="25%"
              >
                Print Type :
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#D9D9D9",
                  color: "#888888",
                  borderRadius: "5px",
                  border: "0.5px solid #888888",
                  margin: "0 5px",
                  padding: "2px 10px",
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="200"
                  fontSize="13px"
                  fontStyle="italic"
                >
                  Black-and-White
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              marginLeft="7%"
              alignItems="center"
              marginBottom="13%"
            >
              <Typography
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="12px"
                color="#000000"
                marginRight="30%"
              >
                Mode :
              </Typography>
              <Box
                onClick={handleDouble}
                sx={{
                  backgroundColor: double ? "#0057FF" : "#D9D9D9",
                  color: double ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  margin: "0 8px",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  Double-sided
                </Typography>
              </Box>
              <Box
                onClick={handleSingle}
                sx={{
                  backgroundColor: single ? "#0057FF" : "#D9D9D9",
                  color: single ? "#FFFFFF" : "#000000",
                  borderRadius: "3px",
                  padding: "2px 10px",
                  margin: "0 10px",
                  "&:hover": {
                    backgroundColor: "#888888",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="12px"
                >
                  Single-sided
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridAutoRows="173px" //from 145px in figma + mt 25px
        marginTop="20%"
        justifyItems="center"
      >
        <Box
          onClick={() => navigate("../config")}
          border="1px solid #0057FF"
          borderRadius="5px"
          height="20%"
          width="30%"
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="5px 10px"
          sx={{
            backgroundColor: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#d9d9d9",
              cursor: "pointer",
            },
          }}
        >
          <Typography
            fontFamily="Roboto"
            fontWeight="600"
            fontSize="16px"
            color="#0057FF"
          >
            Cancel
          </Typography>
        </Box>
        <Box
          borderRadius="5px"
          height="20%"
          width="30%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="5px 10px"
          marginLeft="-100%"
          sx={{
            backgroundColor: "#0057FF",
            "&:hover": {
              backgroundColor: "#0099FF",
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
          <Typography
            fontFamily="Roboto"
            fontWeight="600"
            fontSize="16px"
            color="#FFFFFF"
          >
            Save
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FileConfig;
