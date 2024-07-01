import Payment from "../BankContainer";
import PaymentOption from "../PaymentOption";
import CryptoOptions from "../crypto";

const ManageCrypto = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Payment>
      <div className="w-[90%] mx-auto">
        <PaymentOption />
        <CryptoOptions />
        <div className="my-4">
          <p>Coins</p>
          <div className="my-2 flex justify-center pb-4 border-b-2 border-darkPurple flex-wrap gap-2">
            {items.map((item) => (
              <div
                key={item}
                className="w-[23%] cursor-pointer flex justify-center items-center py-3 rounded-md bg-darkPurple active:bg-accent transition-colors"
              >
                <div className="size-[30px] bg-white rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-4">
          <p>Network</p>
          <div className="my-4 flex justify-around pb-4 border-b-2 border-darkPurple">
            <button className="text-black text-sm w-[40%] py-2 rounded-md bg-white border border-primary transition-colors hover:text-white hover:bg-primary hover:border-white">
              TRC 70
            </button>
            <button className="text-black text-sm w-[40%] py-2 rounded-md bg-white border border-primary transition-colors hover:text-white hover:bg-primary hover:border-white">
              TRC 20
            </button>
          </div>
        </div>
        <div className="my-6 space-y-2">
          <div className="flex justify-center">
            <img src="/qr.png" alt="qr" />
          </div>
          <p className="text-center text-lg capitalize font-light">
            Crypto wallet QR
          </p>
        </div>
      </div>
    </Payment>
  );
};

export default ManageCrypto;
