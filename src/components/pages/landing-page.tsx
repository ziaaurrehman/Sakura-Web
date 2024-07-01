import Footer from "../custom/footer";
import Header from "../custom/header";

const LandingPage = () => {
  const item = [1, 2, 3];
  return (
    <div className="w-full">
      <Header />
      <div className="w-full bg-[url('/hero.png')] h-max bg-no-repeat relative flex justify-between">
        <div className="mt-8 text-7xl text-accent flex w-full justify-center font-chakra font-semibold">
          <div className="relative">
            <img
              src="/ring.png"
              alt="ring"
              className="absolute top-0 left-40 w-16"
            />
            <p className="text-7xl text-accent">300</p>
            <p className="text-white w-[50%]">WELCOME BONUS</p>
          </div>
        </div>
        <div className="w-[85%]">
          <img src="/hero2.png" alt="/hero2" />
        </div>

        <div className="absolute w-[80%] mx-auto flex justify-around bottom-0 left-[50%] translate-x-[-50%] font-semibold">
          {item.map((item) => (
            <div
              key={item}
              className={`border-2 border-primary rounded-t-lg py-2 px-6 ${
                item === 2 ? "text-accent" : "text-white"
              } space-y-2 bg-dark/90`}
            >
              <div className="flex items-center justify-center font-chakra">
                <div className="rounded-full border-2 border-accent w-max h-max py-1 px-3">
                  {item}
                </div>
              </div>
              <p className="font-chakra">Welcome Bonus -300% Deposit</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
