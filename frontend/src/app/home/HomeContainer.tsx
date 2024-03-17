/* import { Link, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"; */

const HomeContainer = () => {
  // const path = useLocation();
  return (
    <div className="p-4 sm:w-[40%] h-screen flex flex-col justify-center gap-2 mx-auto">
      {/* {path.pathname === "/home" ? (
        <Link to={"/edit"} className="w-[10.6rem]">
            <button className="group border-2 border-violet-300 p-2 px-5 flex items-center gap-2 text-violet-500 hover:font-bold hover:bg-violet-200 transition-all rounded-md shadow-md">
              <p>Edit Profile</p>
              <span className="text-3xl group-hover:scale-105">
                <IoIosArrowRoundForward />
              </span>
            </button>
          </Link>
      ) : (
        <Link to={"/edit"} className="w-[10.6rem]">
          <button className="group border-2 border-violet-300 p-2 px-5 flex items-center gap-2 text-violet-500 hover:font-bold hover:bg-violet-200 transition-all rounded-md shadow-md">
            <span className="text-3xl group-hover:scale-105">
              <IoIosArrowRoundBack />
            </span>
            <p>Back</p>
          </button>
        </Link>
      )} */}
      <div className="border-2 sm:h-[65%] rounded-md shadow-md border-violet-300 p-10 bg-white">
        <div className="relative cursor-default mb-5">
          <h1 className="text-center text-2xl text-violet-400">
            User Description
          </h1>
          <span className="h-1 w-full bg-violet-400 absolute"></span>
        </div>
        <ul>
          <li className="flex justify-between items-center border-b-violet-400 border-2 border-transparent pt-0 p-4 cursor-default">
            <h2 className="w-1/3 font-bold text-violet-500">User Photo</h2>
            <img
              alt="user photo"
              src="public/user-photo.jpg"
              className="w-16 h-16 rounded-full"
            />
          </li>
          <li className="flex justify-between items-center border-b-violet-400 border-2 border-transparent p-4">
            <h2 className="w-1/3 font-bold text-violet-500">Name</h2>
            <p className="w-2/3 text-end text-violet-500">Simon Briceño</p>
          </li>
          <li className="flex justify-between items-center border-b-violet-400 border-2 border-transparent p-4">
            <h2 className="w-1/3 font-bold text-violet-500">Mail</h2>
            <p className="w-2/3 text-end text-violet-500">correo@correo.com</p>
          </li>
          <li className="flex justify-between items-center border-b-violet-400 border-2 border-transparent p-4">
            <h2 className="w-1/3 font-bold text-violet-500">Bio</h2>
            <p className="w-2/3 text-end text-violet-500">
              Any description about the user...
            </p>
          </li>
          <li className="flex justify-between items-center border-b-violet-400 border-2 border-transparent p-4">
            <h2 className="w-1/3 font-bold text-violet-500">Job</h2>
            <p className="w-2/3 text-end text-violet-500">Web Dev & Electrical Enginner</p>
          </li>
          <li className="flex justify-between items-center p-4">
            <h2 className="w-1/3 font-bold text-violet-500">Phone number</h2>
            <p className="w-2/3 text-end text-violet-500">+58 424-444.25.08</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeContainer;
