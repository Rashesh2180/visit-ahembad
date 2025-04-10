"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";
import Image from "next/image";


const data = [
  {
    id: 1,
    title: "Jade Roller",
    category: "beauty",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917769-4V2290PAV3M0T0J97PJI/image-asset.jpeg?format=750w",
    price: "20",
    desc: "This is a self care product. Designed to help you restore and regenerate. It is the ultimate in self care essentials.",
    features: ["BPA Free", "Domestically Assembled", "Cruelty Free"],
  },
  {
    id: 2,
    title: "Spice Cleanse Set",
    category: "wellness",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917780-O0PP4Q6D0GMVMK8CTZV1/Stocksy_comp_1995924.jpg?format=750w",
    price: "35",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
  },
  {
    id: 3,
    title: "Magnesium+ Supplements",
    category: "wellness",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917804-LSTZQNVPC33UCF30OZXI/Stocksy_comp_1070346.jpg?format=750w",
    price: "38",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
  },
  {
    id: 4,
    title: "Tea Tree Oil Serum",
    category: "beauty",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917839-ST9FJ0QKRSRBH4N6M9KO/image-asset.jpeg?format=750w",
    price: "32",
    desc: "This is a skin care product. Carefully formulated to hydrate and replenish. With essential vitamins and minerals to restore the vitality of your skin.",
    features: ["Organic", " Domestically Grown", "Cruelty Free"],
  },
  {
    id: 5,
    title: "Rose Infused Eye Cream",
    category: "wellness",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917848-HXXX3EBHPL6O9P2WHIY9/Stocksy_comp_3166128.jpg?format=750w",
    price: "24",
    desc: "This is a skin care product. Carefully formulated to hydrate and replenish. With essential vitamins and minerals to restore the vitality of your skin.",
    features: ["Organic", " Domestically Grown", "Cruelty Free"],
  },
  {
    id: 6,
    title: "Soap Making Kits",
    category: "beauty",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917865-57BN1K40CJE55M7O6HLN/Stocksy_comp_1491938.jpg?format=750w",
    price: "18",
    desc: "This is a self care product. Designed to help you restore and regenerate. It is the ultimate in self care essentials.",
    features: [""],
  },
  {
    id: 7,
    title: "Sunflower Seed Cleansing Oil",
    category: "beauty",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917884-JX3II521WZ8AR0VEOQ11/Stocksy_comp_2136274.jpg?format=750w",
    desc: "This is a skin care product. Carefully formulated to hydrate and replenish. With essential vitamins and minerals to restore the vitality of your skin.",
    price: "43",
    features: ["Organic", " Domestically Grown", "Cruelty Free"],
  },
  {
    id: 8,
    title: "matcha set",
    category: "wellness",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1650022648045-G5KRF4M1STFJ0HQAGNFY/Stocksy_comp_2406227.jpeg?format=750w",
    price: "43",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. ",
  },
];


const ProductDetail = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const nameFromURL = productName.replace(/-/g, " ").toLowerCase();
    const found = data.find((item) => item.title.toLowerCase() === nameFromURL);
    setProduct(found);
  }, [productName]);

  const handleAddToCart = () => {
    if (!product) return;
    setLoading(true);
    setTimeout(() => {
      addToCart(product, quantity);
      router.push("/cart");
    }, 1000);
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product)
    return <div className="p-10 text-center">Product not found.</div>;

  return (
    <section className="sm:py-20 py-10 bg-[#EFEBFA]">
      <div className="flex items-center sm:mb-14 mb-7 main-container flex-wrap">
        <h2 className="text-3xl font-bold text-black">Shop:- </h2>
        <h3 className="text-2xl font-semibold text-black">{product.title}</h3>
      </div>
      <div className="main-container flex lg:gap-16 gap-8 max-md:flex-col items-center">
        <Image
          src={product.img}
          alt={product.title}
          width={600}
          height={400}
          unoptimized
          className="rounded-2xl object-cover flex-1 md:max-h-[500px] max-h-[300px] w-full"
        />
        <div className="flex-1">
          <h2 className="text-black sm:mb-8 mb-4 sm:text-4xl text-2xl font-semibold">{product.title}</h2>
          <p className="text-xl text-black mb-4">Price: <span className="font-semibold">₹{product.price}.00</span></p>
          <p className="text-base text-gray-700 mb-6">
           {product.desc}
          </p>

          <div className="flex items-center gap-4 mb-8 max-sm:justify-end">
            <span className="font-semibold text-lg text-black">Quantity:</span>
            <div className="flex items-center border border-black rounded-full overflow-hidden">
              <button
                onClick={decrement}
                className="px-4 cursor-pointer py-2 text-black hover:bg-black hover:text-white"
              >
                −
              </button>
              <span className="px-6 py-2 text-black">{quantity}</span>
              <button
                onClick={increment}
                className="px-4 text-black py-2 cursor-pointer hover:bg-black hover:text-white"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={loading}
            className="bg-black text-white hover:bg-white max-sm:ml-auto hover:text-black border border-black cursor-pointer px-6 py-3 rounded-full flex items-center gap-3"
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5"></span>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
