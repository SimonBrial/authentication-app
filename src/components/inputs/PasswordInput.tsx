const PasswordInput = () => {
  return (
    <div className=" flex gap-4 items-center w-full">
      <label className="w-1/3 text-violet-500">Password</label>
      <input
        type="password"
        placeholder="Password"
        className="p-1 border text-violet-500 border-violet-400 rounded-md w-2/3 focus:border-violet-500 active:border-violet-500 focus:outline-none focus:ring focus:ring-violet-300 placeholder:text-violet-200 placeholder:px-1 "
      />
    </div>
  );
};

export default PasswordInput;
