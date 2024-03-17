const BtnLayout = ({
  btnType,
}: {
  btnType: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button
      type={btnType}
      className="px-4 py-1 rounded-md bg-violet-400 text-white w-full text-lg shadow-md hover:font-bold transition-all"
    >
      Sign Up
    </button>
  );
};

export default BtnLayout;
