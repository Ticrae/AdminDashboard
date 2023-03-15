import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";

const Pie = () => {
  return (
    <Box m={"20px"}>
      <Header title={"PIE CHART"} subtitle={"Simple Pie Chart"} />
      <Box height={"65vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
