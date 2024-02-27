import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </>
  );
};

export default Home;
