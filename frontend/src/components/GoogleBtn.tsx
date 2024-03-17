import { Link } from "react-router-dom";
import GoogleIcon from "../icons/GoogleIcon";

const GoogleBtn = () => {
  return (
    <Link to={"/home"} className="w-2/3">
      <button className="border-2 flex items-center gap-2 justify-center p-2 text-slate-500 hover:text-slate-600 cursor-pointer hover:bg-slate-50 transition-all rounded-md border-slate-200 shadow-md w-full bg-white hover:font-bold">
        Sign Up with Google{" "}
        <span className="">
          <GoogleIcon />
        </span>
      </button>
    </Link>
  );
};

export default GoogleBtn;
