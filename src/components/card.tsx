// import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface IconTextProps {
  text: string;
  icon: IconType;
}

const IconText: React.FC<IconTextProps> = ({ text, icon: Icon }) => {
  return (
    <div className="flex flex-col justify-start gap-2 rounded py-4 flex items-center mx-6">
      <Icon className="h-6 w-6 text-teal-500 bg-inherit" />
      <span className="bg-inherit flex justify-left text-sm font-normal leading-6">
        {text}
      </span>
    </div>
  );
};

export default IconText;
