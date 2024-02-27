import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import styles from "./style.module.css";
import {
  Alerts,
  CPUUsage,
  MemoryConsumption,
  ResourceUsage,
  ServerStatus,
  CloudResourcesGrid,
} from "../../components";

const Landing = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className={styles.dashboard}>
        <Grid item xs={12} sm={8} md={6} lg={5}>
          <CloudResourcesGrid />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          lg={3.5}
          className={styles.notificationContainer}
        >
          <Alerts />
          <ServerStatus />
          <CPUUsage />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3.5}
          className={styles.resourceContainer}
        >
          <MemoryConsumption />
          <ResourceUsage />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
