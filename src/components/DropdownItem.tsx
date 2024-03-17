import React from "react";
import { Link } from "react-router-dom";

const DropdownItem = ({
  icon,
  label,
  dir,
}: {
  icon: React.ReactNode;
  label: string;
  dir: string;
}) => {
  return (
    <Link to={dir}>
      <div className="flex items-center justify-between py-2 px-3 hover:bg-violet-300 rounded-md text-violet-400 hover:text-white transition-all">
        <span className="text-2xl">{icon}</span>
        <p className="font-bold">{label}</p>
      </div>
    </Link>
  );
};

export default DropdownItem;
