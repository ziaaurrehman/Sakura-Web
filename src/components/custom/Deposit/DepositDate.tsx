import Payment from "../BankContainer";
import CustomButton from "../CustomButton";
import PaymentOption from "../PaymentOption";

const DepositDate = () => {
  const arr = [
    "Deposit",
    "Withdrawal",
    "Betting",
    "Promotion",
    "Transfer",
    "Rebate",
  ];
  return (
    <Payment>
      <div className="w-[95%] mx-auto">
        <PaymentOption />
        <div className="my-4">
          <div className="flex gap-2 flex-wrap pb-6 border-b-2 border-darkPurple">
            {arr.map((item, index) => (
              <button
                key={index}
                className="w-[32%] p-2 text-center text-white font-light cursor-pointer font-chakra bg-darkPurple border border-dark rounded-md active:bg-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="my-4 font-chakra px-4 space-y-3">
            <p>Date Range</p>
            <input
              className="w-full p-2 text-sm rounded-md text-darkPurple"
              placeholder="2024-05-22"
            />
            <p>To</p>
            <input
              className="w-full p-2 text-sm rounded-md text-darkPurple"
              placeholder="2024-05-22"
            />
            <div className="py-4">
              <CustomButton
                size="large"
                text="Deposit"
                onClick={() => console.log("Hi")}
              />
            </div>
          </div>
        </div>
      </div>
    </Payment>
  );
};

export default DepositDate;
