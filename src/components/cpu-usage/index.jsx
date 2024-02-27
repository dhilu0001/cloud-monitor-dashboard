import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { CPUUsageData, timeLabels } from "../../api-mocks/mockData";

const CPUUsage = () => {
  return (
    <div>
      <Typography>CPU Usage</Typography>
      <LineChart
        width={500}
        height={300}
        series={CPUUsageData}
        xAxis={[{ scaleType: "point", data: timeLabels }]}
      />
    </div>
  );
};

export default CPUUsage;
