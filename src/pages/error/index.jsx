import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/not-found.svg";
import { Typography } from "@mui/material";
import styles from "./style.module.css";

const Error = () => {
  const error = useRouteError();
  console.log({ error });
  if (error.status === 404) {
    return (
      <div className={styles.error}>
        <img className={styles.imageContainer} src={img} alt="not found" />
        <Typography variant="h3">Ohh!</Typography>
        <Typography variant="label">
          We cant seem to find page you are looking for
        </Typography>
        <Link to="/">
          <Typography variant="h5">Back Home</Typography>
        </Link>
      </div>
    );
  }
  return <p>Something Went Wrong</p>;
};

export default Error;
