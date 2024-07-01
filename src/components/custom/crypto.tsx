import { MdOutlinePayments } from "react-icons/md";
import { BsQrCodeScan } from "react-icons/bs";
import { RiBitCoinFill } from "react-icons/ri";
import { TbTransactionBitcoin } from "react-icons/tb";
import { useState } from "react";

const CryptoOptions = () => {
  const [active, setActive] = useState(0);
  const data = [
    {
      text: "Manual",
      icon: MdOutlinePayments,
    },
    {
      text: "FPX",
      icon: RiBitCoinFill,
    },
    {
      text: "QR",
      icon: BsQrCodeScan,
    },
    {
      text: "Crypto",
      icon: TbTransactionBitcoin,
    },
  ];
  return (
    <div className="my-6 flex w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-full pb-4 border-b-2 cursor-pointer transition-colors  flex justify-center items-center gap-2 ${
            active === index
              ? "text-pink-500 border-pink-500"
              : "text-white border-white"
          }`}
          onClick={() => setActive(index)}
        >
          <item.icon className="text-xl" />
          <p className={` text-sm font-light`}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoOptions;
