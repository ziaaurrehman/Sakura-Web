import { Route, Routes } from "react-router-dom";
import "./App.css";
import ManagePayment from "./components/pages/ManagePayments";
import DepositDate from "./components/custom/Deposit/DepositDate";
import DepositHistory from "./components/custom/Deposit/DepositHistory";
import ManageCrypto from "./components/custom/Deposit/ManageCrypto";
import LandingPage from "./components/pages/landing-page";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Routes>
          <Route path="/deposit-date" element={<DepositDate />} />
          <Route path="/deposit-history" element={<DepositHistory />} />
          <Route path="/manage-payment" element={<ManagePayment />} />
          <Route path="/crypto" element={<ManageCrypto />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
