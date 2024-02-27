import { PieChart } from "@mui/x-charts/PieChart";
import { Typography } from "@mui/material";
import { MemoryConsumptionData } from "../../api-mocks/mockData";

const MemoryConsumption = () => {
  return (
    <div>
      <Typography>Memory Consumption (%)</Typography>
      <PieChart
        series={[
          {
            data: MemoryConsumptionData,
          },
        ]}
        width={500}
        height={350}
      />
    </div>
  );
};

export default MemoryConsumption;
