import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import styles from "./style.module.css";
import {
  ServerStatusOptions,
  getRandomColor,
  getRandomNumber,
} from "../../api-mocks/mockData";

const ServerStatus = () => {
  return (
    <div className={styles.statusContainer}>
      <Typography>Server Status</Typography>
      <div className={styles.serverStatus}>
        {ServerStatusOptions.map((option, index) => {
          const randomNumber = getRandomNumber();
          return (
            <div key={index}>
              <Typography>{option}</Typography>
              <Avatar
                sx={{ bgcolor: getRandomColor(randomNumber) }}
                variant="rounded"
              >
                <Typography>{randomNumber}</Typography>
              </Avatar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServerStatus;
