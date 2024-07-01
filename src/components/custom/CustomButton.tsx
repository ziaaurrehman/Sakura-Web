import React from "react";

interface CustomButtonProps {
  size: "medium" | "large";
  text: string;
  icon?: React.ReactNode | string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  text,
  icon,
  onClick,
}) => {
  return (
    <div>
      {size === "medium" ? (
        <button
          className={`w-max p-2 rounded-md cursor-pointer bg-primary active:bg-primary/70 transition-colors ${
            icon ? "flex gap-2 items-center" : "text-center"
          }`}
          onClick={onClick}
        >
          {icon && <img src={icon.toString()} alt="icon" className="w-4 h-4" />}
          <p className="text-sm uppercase font-chakra">{text}</p>
        </button>
      ) : size === "large" ? (
        <button
          className={` w-full p-2 rounded-xl cursor-pointer bg-primary hover:bg-darkPurple  active:bg-primary/70 transition-colors ${
            icon ? "flex gap-2 items-center" : "text-center"
          }`}
          onClick={onClick}
        >
          {icon && <img src={icon.toString()} alt="icon" className="w-6 h-6" />}
          <p className="text-sm capitalize font-chakra">{text}</p>
        </button>
      ) : null}
    </div>
  );
};

export default CustomButton;
