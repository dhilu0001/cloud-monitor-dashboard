import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/not-found.svg";

import styles from "./style.module.css";

const Error = () => {
  const error = useRouteError();
  console.log({ error });
  if (error.status === 404) {
    return (
      <div className={styles.error}>
        <img className={styles.imageContainer} src={img} alt="not found" />
        <h3 className={styles.title}>Ohh!</h3>
        <p className={styles.message}>
          We cant seem to find page you are looking for
        </p>
        <Link to="/">back home</Link>
      </div>
    );
  }
  return <p>Something Went Wrong</p>;
};

export default Error;
