import { Box, Typography } from "@mui/material";
import Header from "../../components/header";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import contex from "../../assets/img/contextual_token.svg";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Welcome back !"
          subtitle="Thank you for your commitment to excellence"
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="173px" //from 145px in figma + mt 25px
        gap="10px"
      >
        {/* ROW 1 */}
        <Box gridColumn="span 7" display="flex">
          <StatBox
            type="1"
            title="Last Access Activity"
            content="05/10/2024 10:12:42"
            subtitle="Total access: 478"
            icon={<img src={contex} alt={`${contex} Icon`} />}
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 9"
          gridRow="2"
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gap="7%"
          mt="25px"
        >
          <Box display="flex">
            <StatBox
              type="2"
              title="Student Access"
              content="128"
              subtitle={
                <span>
                  <span style={{ color: "#FF0000" }}>-16%</span> from yesterday
                </span>
              }
            />
          </Box>
          <Box display="flex">
            <StatBox
              type="2"
              title="Print Request"
              content="64"
              subtitle={
                <span>
                  <span style={{ color: "#16A34A" }}>+28%</span> from yesterday
                </span>
              }
            />
          </Box>
          <Box display="flex">
            <StatBox
              type="2"
              title="Sold A4 pages"
              content="16"
              subtitle={
                <span>
                  <span style={{ color: "#16A34A" }}>+220%</span> from yesterday
                </span>
              }
            />
          </Box>
        </Box>
        {/* ROW 3 */}
        <Box
          gridColumn="span 12"
          gridRow="3 / span 2"
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gap="4%"
          mr="25%"
        >
            <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                flexDirection="row"
                borderRadius="10px"
                overflow="hidden"
                sx={{
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Box style={{flex: 1}}>
                    <Typography variant="h6" fontSize="18px" fontWeight="600" color="#000000" marginTop="5%"> 
                        Sales
                    </Typography>
                    <LineChart />
                </Box>
            </Box>

            <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                flexDirection="row"
                borderRadius="10px"
                overflow="hidden"
                sx={{
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Box style={{flex: 1}}>
                    <Typography variant="h6" fontSize="18px" fontWeight="600" color="#000000" marginTop="5%"> 
                        My Access
                    </Typography>
                    <LineChart />
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
