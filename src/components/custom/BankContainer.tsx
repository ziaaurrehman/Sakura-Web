import React, { ReactNode } from "react";

interface PaymentProps {
  children: ReactNode;
}

const Payment: React.FC<PaymentProps> = ({ children }) => {
  return (
    <div className="flex w-[900px] h-[600px]">
      <div className="rounded-l-lg w-[70%]">
        <img src="/robot.png" alt="robot" className="h-full w-full" />
      </div>

      <div className="flex justify-center items-center w-full h-full font-chakra font-bold text-white bg-gradient-to-b from-black/90 to-gradient/90">
        {children}
      </div>
    </div>
  );
};

export default Payment;
