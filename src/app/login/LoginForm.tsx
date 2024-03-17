import BtnLayout from "../../components/BtnLayout";
import GoogleBtn from "../../components/GoogleBtn";
import InputLayout from "../../components/inputs/InputLayout";
import MailInput from "../../components/inputs/MailInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import ReactImg from "../../icons/ReactImg";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="border-2 border-slate-100 w-[90%] p-10 shadow-md rounded-md bg-white">
        <div className="w-[50%] mx-auto pb-5">
          <ReactImg />
        </div>
        <div className="relative cursor-default mb-5">
          <h1 className="text-center text-2xl text-violet-400">
            Login
          </h1>
          <span className="h-1 w-full bg-violet-400 absolute"></span>
        </div>
        <form className="flex flex-col gap-2 items-center justify-center w-full mb-5">
          <InputLayout label="User name" key={crypto.randomUUID()} />
          <MailInput key={crypto.randomUUID()} />
          <PasswordInput key={crypto.randomUUID()} />
          <BtnLayout btnType="submit" key={crypto.randomUUID()} />
        </form>
        <GoogleBtn />
      </div>
    </div>
  );
};

export default LoginForm;
