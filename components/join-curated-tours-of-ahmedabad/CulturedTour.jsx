import React from "react";
import Image from "next/image";
const data = [
  {
    id: 1,
    title: "Patan & Modhera: The Stepwells and Sun Temple Tour",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738044750655-Z44NY4A1OY2NMY8XMO3G/unsplash-image-t-42dZ63_P8.jpg?format=500w",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. ",
  },
  {
    id: 2,
    title: "Champaner-Pavagadh: UNESCO Heritage & Spirituality Tour",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738044788523-DP13LJTE0P8AV5WL8TJU/unsplash-image-O0tYBn1DfYk.jpg?format=500w",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. ",
  },
  {
    id: 3,
    title: "Palitana: The Jain Pilgrimage Tour",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/7fbc1a3c-0a5a-4615-9337-4755ba13bde3/Samovsaran_Mandir_Palitana_01.jpg?format=500w",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. ",
  },
  {
    id: 4,
    title: "Lothal: Indus Valley Civilization Tour",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/f0364a8b-f086-4623-a314-e7c3533afa05/Lothal.jpg?format=500w",
    desc: "MIt all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. ",
  },
  {
    id: 5,
    title: "Vadnagar & Taranga: Buddhist Heritage and Serenity Tour",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/51ad74fd-27c9-4e5a-95a8-e5caebe5e94f/Buddhist_Monastery_at_Vadnagar_5.jpg?format=500w",
    desc: "Description goes here",
  },
  {
    id: 6,
    title: "Nal Sarovar & Vautha: Nature and Intangible Heritage Tour",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1273a115-fabe-46c6-b9ed-30cdebff72fe/nal+sarovar+2.jpg?format=500w",
    desc: "Description goes here",
  },
];

const CulturedTour = () => {
  return (
    <section className="py-20 bg-[#F1FFE0]">
      <div className="main-container">
        <h6 className="section-title sm:mb-20 mb-10 text-center">Curated Cultural Tours</h6>

        {data.length > 0 && (
          <div className="grid xl:gap-12 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto">
            {data.map((ele) => (
              <div
                className="h-full w-full flex flex-col items-start gap-5"
                key={ele.id}
              >
                <Image
                  src={ele.img}
                  alt={ele.title}
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-60 h-80 object-cover"
                />
                <h3 className="text-black text-start text-xl font-semibold">
                  {ele.title}
                </h3>
                <p className="text-black text-sm">
                  {ele.desc.length > 200
                    ? `${ele.desc.slice(0, 200)}...`
                    : ele.desc}
                </p>

              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CulturedTour;
