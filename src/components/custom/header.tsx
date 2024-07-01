import { MdKeyboardArrowDown } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbWallet } from "react-icons/tb";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(0);
  const data = [
    "Home",
    "Originals",
    "Slots",
    "Live Casion",
    "Lottery",
    "Sports Book",
    "VIP Programme",
    "Promotions",
    "Tournaments",
  ];
  return (
    <div className="w-full">
      <div className="bg-lightBlack relative overflow-hidden">
        <div className="w-[90%] mx-auto flex justify-between text-white items-end">
          <div>
            <img src="/sakura-logo.png" alt="sakura" className="py-2" />
          </div>
          <div className="mid-section rounded-t-2xl p-2 bg-primary h-max">
            <p className="text-xs md:text-sm text-white font-light font-chakra">
              Clam your 300% Welcome bonus now!! Please use FPX or QR for
              deposit manual Deposit under maintenance
            </p>
          </div>

          <div className="flex items-center gap-4 py-2">
            <div className="flex gap-2 items-center mr-8">
              <p className="font-chakra font-light uppercase">0 MYR</p>
              <MdKeyboardArrowDown className="size-10" />
            </div>
            <TbWallet className="size-6" />
            <MdOutlineNotificationsActive className="size-6" />
            <IoPersonOutline className="size-6" />
          </div>
        </div>
      </div>

      <div className="bg-black py-3 pl-10">
        <div className="w-[90%] flex justify-around">
          {data.map((item, index) => (
            <p
              key={index}
              className={`font-light font-chakra uppercase cursor-pointer transition-colors hover:text-accent ${
                index === active ? "text-primary" : "text-white"
              }`}
              onClick={() => setActive(index)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
