import { useState } from "react";

const PaymentOption = () => {
  const [mode, setMode] = useState("bank");

  return (
    <div className="flex justify-between text-center w-full">
      <div
        className={`w-full border-b-2 cursor-pointer transition-colors py-4 p-2 ${
          mode === "bank"
            ? "border-primary text-primary"
            : "border-white text-white"
        }`}
        onClick={() => setMode("bank")}
      >
        Deposit
      </div>
      <div
        className={`w-full border-b-2 cursor-pointer py-4 p-2 ${
          mode === "fpx"
            ? "border-primary text-primary"
            : "border-white text-white"
        }`}
        onClick={() => setMode("fpx")}
      >
        Withdrawal
      </div>
      <div
        className={`w-full border-b-2 cursor-pointer py-4 p-2 ${
          mode === "history"
            ? "border-primary text-primary"
            : "border-white text-white"
        }`}
        onClick={() => setMode("history")}
      >
        History
      </div>
    </div>
  );
};

export default PaymentOption;
