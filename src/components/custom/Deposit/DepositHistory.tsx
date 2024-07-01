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

  const data = [
    {
      date: "2024-5-22",
      remark: "TXN ID:2190213",
      status: "Failed",
      creditDebit: "MYR 30.00",
    },
    {
      date: "2024-5-22",
      remark: "TXN ID:2190213",
      status: "Failed",
      creditDebit: "MYR 30.00",
    },
    {
      date: "2024-5-22",
      remark: "TXN ID:2190213",
      status: "Failed",
      creditDebit: "MYR 30.00",
    },
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
            <div className="flex gap-4">
              <div className="space-y-2 text-sm">
                <p>Date Range</p>
                <input
                  className="w-full p-2 text-sm rounded-md text-darkPurple"
                  placeholder="2024-05-22"
                />
              </div>
              <div className="space-y-2 text-sm">
                <p>To</p>
                <input
                  className="w-full p-2 text-sm rounded-md text-darkPurple"
                  placeholder="2024-05-22"
                />
              </div>
            </div>
            <div className="py-2">
              <CustomButton
                size="large"
                text="Search"
                onClick={() => console.log("Hi")}
              />
            </div>
            {/* Table */}
            <div className="flex justify-center items-center">
              <div className="w-full mx-auto overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="p-1 w-max bg-accent font-chakra text-black uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="p-1 bg-accent font-chakra text-black uppercase tracking-wider"
                        >
                          Remark
                        </th>
                        <th
                          scope="col"
                          className="p-1 bg-accent font-chakra text-black uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="p-1 bg-accent font-chakra text-black uppercase tracking-wider"
                        >
                          Credit/Debit
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-500 font-light text-center">
                      {data.map((item, index) => (
                        <tr
                          key={index}
                          className="bg-white font-chakra text-sm"
                        >
                          <td className="border border-gray-200">
                            {item.date}
                          </td>
                          <td className="border border-gray-200">
                            {item.remark}
                          </td>
                          <td
                            className={`border border-gray-200 text-sm ${
                              item.status === "Success" ? "" : "text-accent"
                            }`}
                          >
                            {item.status}
                          </td>
                          <td className="border border-gray-200 text-sm">
                            {item.creditDebit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Payment>
  );
};

export default DepositDate;
