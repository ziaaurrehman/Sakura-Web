import { useState } from "react";
import CustomButton from "../custom/CustomButton";
import Payment from "../custom/BankContainer";
import BankForm from "../custom/BankForm";

const ManagePayment: React.FC = () => {
  const [active, setActive] = useState<string>("bank");
  const [bank, setBank] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("bank");

  const handleChange = (text: string) => {
    setActive(text);
  };

  return (
    <div className="w-full h-screen bg-dark flex justify-center items-center">
      <Payment>
        <div className="border h-max border-primary rounded-md p-5 bg-dark w-[80%]">
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
            {bank ? (
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
            ) : (
              ""
            )}
          </div>
          <div
            className={`flex ${
              bank ? "justify-start" : "justify-center"
            } gap-2 my-8`}
          >
            <CustomButton
              size="medium"
              text="Bank Withdraw"
              icon="/withdraw.png"
              onClick={() => handleChange("bank")}
            />
            <CustomButton
              size="medium"
              text="FPX Withdrawal"
              icon="/deposit.png"
              onClick={() => handleChange("fpx")}
            />
          </div>
          {!bank ? (
            <div className="my-2 w-[80%] mx-auto flex flex-col gap-2 items-center">
              <img src="/empty.png" alt="empty" className="w-8" />
              <p className="font-chakra text-sm text-center">
                You have not provided any Bank Account Information!
              </p>
            </div>
          ) : (
            <BankForm />
          )}
          <div className="my-4 w-[60%] mx-auto">
            {!bank && (
              <CustomButton
                size="large"
                text="Add Bank Details"
                icon=""
                onClick={() => setBank(true)}
              />
            )}
          </div>
        </div>
      </Payment>
    </div>
  );
};

export default ManagePayment;
