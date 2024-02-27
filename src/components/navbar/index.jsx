import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className={styles.appBar}>
        <Typography variant="h6">Cloud Monitor Dashboard</Typography>
        <NavLink to="/">
          <Typography textAlign="center">Home</Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
