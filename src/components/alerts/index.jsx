import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Alert, Typography, Collapse } from "@mui/material";
import { generateMockAlert } from "../../api-mocks/mockData";

import styles from "./style.module.css";

const fetchAlertsQuery = {
  queryKey: ["alerts"],
  queryFn: async () => generateMockAlert(),
  refetchInterval: 10000,
};

const AlertComponent = () => {
  const [alerts, setAlerts] = useState([]);
  const { data, isLoading } = useQuery(fetchAlertsQuery);

  useEffect(() => {
    if (data) {
      setAlerts((prevAlerts) => [data, ...prevAlerts.slice(0, 2)]);
    }
  }, [data]);
  if (isLoading) {
    return;
  }

  const handleAlertClose = (index) => {
    setAlerts((prevAlerts) => prevAlerts.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.alertContainer}>
      <Typography>Recent Alerts</Typography>
      {alerts.slice(0, 3).map((alert, index) => (
        <Collapse in key={index} timeout={{ enter: 500, exit: 300 }}>
          <Alert
            key={index}
            severity={alert.severity}
            onClose={() => handleAlertClose(index)}
            variant="outlined"
            className={styles.alert}
          >
            {alert.message}
          </Alert>
        </Collapse>
      ))}
    </div>
  );
};

export default AlertComponent;
