import FileInput from "../../components/inputs/FileInput";
import InputLayout from "../../components/inputs/InputLayout";
import MailInput from "../../components/inputs/MailInput";
import PasswordInput from "../../components/inputs/PasswordInput";

const EditFieldContainer = () => {
  return (
    <div className="p-4 sm:w-[40%] h-screen flex flex-col justify-center gap-2 mx-auto">
      <div className="border-2 sm:h-[65%] rounded-md shadow-md border-violet-300 p-10 bg-white">
        <div className="relative cursor-default mb-5">
          <h1 className="text-center text-2xl text-violet-400">
            Edit User Description
          </h1>
          <span className="h-1 w-full bg-violet-400 absolute"></span>
        </div>
        <ul>
          <li className="flex justify-between items-center border-b-violet-400 border-2 border-transparent pt-0 p-4 cursor-default">
            {/* <h2 className="w-1/3 font-bold text-violet-500">User Photo</h2> */}
            <FileInput key={crypto.randomUUID()} />
          </li>
          <li className="flex justify-between items-center border-b-violet-400 border-2 border-transparent p-4">
            <InputLayout label="Name" key={crypto.randomUUID()} />
          </li>
          <li className="flex justify-between items-center border-b-violet-400 border-2 border-transparent p-4">
            <MailInput key={crypto.randomUUID()} />
          </li>
          <li className="flex justify-between items-center border-b-violet-400 border-2 border-transparent p-4">
            <h2 className="w-1/3 text-violet-500">Bio</h2>
            <textarea
              defaultValue={"Any description about the user..."}
              className="w-2/3 text-end border text-violet-500 border-violet-400 rounded-md focus:border-violet-500 active:border-violet-500 focus:outline-none focus:ring focus:ring-violet-300 placeholder:text-violet-200 placeholder:px-1"
            />
          </li>
          <li className="flex justify-between items-center border-b-violet-400 border-2 border-transparent p-4">
            <InputLayout label="Job" key={crypto.randomUUID()} />
          </li>
          <li className="flex justify-between items-center p-4">
            <PasswordInput />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditFieldContainer;
