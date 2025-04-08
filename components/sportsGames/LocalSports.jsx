import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Pickleball",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737905996494-FD8OLIH157PT97IAX7J7/unsplash-image-0wbYOLZwDPY.jpg?format=500w",
    desc: "Play Pickleball a paddle sport that combines elements of tennis, badminton, and ping-pong. It's played with a plastic ball and paddles on a court that's similar in size to a badminton court",
  },
  {
    id: 2,
    title: "Box cricket",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738010274168-RBGYAR4UNOW6JONBPYLF/unsplash-image-dE3exzmYlKc.jpg?format=500w",
    desc: "Play Box Cricket is a version of the game of cricket that retains many of the characteristics of the original game but is played for fun in a more controlled environment, making it more accessible to casual players.",
  },
  {
    id: 3,
    title: "Squash",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737906104714-0OTPP0E3C299U005ZJQC/unsplash-image-Ucz3or3qDDA.jpg?format=500w",
    desc: "Play Squash a racquet sport played by two players (or four players for doubles) in a four-walled court with a small, hollow rubber ball.",
  },
  {
    id: 4,
    title: "Table Tennis",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737906160928-ZINPYNOQJV88KE0PBTLP/unsplash-image-hdHMZumzLTo.jpg?format=500w",
    desc: "Boost your reflexes and have fun with table tennis—a fast-paced game for all ages! Stay active, sharpen your focus, and enjoy exciting rallies with friends or in competition.",
  },
  {
    id: 5,
    title: "Badminton",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738010158745-WRVAFDQ4DTU0C3OHENWN/unsplash-image-hVeOZslMjGA.jpg?format=500w",
    desc: "Experience the thrill of badminton—an exciting sport that keeps you active and energized! Improve your agility, reflexes, and stamina while having fun with friends or in competition.",
  },
  {
    id: 6,
    title: "Football",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738010321791-XWEYZ5Y68SP1PHHQHAEC/unsplash-image-OgqWLzWRSaI.jpg?format=500w",
    desc: "Unleash your energy with football—a dynamic sport that builds teamwork, speed, and endurance! Feel the excitement of the game as you score goals and create unforgettable moments on the field.",
  },
  {
    id: 7,
    title: "Billiards",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738010081258-A640A12QLDYF0HVN620O/unsplash-image-DUcVepObkXk.jpg?format=500w",
    desc: "Sharpen your focus and strategy with billiards—a game of skill, precision, and finesse! Enjoy a relaxed yet competitive experience while mastering every shot on the table.",
  },
  {
    id: 8,
    title: "Pool",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738010120707-6DIEJNLK9XJP5DME9NRT/unsplash-image-6UeBe2HqziA.jpg?format=500w",
    desc: "Sharpen your focus and strategy with billiards—a game of skill, precision, and finesse! Enjoy a relaxed yet competitive experience while mastering every shot on the table.",
  },
];

const LocalSports = () => {
  return (
    <section className="sm:py-32 py-10">
      <div className="main-container">
        <h6 className="mb-20 text-5xl text-black font-semibold">
          Join in the local sports
        </h6>
        {data.length > 0 && (
          <div className="grid xl:gap-12 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {data.map((ele) => (
              <div className="h-full w-full flex flex-col items-start gap-5" key={ele.id}>
                <Image
                  src={ele.img}
                  alt={ele.title}
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-60 h-80 object-cover"
                />
                <h3 className="text-black text-start text-3xl font-semibold">
                  {ele.title}
                </h3>
                <p className="text-black text-lg">
                  {ele.desc.length > 120
                    ? `${ele.desc.slice(0, 120)}...`
                    : ele.desc}
                </p>
                <button className="bg-black text-white text-center text-sm font-semibold mt-auto hover:opacity-75 p-3 cursor-pointer">Learn More</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LocalSports;
