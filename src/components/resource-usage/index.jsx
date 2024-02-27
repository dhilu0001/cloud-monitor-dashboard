import { BarChart } from "@mui/x-charts/BarChart";
import { Typography } from "@mui/material";
import {
  ResourceUsageData,
  ResourceUsageSeries,
  ResourceUsageChartSetting,
} from "../../api-mocks/mockData";

const ResourceUsage = () => {
  return (
    <div>
      <Typography>Resource</Typography>
      <BarChart
        dataset={ResourceUsageData}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={ResourceUsageSeries}
        {...ResourceUsageChartSetting}
      />
    </div>
  );
};

export default ResourceUsage;
