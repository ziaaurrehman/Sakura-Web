const Footer = () => {
  return (
    <div className="w-full bg-lightBlack text-white">
      <div className="w-[85%] mx-auto flex justify-center gap-4 py-8 items-center font-chakra">
        <div className="w-full text-sm space-y-2 mr-16">
          <img src="/sakura-logo.png" alt="logo" className="" />
          <p className="text-wrap">
            Welcome to Sakura Casino, your top choice for thrilling games and
            generous bonuses!
          </p>
        </div>
        <div className="w-full space-y-3 text-sm">
          <p className="cursor-pointer hover:underline hover:text-accent transition-colors">
            Sakura Originals
          </p>
          <p className="cursor-pointer hover:underline hover:text-accent transition-colors">
            Sakura Slots
          </p>
          <p className="cursor-pointer hover:underline hover:text-accent transition-colors">
            Live Casino
          </p>
        </div>
        <div className="w-full space-y-3 text-sm">
          <p className="cursor-pointer hover:underline hover:text-accent transition-colors">
            Casino Fishing
          </p>
          <p className="cursor-pointer hover:underline hover:text-accent transition-colors">
            Tournaments
          </p>
          <p className="cursor-pointer hover:underline hover:text-accent transition-colors">
            Promotions
          </p>
        </div>
        <div className="w-full space-y-3 text-sm">
          <p className="cursor-pointer hover:underline hover:text-accent transition-colors">
            VIP Programme
          </p>
          <p className="cursor-pointer hover:underline hover:text-accent transition-colors">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:underline hover:text-accent transition-colors">
            Affiliates
          </p>
        </div>
        <div className="w-full h-full space-y-3 text-sm flex items-start">
          <p className="cursor-pointer hover:underline hover:text-accent transition-colors">
            Contact Us
          </p>
        </div>
        <div className="w-full space-y-1 text-sm">
          <p className="text-base font-semibold">Email Address</p>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="w-full p-2 bg-black/70 text-gray-400 text-sm rounded-md"
          />
        </div>
      </div>
      <div className="w-full bg-primary">
        <p className="text-center font-chakra text-sm p-1">
          Copyright @ 2024 Sakura688.com | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
