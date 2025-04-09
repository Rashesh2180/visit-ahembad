import React from "react";

const HistorySubscribe = () => {
  return (
    <div className="relative history-subscribe bg-cover bg-no-repeat h-[500px]">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] z-0"></div>

      <div className="relative z-10 text-white flex justify-center items-center flex-col h-full p-5">
        <h2 className="text-2xl mb-4 font-bold">Subscribe to Our Newsletter</h2>
        <p className="text-center mb-10">Sign up with your email address to receive news and updates.</p>
        <div className="flex gap-3 items-center max-md:flex-wrap">
            <input type="text" className="bg-white p-5 px-8 outline-none text-black w-full " placeholder="Email Address" />
            <button className="py-5 px-8 text-center text-black cursor-pointer bg-purple-50 text-nowrap font-medium hover:opacity-60">Sign Up</button>

        </div>
      </div>
    </div>
  );
};

export default HistorySubscribe;
