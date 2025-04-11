import Image from "next/image";
import React from "react";

const HeroPage3 = ({ data }) => {
  return (
    <div className="sm:py-20 py-10  bg-[#EFEBFA]">
      <div className="main-container">
        <h2 className="section-title max-w-4xl sm:mb-16 mb-8">{data?.title}</h2>
        <div className="flex justify-center gap-8 flex-wrap ">
          {data?.data?.length > 0 &&
            data?.data?.map((ele) => (
              <div
                key={ele.id}
                className="flex flex-col flex-1 gap-5 min-w-[300px] max-w-[400px]"
              >
                <Image
                  src={
                    ele.img ||
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAMFBMVEXz9Pa5vsro6u729/ji5OnT1969ws21usjM0NjFydPw8fTR1Nz5+vre4OXIzNXt7vGvU6iIAAACq0lEQVR4nO3b23qiMBRAYcLmmBh4/7cdBascglrImE2/9d+N07FdsyEGi1kGAAAAAAAAAAAAAAAAAAAAAAAAAEAEcolDJHVJluW+jMMXNm2J5G0dT1dcUsZ4E1XtE7YUVdwYY3yyE8d2sVtMm6pF8nEwVRxjTZFoNFIO374p4nDDs5VpY3KJY5yzS9PyiIn0dMRE88djRGxu9+6xdMVYP+xtqnLfHktVTN/V9fBA3RZ7nk5TTG/q5wv5nj2WohjbTVpMtWM2emLET1uu24Lfnzd6YrJ2sWHMf72m6YnJF7vf6sVZ04c71cRIsYgx5eY/c10ffFxPzOqScytGytp0wdmoiclWk9k4zMTdForgbPTEyOICemttLsdFLzQbPTEXN48JnxfW3RfwOvD3emLuP8rrxcyWr2oVxcyXgMYGTvFpy202iy9RFHP903M2LnSQzVoCR5qmmOuK1lXmdgnQ+tBeZtGyXgV0xUhf+NtbxsFLT1uu3zBsZrPRFfOSW6UsZ3OemLIOxcxqzhIjGy2zFfosMZst0zXtJDHbLdMapTG2mO7M1mvyoua+kKuMkeskJheab1qeewGVMdnt4e7n0dDrS3g2CmNkaDGP2byby/DFw+/LFMY8fvqx5v1c9MbIcxJ124t8Mhe1MbOjquo/a1Eas5jEp7+L1hnz6tXxbDEfHlVniLE756Ix5sOV6wwxkvm9c9EXs/t8URizfuP8zDGH7tUihhhiiCHmf8TkzRGFqpjrNvOI4RkUxRxHTDRxY3TccOojfUpjXBBdqluBx29fHVrInobBVMnun+/vtzLF+YzG+D8Tvq/mG45ckYU16T4R1DdxU0I3bnyxxhmz/9p/qerSfrbJete1kXQ+dF/Hd3P6PJKUhxgAAAAAAAAAAAAAAAAAAABwSv8AkJ81XG/eK0EAAAAASUVORK5CYII="
                  }
                  alt=""
                  className="w-full sm:h-[350px] h-[250px] rounded-lg object-cover"
                  height={220}
                  width={220}
                  unoptimized
                />
                <h6 className="text-xl font-semibold text-black">
                  {ele.title}
                </h6>
                <p className="text-sm text-black">{ele.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPage3;
