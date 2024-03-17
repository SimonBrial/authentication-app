import { Outlet } from "react-router-dom";
import UserDropDown from "../components/UserDropDown";

const MainContainer = () => {
  return (
    <section className="">
      <UserDropDown />
      <Outlet />
    </section>
  );
};

export default MainContainer;
